"use client";

import { NotionRenderer } from "react-notion-x";

export const NotionPageRenderer = ({ recordMap }: { recordMap: any }) => (
  <NotionRenderer
    recordMap={recordMap}
    fullPage={true}
    darkMode={false}
    pageHeader={false}
  />
);
