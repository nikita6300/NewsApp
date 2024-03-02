import React, { useEffect, useState } from "react";
import { Newsitem } from "./Newsitem";

export const Newsboard = ({category}) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/everything?q=murder%20OR%20crime%20OR%20police%20OR%20criminal&language=en&sortBy=publishedAt&apiKey=3c9cc324760549c68b37da38436290c4 `;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        );
      })}
    </div>
  );
};
