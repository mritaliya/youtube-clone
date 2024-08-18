import React from "react";
import { value_converter } from "../utils/converter";
import { Link } from "react-router-dom";
import moment from "moment";
const Suggetion = ({ items }) => {
  const { snippet, statistics, contentDetails, id } = items;

  return (
    <Link to={`/video/${items.id}`}>
      <div className="w-full h-[20] md:h-full flex  ">
        <div className="w-[85%] md:w-[45%] h-28 lg:w-[60%] lg:h-[full]">
          <img
            className="h-full w-full rounded-xl "
            src={snippet.thumbnails.high.url}
          />
        </div>
        <div className="items-center justify-between w-[60%] h-[full] px-2">
          <h6 className="text-xs font-semibold lg:my-2">
            {snippet.title.slice(0, 50)}
          </h6>
          <h6 className="text-sm font-semibold">{snippet.channelTitle}</h6>
          <p className="text-xs font-semibold">
            {value_converter(statistics.viewCount)} Views
          </p>
          <span className="text-xs">
            {moment(snippet.publishedAt).fromNow()}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default Suggetion;
