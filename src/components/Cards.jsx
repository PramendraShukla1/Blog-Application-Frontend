import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const Cards = ({_id, title, summary, cover, content, createdAt,author }) => {
  const currentDate = new Date(createdAt);
  const formattedTime12hr = format(currentDate, "MMM d yyyy h:mm a");
  return (
    <>

      <div className="max-w-lg mx-auto">
        <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
          <Link to={`/post/${_id}`}>
            <img
              className="rounded-t-lg"
              src={'http://localhost:4000/'+cover}
              alt=""
            />
          </Link>
          <div className="p-5">
            <span>
              <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                {title}
              </h5>
            </span>
            <p className=" text-gray-600 font-bold text-md">{author.username}</p>
            <p className=" text-gray-700 mb-3 text-sm">{formattedTime12hr}</p>
            <p className="font-normal text-gray-700 mb-3">{summary}</p>
            <Link to={`/post/${_id}`}>
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
              href="#"
            >
              Read more
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
