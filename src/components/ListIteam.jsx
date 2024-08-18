import React, { useContext, useEffect } from "react";
import { Sidebar5 } from "../utils/Sidebarcontent";
import "./scroll.css";
import youtubecontex from "../contex/youtubecontex";
const ListIteam = () => {

const{click,setclick}=useContext(youtubecontex)


  return (
    <div className="flex overflow-x-scroll no-scrollbar">
      <div className="flex px-2 space-x-4 h-8 my-2">
        {Sidebar5.map((iteam, idx) => {
          return (
            <button
            onClick={(e)=>setclick(e.target.value)}
            value={iteam.name}
              className="px-3 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 duration-300 cursor-pointer"
              key={idx}
            >
              
              {iteam.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default ListIteam;
