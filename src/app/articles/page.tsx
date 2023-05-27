import clsx from "clsx";

const articles = [
  {
    id: "id",
    title: "How to overcome the fear of getting started",
    categories: ["Youtube"],
    publishedDate: "April 13, 2023",
    abstract:
      "The unfamiliar is scary territory to be in. Whether we're trying to ride a bike or want to start a blog, doing something new can be uncomfortable. This article explores the fear of getting started. That initial hesitation is",
  },
];

const categories = ["Psychology", "Personal Development", "Writing", "Habits"];

const Articles = () => {
  return (
    <div className="padding-x flex flex-col items-center">
      <h2 className="tracking-[4px] text-base mb-[7.9vw]">Articles</h2>
      <div className="text-primary self-start font-marker tracking-[7px] border-b-2 border-b-primary mb-[7.9vw] lg:text-5xl lg:border-b-4 lg:pb-4">
        Habit
      </div>
      <div className="lg:grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          {articles.map(
            ({ id, title, categories, publishedDate, abstract }) => (
              <div className="rounded-md shadow-lg px-4 py-4" key={id}>
                <h1 className="text-xl font-bold">{title}</h1>
                <div className="py-4 text-sm">{categories.join(",")}</div>
                <div className="pb-4 text-sm">{publishedDate}</div>
                <div className="text-sm">{abstract}</div>
              </div>
            )
          )}
        </div>
        <div className="invisible lg:visible lg:col-span-1 lg:ml-[80px]">
          <div className="text-xl">Categories</div>
          <div className="mt-2">
            {categories.map((category, index) => (
              <div
                key={category}
                className={clsx({
                  "pt-2": index !== 0,
                  "border-l-2 border-l-grey pl-2 pb-2": true,
                })}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Articles;
