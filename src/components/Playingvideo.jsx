import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Videodesc from "./Videodesc";
import Suggestvideo from "./suggestvideo";

const Playingvideo = () => {
  const [video, setVideo] = useState([]);
  const [relatedvideo, setRelatedvideo] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    let URl = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyB_0mMTPCH1eDAYLy_W8uPLCBUIkjFIRUo`;
    fetch(URl)
      .then((res) => res.json())
      .then((data) => setVideo(data.items));
  }, []);

  return (
    <div className="mt-16 flex flex-col h-full md:flex-row md:space-x-3 justify-between  mb-2 ">
      <div className="h-full md:h-[105vh] lg:h-full  w-full md:w-[60%] lg:w-[68%] mt-2">
        <div className="h-full w-full   ">
          <iframe
            className="w-full h-[300px] lg:h-[510px] px-2 rounded-2xl "
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          {video.map((videodetail, idx) => {
            return <Videodesc key={idx} Videodesc={videodetail} />;
          })}
        </div>
      </div>
      <div className="w-full md:h-[105vh] md:w-[40%] lg:w-[30%] overflow-y-scroll">
        {video.map((videodetail, idx) => {
          return <Suggestvideo key={idx} related={videodetail} />;
        })}
      </div>
    </div>
  );
};

export default Playingvideo;
