import { PostType } from "@/utils/types";
import Image from "next/image";

import arrowIcon from "../../public/svg/arrow-right.svg";

const IMAGE_WIDTH = 231;
const IMAGE_HEIGHT = 256;

const categorizeArticle = (
  articles: PostType[]
): { [key: string]: PostType[] } => {
  return articles?.reduce(
    (obj: { [key: string]: PostType[] }, article: PostType) => {
      const category = article.content.category[0];
      const articles = obj[category] || [];
      obj[category] = [...articles, article];

      return obj;
    },
    {}
  );
};

export default async function Home() {
  const articlesRes = await fetch("http://localhost:3000/api/articles");
  const configRes = await fetch("http://localhost:3000/api/config");
  const articles = await articlesRes.json();
  const articleCategorized = categorizeArticle(articles);
  const categories = Object.keys(articleCategorized);
  const config = await configRes.json();

  return (
    <main className="padding-x">
      <div className="lg:grid lg:grid-cols-2">
        <div className="text-sm lg:text-base leading-6">
          <div>
            Hi there, <br />
            <div className="mt-5">
              I am a <br />
              <span className="font-marker">Writer</span> <br />
              <span className="font-marker">Web Developer</span> <br />
              <span className="font-marker">Life Long Learner</span> <br />
              who specialized in
              <span className="text-primary"> Gaining Experience</span>
            </div>
          </div>
          <div className="mt-4 hidden lg:block">{config["about-me"]}</div>
        </div>
        {config.avatar ? (
          <Image
            src={config.avatar}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt="avatar"
            className="hidden lg:block justify-self-end"
          />
        ) : (
          <div className="hidden lg:block bg-gray-400 w-[231px] h-[256px] justify-self-end"></div>
        )}
      </div>
      <div className="lg:hidden w-full rounded-3xl bg-primary py-3 px-4 flex items-center flex-col mt-[75px]">
        <div
          className="w-[17.8vw] h-[17.8vw] rounded-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${config.avatar})`,
          }}
        ></div>
        <div className="text-white text-sm mt-[10px]">{config["about-me"]}</div>
      </div>
      <div className="grid lg:grid-cols-2 my-[82px] gap-x-5 gap-y-[41px]">
        {categories.map((cat) => {
          return (
            <div key={cat}>
              <div className="w-full rounded-3xl bg-secondary py-3 px-4 text-sm lg:text-base">
                <div className="text-xl md:text-2xl font-semi-bold">{cat}</div>
                {config[`[${cat.toLowerCase()}]-intro`] && (
                  <div className="my-[11px]">
                    {config[`[${cat.toLowerCase()}]-intro`]}
                  </div>
                )}

                <div>
                  {articleCategorized[cat]
                    .slice(0, 4)
                    .map((article: PostType) => {
                      const title = article.content.title;
                      return (
                        <div className="underline text-sm" key={title}>
                          {title}
                        </div>
                      );
                    })}
                </div>
                <div className="flex items-center mt-1">
                  View More <Image src={arrowIcon} alt="arrow icon" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
