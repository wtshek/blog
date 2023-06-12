import { NotionPostType } from "@/utils/types";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import arrowIcon from "../../../public/svg/arrow-right.svg";

type CategorisedPostListType = {
  data: [{ id: string; name: string; color: string }, NotionPostType[]][];
  containerClassName?: string;
};

export const CategorisedPostList: FC<CategorisedPostListType> = ({
  data,
  containerClassName,
}) => {
  return (
    <section
      className={clsx(
        "py-[76px] grid gap-[76px] lg:grid-cols-2 padding-x",
        containerClassName
      )}
    >
      {Object.values(data).map(([category, posts]) => {
        return (
          <div key={category.id}>
            <div className="border-b-2 border-primary mb-4">
              <div className="bg-primary inline-block py-[10px] px-4 text-h3-small lg:text-h3">
                {category.name}
              </div>
            </div>
            {posts.map((post, index) => (
              <div
                className={clsx("underline", {
                  "mt-2": index !== 0,
                })}
                key={post.id}
              >
                <Link href={`/posts/${post.id}`}>
                  {post.properties.title.title[0].plain_text}
                </Link>
              </div>
            ))}
            <Link href={`/categories/${category.name}`}>
              <div className="underline mt-2 flex items-center">
                View More <Image src={arrowIcon} alt="arrow-svg" />
              </div>
            </Link>
          </div>
        );
      })}
    </section>
  );
};
