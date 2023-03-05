import { useEffect, useState } from "react";
import SubTitle from "@/components/shared/title/subtitle";
import API_KEY from "@/utils/newsapi";

export default function NewsApi() {
  const [articles, setNews] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q="lake+district"&sortBy=publishedAt&pageSize=10&apiKey=${API_KEY}`
    );
    const data = await response.json();

    const { articles } = data;

    console.log(process.env);

    setNews(articles);
  };

  return (
    <div className="flex flex-wrap text-center">
      {/* <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url}>{article.title}</a>
            <p>{article.description}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
