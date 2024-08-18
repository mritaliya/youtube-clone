import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import youtubecontex from "../contex/youtubecontex";
import Video from "./Video";
import "./scroll.css";

const Search = () => {
  const [result, setResult] = useState([]);
  const { searchQuery } = useParams();
  const { togSidebar } = useContext(youtubecontex);

  useEffect(() => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelType=any&maxResults=60&q=${searchQuery}&key=AIzaSyAVgNx6_bDFiLUxEYWsi70IUlJmRPdHR9E`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.items);
      });
  }, [searchQuery]);

  console.log(searchQuery);

  return (
    <div className="mt-16 relative h-[100vh]   ">
      {togSidebar && <Sidebar />}
      <div className="p-2 gap-2 h-[100vh]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-y-scroll no-scrollbar  ">
        {result.map((item, idx) => {
          return <Video key={idx} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Search;
