import { useEffect, useState } from "react";
import SubTitle from "@/components/shared/title/subtitle";
import API_KEY from "@/utils/newsapi";

export default function News() {
  const [articles, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await fetch(`/api/news-api`);
    const data = await response.json();

    const { articles } = data;

    setNews(articles);
  };

  if (!articles.length) {
    return (
      <div className="flex flex-wrap text-center">
        <div className="w-full text-center mx-auto bg-nature5">
          <h1 className="py-[31px] md:py-[63px] font-serif text-3xl md:text-6xl tracking-tight text-nature1">
            News
          </h1>
        </div>
        <div className="w-full sm:grid-cols-1 md:grid-cols-2 text-center px-24 mx-auto text-base md:text-2xl py-16 text-nature1 tracking-tight bg-nature4">
              <p className="animate-pulse">...</p>
          </div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap text-center">
      <div className="w-full text-center mx-auto bg-nature5">
        <h1 className="py-[31px] md:py-[63px] font-serif text-3xl md:text-6xl tracking-tight text-nature1">
          News
        </h1>
      </div>
      <ul className="w-full">
        {articles.map((article) => (
          <li
            key={article.url}
            className="text-nature1 py-4 odd:bg-nature3 even:bg-nature4  w-full list-none font-serif"
          >
            <a className="text-xl underline" href={article.url}>
              {article.title}
            </a>
            <h2 className="text-sm">{article.author}</h2>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
