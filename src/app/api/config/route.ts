import notionAPI from "@/lib/notion";
import { NextResponse } from "next/server";

export const GET = async () => {
  const config = await notionAPI.getConfigContent();

  return NextResponse.json(config);
};
