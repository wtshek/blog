import notionAPI from "@/lib/notion";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const categorised = searchParams.get("categorised");
  const category = searchParams.get("category");

  if (categorised === "true") {
    const res = await notionAPI.getCategorizedPosts();
    return NextResponse.json(res);
  }

  if (!!category) {
    const res = await notionAPI.getPostsByCategory(category);

    return NextResponse.json(res);
  }

  return NextResponse.json({});
}
