import {
  Category,
  NotionConfigType,
  NotionDatabaseType,
  NotionPostType,
  PostType,
} from "@/utils/types";
import { Client } from "@notionhq/client";

// TODO: add lowercase func

type CategoryMultiSelectType = Pick<
  NotionDatabaseType["properties"]["Category"],
  "multi_select"
>;

class NotionAPI {
  private notion: Client;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_INTEGRATION_KEY,
    });
  }

  private filterPublishedPost = (item: NotionPostType) =>
    item.properties.progress.select?.name === "Published";

  private mapPosts = (item: NotionPostType): PostType => {
    const {
      type: type,
      date: date,
      category: category,
      title: title,
      abstract: abstract,
    } = item.properties;

    return {
      pageType: item.object,
      id: item.id,
      createdAt: item.created_time,
      updatedAt: item.last_edited_time,
      cover: item.cover,
      parent: item.parent,
      recordType: type?.select?.name.toLowerCase(),
      url: item.url,
      content: {
        publishedDate: date.date.start,
        category: category.multi_select.map((select) => select.name),
        title: title.title[0].plain_text,
        abstract: abstract.rich_text[0].plain_text,
      },
    };
  };

  private mapConfig = (item: NotionConfigType) => {
    const { name, content, media } = item.properties;

    return {
      pageType: item.object,
      id: item.id,
      createdAt: item.created_time,
      updatedAt: item.last_edited_time,
      cover: item.cover,
      parent: item.parent,
      url: item.url,
      content: {
        name: name.title[0].plain_text,
        content: content.rich_text?.[0]?.plain_text,
        media: media.files[0]?.file?.url,
      },
    };
  };

  public getCategories = async (): Promise<Category[]> => {
    const database = await this.notion.databases.retrieve({
      database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
    });

    return (
      database.properties.Category as unknown as CategoryMultiSelectType
    ).multi_select.options.map((option) => ({
      id: option.id,
      name: option.name,
    }));
  };

  public getPublishedPostList = async (): Promise<PostType[]> => {
    const res = await this.notion.databases.query({
      database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
    });

    return (res.results as NotionPostType[])
      .filter(this.filterPublishedPost)
      .map(this.mapPosts);
  };

  public getConfigContent = async (): Promise<{ [key: string]: string }> => {
    const { results } = await this.notion.databases.query({
      database_id: process.env.NOTION_BLOG_CONFIG_DATABASE_KEY || "",
    });

    return (results as NotionConfigType[]).reduce((obj, currItem) => {
      const { properties } = currItem;
      const title = properties.name.title[0].plain_text || "";
      const media = properties.media.files;
      obj[title] = media.length
        ? media[0].file.url
        : properties.content.rich_text[0].plain_text;

      return obj;
    }, {} as { [key: string]: string });
  };
}

const notionAPI = new NotionAPI();

export default notionAPI;
