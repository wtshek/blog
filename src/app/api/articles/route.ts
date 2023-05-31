import { getPublishedPostList } from "@/lib/notion";
import { NextResponse } from "next/server";

export const GET = async () => {
  const posts = await getPublishedPostList();

  return NextResponse.json(posts);
};
