"use client";

import { Book } from "@/components/Book";
import { MappedBook } from "@/utils/types";
import React, { FC } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type BookCarouselProps = {
  data: MappedBook[];
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export const BookCarousel: FC<BookCarouselProps> = ({ data }) => {
  return (
    <Carousel
      autoPlay={false}
      swipeable={false}
      responsive={responsive}
      infinite
      ssr
      keyBoardControl={false}
      showDots
      arrows={false}
      className="py-8"
    >
      {data.map((item) => (
        <Book key={item.id} data={item} />
      ))}
    </Carousel>
  );
};
