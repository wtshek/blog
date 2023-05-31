"use client";

import { Category } from "@/utils/types";
import clsx from "clsx";
import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";

const START_INDEX = 2;

type CategoryCarouselProps = {
  categories: Category[];
  selectedCategory: string;
  startIndex?: number;
};

export const CategoryCarousel: FC<CategoryCarouselProps> = ({
  categories,
  selectedCategory,
  startIndex,
}) => {
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    startIndex: startIndex || START_INDEX,
  });

  const onCategoryButtonClick = (category: string) => () =>
    console.log(category);

  return (
    <div className="lg:invisible fixed bottom-8 text-white h-10 left-0 right-0 padding-x">
      <div className="w-[92vw] h-full bg-primary rounded-lg absolute"></div>
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full items-center">
          {categories?.map(({ name, id }, index) => (
            <button
              className={clsx({
                "min-w-0 ml-3 flex justify-center items-center h-full": true,
                "bg-white text-primary rounded-lg": id === selectedCategory,
              })}
              style={{
                flex: "0 0 25%",
              }}
              onClick={onCategoryButtonClick(id)}
              key={`${name}-${index}`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
