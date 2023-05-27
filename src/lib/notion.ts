import { NotionRecordType } from "@/utils/types";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_INTEGRATION_KEY,
});

const filterPublishedPost = (item: NotionRecordType) =>
  item.properties.Progress.select?.name === "Published";

const mapPosts = (item: NotionRecordType) => {
  const {
    Type: type,
    Date: date,
    Category: category,
    Title: title,
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
      publishDate: date.date.start,
      category: category.multi_select.map((select) => select.name),
      title: title.title[0].plain_text,
    },
  };
};

export const getPublishedPostList = async () => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_POST_LIST_DATABASE_KEY || "",
  });

  return (res.results as NotionRecordType[])
    .filter(filterPublishedPost)
    .map(mapPosts);
};

getPublishedPostList();
