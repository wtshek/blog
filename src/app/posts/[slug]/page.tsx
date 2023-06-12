import { NotionPageRenderer } from "@/components/NotionPageRenderer";
import { NotionAPI } from "notion-client";

type PageProps = {
  params: { slug: string };
};

const notion = new NotionAPI();

const Page: ({ params }: PageProps) => Promise<any> = async ({ params }) => {
  const { slug } = params;
  const recordMap = await notion.getPage(slug);

  return (
    <div className="padding-x max-w-full lg:max-w-[930px] m-auto">
      <NotionPageRenderer recordMap={recordMap} />
    </div>
  );
};

export default Page;
