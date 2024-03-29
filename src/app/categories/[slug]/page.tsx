import notionAPI, { utils } from "@/lib/notion";
import { NotionPostType } from "@/utils/types";
import { getPostUrl } from "@/utils/utilts";
import clsx from "clsx";
import Link from "next/link";

type PageProps = {
  params: { slug: string };
};

export const revalidate = 1800;

const Page: ({ params }: PageProps) => Promise<any> = async ({ params }) => {
  const category = params.slug;
  const posts = await notionAPI.getPostsByCategory(category);

  return (
    <div className="padding-x lg:max-w-[930px] my-8 m-auto w-full">
      <h3 className="text-h3-small lg:text-h3 mb-8">{category}</h3>
      {posts.results.map((item: NotionPostType, index: number) => (
        <Link key={`${category}-${index}`} href={getPostUrl(item.id)}>
          <div className={clsx("underline", { "mt-2": index !== 0 })}>
            {utils.getTitle(item)}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
