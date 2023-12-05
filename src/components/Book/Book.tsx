import { getPostUrl } from "@/utils/utilts";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

const BOOK_FALLBACK_IMAGE = "/book_fallback.jpg";
const BOOK_COVER_WIDTH = 200;
const BOOK_COVER_HEIGHT = 400;

type BookProps = {
  data: {
    id: string;
    title: string;
    cover: string;
  };
};

export const Book: FC<BookProps> = ({ data }) => {
  return (
    <Link
      href={getPostUrl(data.id)}
      className="hover:scale-110 duration-75 h-full"
    >
      <div className="flex flex-col gap-4 items-center  h-full">
        <Image
          src={data.cover || BOOK_FALLBACK_IMAGE}
          alt={data.title}
          width={BOOK_COVER_WIDTH}
          height={BOOK_COVER_HEIGHT}
          priority
        />
        <div className="font-bold mt-auto">{data.title}</div>
      </div>
    </Link>
  );
};
