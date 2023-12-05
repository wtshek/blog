import { MappedBook, NotionPostType } from "@/utils/types";
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
      filter: {
        property: "progress",
        status: {
          equals: "Published",
        },
      },
    });
    const { results } = database;

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
        and: [
          {
            property: "category",
            multi_select: {
              contains: categoryName,
            },
          },
          {
            property: "progress",
            status: {
              equals: "Published",
            },
          },
        ],
      },
    });
    return posts as unknown as { results: NotionPostType[] };
  };

  public getAllBooks = async (): Promise<MappedBook[]> => {
    const books = await this.notion.databases.query({
      database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
      filter: {
        and: [
          {
            property: "type",
            select: {
              equals: "Book",
            },
          },
        ],
      },
    });
    return (books as unknown as { results: NotionPostType[] }).results.map(
      (item: NotionPostType) => ({
        id: item.id,
        title: item.properties.title.title[0].plain_text,
        cover: item.cover?.file.url || "",
      })
    );
  };
}

const notionAPI = new NotionAPI();

export default notionAPI;

export const utils = {
  getTitle: (post: NotionPostType) => post.properties.title.title[0].plain_text,
};
