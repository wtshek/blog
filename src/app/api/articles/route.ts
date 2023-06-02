import notionAPI from "@/lib/notion";
import { NextResponse } from "next/server";

export const GET = async () => {
  const posts = await notionAPI.getPublishedPostList();

  return NextResponse.json(posts);
};
