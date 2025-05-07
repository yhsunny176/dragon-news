import React, { useEffect, useState } from "react";
import Header from "../../Components/header/Header";
import RightAside from "../../Layouts/Home/RightAside";
import { useLoaderData, useParams } from "react-router";
import SingleNews from "../../Components/SingleNews/SingleNews";

const News = () => {
  const data = useLoaderData();
  const {id} = useParams();
  const [news, setNews] = useState({});

  useEffect(() => {
    const newsDetails = data.find(singleNews => singleNews.id == id);
    setNews(newsDetails);
  },[data, id])

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <section className="grid grid-cols-12 max-w-11/12 gap-6 mx-auto">
              <div className="col-span-9">
                <SingleNews news={news}></SingleNews>
              </div>

              <div className="col-span-3">
                <RightAside></RightAside>
              </div>
            </section>
        </div>
    );
};

export default News;
