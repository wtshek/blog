import notionAPI from "@/lib/notion";
import { NextResponse } from "next/server";

export const GET = async () => {
  const categories = await notionAPI.getCategories();

  return NextResponse.json(categories);
};
