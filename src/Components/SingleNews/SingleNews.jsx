import React from "react";
import { Link } from "react-router";

const SingleNews = ({ news }) => {
    const { category_id, image_url, title, details } = news;
    return (
        <div className="px-12 py-12 border-1 border-gray-200 rounded-xl">
            <div className="w-full h-96">
                <img src={image_url} alt="news image" className="w-full h-full object-cover"/>
            </div>
            <h1 className="mt-8 text-blk-txt-primary font-bold text-3xl">{title}</h1>
            <p className="mt-8 text-blk-txt-lt">{details}</p>

            <div>
              <Link to={`/category/${category_id}`} className="btn btn-primary">Back to Category</Link>
            </div>
        </div>
    );
};

export default SingleNews;
