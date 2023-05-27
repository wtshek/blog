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

const Articles = () => {
  return (
    <div className="padding-x flex flex-col items-center">
      <h2 className="tracking-[4px] text-base font-bold mb-[7.9vw]">
        Articles
      </h2>
      <div className="text-primary self-start font-marker tracking-[7px] border-b-2 border-b-primary mb-[7.9vw]">
        Habit
      </div>
      {articles.map(({ id, title, categories, publishedDate, abstract }) => (
        <div className="rounded-md shadow-lg px-4 py-4" key={id}>
          <h1 className="text-xl font-bold">{title}</h1>
          <div className="py-4 text-sm">{categories.join(",")}</div>
          <div className="pb-4 text-sm">{publishedDate}</div>
          <div className="text-sm">{abstract}</div>
        </div>
      ))}
    </div>
  );
};

export default Articles;
