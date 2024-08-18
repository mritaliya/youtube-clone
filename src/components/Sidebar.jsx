import React, { useContext, useState, useSyncExternalStore } from "react";
import {
  sidebar1,
  sidebar3,
  Sidebar2,
  sidebar4,
} from "../utils/Sidebarcontent";
import { FaChevronRight } from "react-icons/fa";
import youtubecontex from "../contex/youtubecontex";

const Sidebar = () => {
  const [Active, setActive] = useState("Home");
  const { click, setclick } = useContext(youtubecontex);
  const changevalue = (e) => {
    setActive(e.target.value);
    setclick(e.target.value);
  };

  return (
    <div className="w-full md:w-[30%] lg:w-[22%] xl:w-[19%] flex  px-2   h-full overflow-y-scroll overflow-x-hidden absolute top-0 left-0 z-10 bg-slate-100">
      <div className="space-y-1 items-center">
        {sidebar1.map((item) => {
          return (
            <button
              value={item.name}
              key={item.id}
              onClick={changevalue}
              className="flex items-center px-3 py-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer w-[60%] lg:w-[80%]"
              style={{
                background: item.name === Active && "rgb(209 213 219)",
              }}
            >
              <item.icon onClick={changevalue} className="px-2 text-4xl" />
              {item.name}
            </button>
          );
        })}
        <hr />
        <div className="flex items-center space-x-3  py-2 w-[60%] ">
          <span className="font-medium">You</span>
          <span>
            <FaChevronRight />
          </span>
        </div>
        {Sidebar2.map((item) => {
          return (
            <button
              value={item.name}
              key={item.id}
              onClick={changevalue}
              className="flex items-center px-3 py-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer w-[80%]"
              style={{
                background: item.name === Active && "rgb(209 213 219)",
              }}
            >
              <item.icon className="px-2 text-4xl" />
              {item.name}
            </button>
          );
        })}
        <hr />
        <div className="font-medium">Explore</div>
        {sidebar3.map((item) => {
          return (
            <button
              value={item.name}
              key={item.id}
              onClick={changevalue}
              className="flex items-center px-3 py-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer w-full lg:w-[80%]"
              style={{
                background: item.name === Active && "rgb(209 213 219)",
              }}
            >
              <item.icon className="px-2 text-4xl" />
              {item.name}
            </button>
          );
        })}
        <hr />
        <div className="font-medium">More From Youtube</div>
        {sidebar4.map((item) => {
          return (
            <button
              key={item.id}
              className="flex items-center px-3 py-1 hover:bg-gray-300 duration-300 rounded-xl cursor-pointer w-[80%]"
            >
              <item.icon className="px-2 text-4xl text-red-600" />
              {item.name}
            </button>
          );
        })}
        <hr />
        <div>
          <div className=" font-semibold text-gray-500 ">
            About Press Copyright Contact us Creator Advertise Developers
          </div>
          <br />
          <div className=" font-semibold text-gray-500">
            Terms Privacy Policy & Safety How YouTube works Test new features{" "}
            <br />
            <br />
          </div>
          <div className="font-bold">© 2024 Google LLC</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
