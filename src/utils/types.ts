export type NotionUserType = {
  object: string;
  id: string;
};

export type NotionSelectType = {
  id: string;
  type: string;
  select: {
    id: string;
    name: string;
    color: string;
  };
};

export type NotionDatabaseProgressEnum = "Draft" | "Published";

export type NotionProgressType = {
  id: string;
  type: string;
  select: {
    id: string;
    name: NotionDatabaseProgressEnum;
    color: string;
  };
};

export type NotionDateType = {
  id: string;
  type: string;
  date: {
    start: string | null;
    end: null | string;
    time_zone: string | null;
  };
};

export type NotionMultiSelectType = {
  id: string;
  type: string;
  multi_select: {
    id: string;
    name: string;
    color: string;
  }[];
};

export type NotionTitleType = {
  id: string;
  type: string;
  title: {
    type: string;
    text: { content: string; link: null | string }[];
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    }[];
    plain_text: string;
    href: null | string;
  }[];
};

export type NotionRecordType = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUserType;
  last_edited_by: NotionUserType;
  cover: string | null;
  icon: null | string;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  properties: {
    Type: NotionSelectType;
    Date: NotionDateType;
    Progress: NotionProgressType;
    Category: NotionMultiSelectType;
    Title: NotionTitleType;
  };
  url: string;
};
