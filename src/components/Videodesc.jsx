import React, { useState, useEffect } from "react";
import { IoIosShareAlt } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { value_converter } from "../utils/converter";
import "./scroll.css";
import ChannelLogo from "./ChannelLogo";
const Videodesc = ({ Videodesc }) => {
  const { contentDetails, id, snippet, statistics } = Videodesc;
  const [channeldetail, setchanneldetail] = useState([]);

  useEffect(() => {
    let URL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${snippet.channelId}&key=AIzaSyB_0mMTPCH1eDAYLy_W8uPLCBUIkjFIRUo`;
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setchanneldetail(data.items);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="w-[90%] mx-3 py-1 font-semibold">{snippet.title}</div>
      <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full">
        <div className="flex w-full   space-x-2 my-1 px-3 py-2 items-center ">
          {channeldetail.map((channellist, idx) => {
            return <ChannelLogo channellist={channellist} key={idx} />;
          })}
          <button className="bg-black cursor-pointer rounded-full mx-3 py-1  px-3 text-white">
            subscribe
          </button>
        </div>
        <div className="flex    lg:w-[50%] items-center space-x-3  w-full mx-3 py-2">
          <div className="flex ">
            <div className="bg-slate-200 px-3 py-1 space-x-3 rounded-l-full text-xl">
              <button>
                <AiOutlineLike />
              </button>
              <span className="text-base">
                {value_converter(statistics.likeCount)}
              </span>
            </div>
            <button className="bg-slate-200 border-l border-l-gray-300 px-3 py-1 space-x-3 rounded-r-full text-xl ">
              <AiOutlineDislike />
            </button>
          </div>
          <button className="flex h-8 items-center hover:bg-slate-300 bg-slate-200 text-xl rounded-3xl px-3 py-2 space-x-2">
            <IoIosShareAlt />
            <span>Share</span>
          </button>
          <button className="h-8 w-8  rounded-full hover:bg-slate-300 bg-slate-200 px-1 text-2xl">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div className="px-3  rounded-2xl h-[200px] bg-slate-200 mb-3 mt-1 w-full overflow-y-scroll no-scrollbar">
        {snippet.description}
      </div>
    </div>
  );
};

export default Videodesc;
