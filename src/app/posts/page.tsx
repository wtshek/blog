import { CategorisedPostList } from "@/components/CategorisedPostLists";
import notionAPI from "@/lib/notion";

const Page = async () => {
  const data = await notionAPI.getCategorizedPosts();

  return (
    <CategorisedPostList
      containerClassName="lg:max-w-[930px] m-auto"
      data={data}
    />
  );
};

export default Page;
