import notionAPI, { utils } from "@/lib/notion";
import { CONFIG } from "@/utils/constants";
import { NotionPostType } from "@/utils/types";
import clsx from "clsx";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

const Page: ({ params }: PageProps) => Promise<any> = async ({ params }) => {
  const category = params.slug;
  const posts = await notionAPI.getPostsByCategory(category);

  return (
    <div className="padding-x lg:max-w-[930px] my-8 m-auto w-full">
      <h3 className="text-h3-small lg:text-h3 mb-8">{category}</h3>
      {posts.results.map((item: NotionPostType, index: number) => (
        <Link key={`${category}-${index}`} href={`/posts/${item.id}`}>
          <div className={clsx("underline", { "mt-2": index !== 0 })}>
            {utils.getTitle(item)}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
