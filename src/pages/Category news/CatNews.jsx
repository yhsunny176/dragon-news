import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import NewsCard from "../../Layouts/NewsCard/NewsCard";

const CatNews = () => {
    const { id } = useParams();
    const catNewsData = useLoaderData();
    const [catNews, setCatNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCatNews(catNewsData);
            return;
        } else if (id == "1") {
            const breakingNews = catNewsData.filter((news) => news.others.is_today_pick === true);
            setCatNews(breakingNews);
            return;
        } else {
            const otherNews = catNewsData.filter((news) => news.category_id == id);
            setCatNews(otherNews);
        }
    }, [catNewsData, id]);

    return (
        <div>
          <h1 className="text-blk-txt-primary text-lg font-bold">Dragon News Home</h1>
            <div className="grid grid-cols-1 gap-5">
              {
                catNews.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>)
              }
            </div>
        </div>
    );
};

export default CatNews;
