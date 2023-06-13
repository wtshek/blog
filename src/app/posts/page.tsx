import { CategorisedPostList } from "@/components/CategorisedPostLists";
import notionAPI from "@/lib/notion";

export const revalidate = 1800;

const Page = async () => {
  const data = await notionAPI.getCategorizedPosts();

  return (
    <CategorisedPostList containerClassName="lg:w-[930px] m-auto" data={data} />
  );
};

export default Page;
