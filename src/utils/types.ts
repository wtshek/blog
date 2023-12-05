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

export type NotionFileType = {
  id: string;
  type: string;
  files: {
    name: string;
    type: string;
    file: {
      url: string;
      expiry_time: string;
    };
  }[];
};

export type NotionDatabaseRowBaseType = {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUserType;
  last_edited_by: NotionUserType;
  cover: {
    type: string;
    file: {
      url: string;
      expiry_time: string;
    };
  };
  icon: null | string;
  parent: {
    type: string;
    database_id: string;
  };
  archived: boolean;
  url: string;
};

export type NotionPostType = NotionDatabaseRowBaseType & {
  properties: {
    type: NotionSelectType;
    date: NotionDateType;
    progress: NotionProgressType;
    category: NotionMultiSelectType;
    title: NotionTitleType;
    abstract: NotionRichTextType;
  };
};

export type NotionConfigType = NotionDatabaseRowBaseType & {
  properties: {
    media: NotionFileType;
    content: NotionRichTextType;
    name: NotionTitleType;
  };
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

export type BaseRecordType = {
  pageType: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  cover: string | null;
  parent: {
    type: string;
    database_id: string;
  };
  url: string;
};

export type PostType = BaseRecordType & {
  recordType: string;
  content: {
    publishedDate: string | null;
    category: string[];
    title: string;
    abstract: string;
  };
};

export type ConfigType = BaseRecordType & {
  content: {
    name: string;
    content?: string;
    media?: string;
  };
};

export type RichTextType = {
  rich_text: {
    type: string;
    text: {
      content: string;
      link: string | null;
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
    href: string | null;
  }[];
  color: string;
};

export type ImageType = {
  caption: string[];
  file: {
    expiry_time: string;
    url: string;
  };
  type: string;
};

export type MappedBook = {
  id: string;
  title: string;
  cover: string;
};
