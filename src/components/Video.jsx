import React from "react";
import { Link } from "react-router-dom";
import Time from "./Time";
import moment from "moment";
const Video = ({ data }) => {
  const { snippet, contentDetails, id } = data;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <div className="flex flex-col m-2 justify-between border px-2 py-1 rounded-xl  md:border-red-600 md:hover:rounded-none duration-200  w-full md:h-[250px]  lg:w-[320px] xl:w-[310px] lg:h-[270px]">
      <Link to={`/video/${id.videoId}`}>
        <div className="relative w-full">
          <img className="h-44 w-full rounded-xl" src={thumbnails.medium.url} />
        </div>
        <h6 className="text-xs my-2">{title.slice(0, 80)}</h6>
        <div className="flex items-center justify-between px-2">
          <h6 className="text-sm font-semibold">
            {snippet.channelTitle.slice(0, 25)}
          </h6>
          <p className="text-xs">{moment(snippet.publishedAt).fromNow()}</p>
        </div>
      </Link>
    </div>
  );
};

export default Video;
