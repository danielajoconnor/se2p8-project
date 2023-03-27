export default async function handler(req, res) {

  const response = await fetch(
    `https://newsapi.org/v2/everything?q="lake+district"&sortBy=publishedAt&pageSize=10&apiKey=${process.env.NEWSAPI_KEY}`
  );
  const data = await response.json();

  const { articles } = data;

  console.log(process.env.NEWSAPI_KEY);
  res.json({ articles: articles });
}
