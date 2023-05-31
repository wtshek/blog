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

export type NotionProgressType = {
  id: string;
  type: string;
  select: {
    id: string;
    name: "Draft" | "Published";
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

export type NotionRichTextType = {
  id: string;
  type: string;
  rich_text: {
    type: string;
    text: { content: string; link: null | string };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: null | string;
  }[];
};

export type NotionPostType = {
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
    Abstract: NotionRichTextType;
  };
  url: string;
};

export type NotionDatabaseType = {
  object: string;
  id: string;
  cover: null;
  icon: {
    type: string;
    emoji: string;
  };
  created_time: string;
  created_by: {
    object: string;
    id: string;
  };
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  title: {
    type: string;
    text: {
      content: string;
      link: null;
    };
    annotations: {
      bold: boolean;
      italic: boolean;
      strikethrough: boolean;
      underline: boolean;
      code: boolean;
      color: string;
    };
    plain_text: string;
    href: null;
  }[];
  description: any[];
  is_inline: boolean;
  properties: {
    Abstract: {
      id: string;
      name: string;
      type: string;
      rich_text: {};
    };
    Type: {
      id: string;
      name: string;
      type: string;
      select: {
        options: {
          id: string;
          name: string;
          color: string;
        }[];
      };
    };
    Date: {
      id: string;
      name: string;
      type: string;
      date: {};
    };
    Progress: {
      id: string;
      name: string;
      type: string;
      select: {
        options: {
          id: string;
          name: string;
          color: string;
        }[];
      };
    };
    Category: {
      id: string;
      name: string;
      type: string;
      multi_select: {
        options: {
          id: string;
          name: string;
          color: string;
        }[];
      };
    };
    Title: {
      id: string;
      name: string;
      type: string;
      title: {};
    };
  };
  parent: {
    type: string;
    workspace: boolean;
  };
  url: string;
  archived: boolean;
};

export type Category = {
  id: string;
  name: string;
};

export type PostType = {
  pageType: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  cover: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  recordType: string;
  url: string;
  content: {
    publishedDate: string | null;
    category: string[];
    title: string;
    abstract: string;
  };
};
