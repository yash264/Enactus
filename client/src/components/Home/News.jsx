import React, { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  axios.defaults.withCredentials = true;
  
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://enactusserver.onrender.com/fetchNews');

        setArticles(response.data.message.articles);
        setLoading(false);

      }catch(error){
        console.log(error);
        setLoading(false);
      }
    };
    fetchNews();
  }, [loading]);

  if (loading) return <p className="text-center text-lg text-gray-600">Loading news...</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Enactus News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.slice(0, 6).map((article, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                {article.description
                  ? article.description.slice(0, 100) + "..."
                  : "No description available."}
              </p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
