import { BookCarousel } from "@/components/BookCarousel";
import { CategorisedPostList } from "@/components/CategorisedPostLists";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import notionAPI from "@/lib/notion";
import Script from "next/script";

export const revalidate = 1800;

const BreakLine = () => <hr className="bg-grey" />;

export default async function Home() {
  const categorisedPostList = await notionAPI.getCategorizedPosts();
  const bookList = await notionAPI.getAllBooks();

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_GOOGLE_ANALYTICS_ID}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_GOOGLE_ANALYTICS_ID}');`}
      </Script>
      <main className="padding-x m-auto lg:max-w-[930px]">
        {/* Intro Section */}
        <section className="flex justify-center items-center flex-col relative pt-4 lg:mt-[79px]">
          <h1 className="text-h1-small lg:text-h1 text-center">
            A Journal to Know Myself and Explore The World
          </h1>
          <div className="w-[28vw] h-[28vw] max-w-[180px] max-h-[180px] rounded-full bg-[url('/2245.jpg')] bg-contain bg-center mt-10 mb-5"></div>
          <div>Join the community and never miss a post!</div>
          <SubscriptionForm />
        </section>
        <div className="absolute bg-primary w-screen h-1/3 lg:h-1/2 top-0 left-0 -z-10"></div>

        <BreakLine />

        <section className="py-[75px]">
          <h3 className="text-h3-small lg:text-h3">Hi, I am Shek</h3>
          <div className="p-small mt-3">
            I am a writer, web developer, to-be-baker, to-be-artist... But why
            do we have to put ourselves into different identities? I have
            decided my life need not to fit in an identity. I will try my best
            to try everything I want to try and share it to the world. This is
            the best gift I can contribute to the world.
            <br />
            <br />
            Here you would find the book I have read, the experience I have been
            through and the reflection on my life.
          </div>
        </section>

        <BreakLine />
        <CategorisedPostList data={categorisedPostList} />
        <BreakLine />
        <div className="hidden lg:block py-8">
          <BookCarousel data={bookList} />
        </div>
      </main>
    </>
  );
}
