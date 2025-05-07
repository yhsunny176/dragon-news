import React, { useState } from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { id, author, title, thumbnail_url, details, rating } = news;
    const { name, published_date, img } = author;
    const { number } = rating;

    const [expanded, setExpanded] = useState(false);

    const toggleReadMore = () => {
        setExpanded(!expanded);
    };

    const formattedDate = new Date(published_date).toLocaleDateString();
    return (
        <div className="border-1 border-gray-300">
            {/* Heading */}
            <div className="flex gap-5 items-center heading bg-light-gray py-3 px-2">
                <div className="w-10 h-10">
                    <img src={img} className="w-full h-full object-cover rounded-full" alt="" />
                </div>
                <div>
                    <h4 className="text-base text-blk-txt-primary font-bold">{name}</h4>
                    <p className=" text-sm text-blk-lt">{formattedDate}</p>
                </div>
            </div>

            {/* News Content */}
            <div className="py-5 px-8">
                <h1 className="text-lg text-blk-txt-primary font-bold">{title}</h1>

                <div className="w-full h-96">
                    <img
                        src={thumbnail_url}
                        className="w-full h-full object-cover mt-8 rounded-xl"
                        alt="news thumbnail"
                    />
                </div>

                <p
                    className={`text-blk-lt text-base font-normal mt-10 overflow-hidden ${
                        expanded ? "" : "line-clamp-4"
                    }`}>
                    {details}
                </p>
                <button
                    className="text-orange-400 hover:text-orange-600 button cursor-pointer"
                    onClick={toggleReadMore}>
                    {expanded ? "Show Less" : "Show More"}
                </button>
                <div className="flex justify-end py-4">
                    <Link to={`/news/${id}`} type="button" className="text-blue-400 py-2 px-3 rounded-md border-1 border-blue-200 hover:bg-blue-200 hover:text-blue-600 button cursor-pointer">
                        Read More
                    </Link>
                </div>

                <hr className="border-t border-gray-300 my-4" />

                <div>
                    <p>{number}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
