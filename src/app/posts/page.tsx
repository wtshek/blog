import { CategorisedPostList } from "@/components/CategorisedPostLists";
import { CONFIG } from "@/utils/constants";
import { NotionPostType } from "@/utils/types";

const Page = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/posts?categorised=true`
  );
  const data = (await res.json()) as [
    { id: string; name: string; color: string },
    NotionPostType[]
  ][];

  return (
    <CategorisedPostList
      containerClassName="lg:max-w-[930px] m-auto"
      data={data}
    />
  );
};

export default Page;
