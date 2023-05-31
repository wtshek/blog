import {
  Category,
  NotionDatabaseType,
  NotionPostType,
  PostType,
} from "@/utils/types";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_KEY,
});

const filterPublishedPost = (item: NotionPostType) =>
  item.properties.Progress.select?.name === "Published";

const mapPosts = (item: NotionPostType): PostType => {
  const {
    Type: type,
    Date: date,
    Category: category,
    Title: title,
    Abstract: abstract,
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

type CategoryMultiSelectType = Pick<
  NotionDatabaseType["properties"]["Category"],
  "multi_select"
>;

export const getCategories = async (): Promise<Category[]> => {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
  });

  return (
    database.properties.Category as unknown as CategoryMultiSelectType
  ).multi_select.options.map((option) => ({
    id: option.id,
    name: option.name,
  }));
};

export const getPublishedPostList = async () => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
  });

  return (res.results as NotionPostType[])
    .filter(filterPublishedPost)
    .map(mapPosts);
};
