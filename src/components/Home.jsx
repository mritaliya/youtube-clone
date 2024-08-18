import React, { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Video from "./Video";
import ListIteam from "./ListIteam";
import youtubecontex from "../contex/youtubecontex";

const Home = ({ toggle }) => {
  const [data, setData] = useState([]);
  const { click } = useContext(youtubecontex);

  useEffect(() => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=50&q=${click}&key=AIzaSyAVgNx6_bDFiLUxEYWsi70IUlJmRPdHR9E`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.items);
      });
  }, [click]);

  return (
    <div className="flex  mt-20 sm:mt-16 relative ">
      {toggle.togSidebar && <Sidebar />}
      <div className=" flex-wrap h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden  ">
        <ListIteam />
        <div className="p-2 gap-2  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {data.map((item, idx) => {
            return <Video key={idx} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
