import { Book } from "@/components/Book/Book";
import notionAPI from "@/lib/notion";
import { getPostUrl } from "@/utils/utilts";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const books = await notionAPI.getAllBooks();

  return (
    <div className="padding-x py-8">
      <div className="font-bold text-3xl text-center py-8">Books</div>
      <div className="lg:max-w-[930px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => {
          return <Book key={book.id} data={book} />;
        })}
      </div>
    </div>
  );
};

export default Page;
