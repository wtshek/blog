"use client";

import { CategoryCarousel } from "@/components/Articles/CategoryCarousel";
import { Category, PostType } from "@/utils/types";
import clsx from "clsx";
import useSWR from "swr";

const categories = ["Psychology", "Growth", "Writing", "Habits"];

const categoriesDuplicated = [
  "Growth",
  "Psychology",
  "Habit",
  "Writing",
  "Growth",
  "Psychology",
  "Habit",
  "Writing",
  "Growth",
  "Psychology",
  "Habit",
  "Writing",
];

const selectedCategory = "Habit";

// TODO: sever side rendering optimised
// TODO: handle error state
// TODO: handle loading state
// pagination and category, if I only fetch a number of it

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

const Page = () => {
  const { data: posts, isLoading, error } = useSWR("/api/articles", fetcher);
  const { data: categories } = useSWR("/api/categories", fetcher);

  if (isLoading) {
    return <div>is loading...</div>;
  }

  return (
    <div className="padding-x flex flex-col items-center">
      <h2 className="tracking-[4px] text-base mb-[7.9vw]">Articles</h2>
      <div className="text-primary self-start font-marker tracking-[7px] border-b-2 border-b-primary mb-[7.9vw] lg:text-5xl lg:border-b-4 lg:pb-4">
        Habit
      </div>
      <div className="lg:grid lg:grid-cols-3 w-full">
        <div className="lg:col-span-2">
          {(posts as PostType[])?.map(({ id, content }) => {
            const { title, publishedDate, abstract, category } = content;
            return (
              <div className="rounded-md shadow-lg px-4 py-4" key={id}>
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="py-4 text-sm">{category.join(",")}</div>
                <div className="pb-4 text-sm">{publishedDate}</div>
                <div className="text-sm">{abstract}</div>
              </div>
            );
          })}
        </div>
        <div className="invisible lg:visible lg:col-span-1 lg:ml-[80px]">
          <div className="text-xl">Categories</div>
          <div className="mt-2">
            {(categories as Category[])?.map(({ name, id }, index) => (
              <div
                key={id}
                className={clsx({
                  "pt-2": index !== 0,
                  "border-l-2 border-l-grey pl-2 pb-2": true,
                })}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
      <CategoryCarousel
        categories={categories}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default Page;
