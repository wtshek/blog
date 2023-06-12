import { NotionPostType } from "@/utils/types";
import { Client } from "@notionhq/client";

class NotionAPI {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_INTEGRATION_KEY,
    });
  }

  public getCategorizedPosts = async (): Promise<{
    [key: string]: [
      { id: string; name: string; color: string },
      NotionPostType[]
    ];
  }> => {
    const database = await this.notion.databases.query({
      database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
    });
    const results = database.results;

    return results.reduce((prev: any, curr) => {
      const category = (curr as any).properties.category.multi_select[0];

      if (!prev[category.name]) {
        prev[category.name] = [category, [curr]];
      } else {
        prev[category.name] = [category, [...prev[category.name][1], curr]];
      }

      return prev;
    }, {});
  };

  public getPostsByCategory = async (
    categoryName: string
  ): Promise<{ results: NotionPostType[] }> => {
    const posts = await this.notion.databases.query({
      database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
      filter: {
        property: "category",
        multi_select: {
          contains: categoryName,
        },
      },
    });
    return posts as unknown as { results: NotionPostType[] };
  };
}

const notionAPI = new NotionAPI();

export default notionAPI;

export const utils = {
  getTitle: (post: NotionPostType) => post.properties.title.title[0].plain_text,
};
