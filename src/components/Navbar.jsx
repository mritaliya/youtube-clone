import React, { useState } from "react";
import Avatar from "react-avatar";
import logo from "../images/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { RiNotification2Line } from "react-icons/ri";
import avatar from "../images/krishn.jpg";
import { useNavigate } from "react-router-dom";
import { IoArrowBackSharp } from "react-icons/io5";

const Navbar = ({ toggle }) => {
  const toggleSidebar = () => {
    toggle.settogSidebar(!toggle.togSidebar);
  };

  const [searchquery, setsearchquery] = useState("");
  const [searchbar, setSearchbar] = useState(false);

  const navigate = useNavigate();
  const searchueryHandler = (Event) => {
    if (
      (Event.key === "Enter" || Event === "searchButton") &&
      searchquery.length > 0
    ) {
      navigate(`/search/${searchquery}`);
      setsearchquery("");
    }
  };

  // navbar in md decive responsive

  if (searchbar) {
    return (
      <div className="z-50 flex fixed top-0 bg-white justify-between px-6 py-2 w-full border ">
        <IoArrowBackSharp
          className=" ml-4 border p-2 border-gray-600 cursor-pointer text-4xl hover:bg-slate-200 duration-200 rounded-full "
          onClick={() => setSearchbar(!searchbar)}
        />
        <div className="  flex items-center flex-grow mx-4 ">
          <div className="w-[80%] md:w-[100%] px-3 py-2 border rounded-l-full">
            <input
              type="text"
              placeholder="search.."
              className="outline-none w-full "
              onChange={(e) => setsearchquery(e.target.value)}
              onKeyUp={searchueryHandler}
              value={searchquery}
            />
          </div>
          <button
            className=" px-4 py-2 border bg-gray-100 rounded-r-full "
            onClick={() => searchueryHandler("searchButton")}
          >
            <CiSearch className="text-2xl" />
          </button>
        </div>
        <IoMdMic className=" ml-4 border p-2 border-gray-600 cursor-pointer text-4xl hover:bg-slate-200 duration-200 rounded-full " />
      </div>
    );
  }

  return (
    <div className="z-50 flex fixed top-0 bg-white justify-between px-6 py-2 w-full  ">
      <div className="flex items-center space-x-4 cursor-pointer ">
        <AiOutlineMenu
          className="text-4xl  hover:bg-slate-200 rounded-full p-2"
          onClick={toggleSidebar}
        />
        <img src={logo} alt="" className="w-16" />
      </div>
      <div className=" hidden   lg:flex items-center w-[35%] ">
        <div className="w-[80%] md:w-[100%] px-3 py-2 border rounded-l-full">
          <input
            type="text"
            placeholder="search.."
            className="outline-none w-full"
            onChange={(e) => setsearchquery(e.target.value)}
            onKeyUp={searchueryHandler}
            value={searchquery}
          />
        </div>
        <button
          className=" px-4 py-2 border bg-gray-100 rounded-r-full "
          onClick={() => searchueryHandler("searchButton")}
        >
          <CiSearch className="text-2xl" />
        </button>
        <IoMdMic className=" ml-4 border p-2 border-gray-600 cursor-pointer text-4xl hover:bg-slate-200 duration-200 lg:rounded-full " />
      </div>
      <div className="flex items-center space-x-4">
        <CiSearch
          className="lg:hidden md:block text-4xl  hover:bg-slate-200 duration-200 rounded-full p-2"
          onClick={() => setSearchbar(!searchbar)}
        />
        <RiVideoAddLine className=" text-4xl  hover:bg-slate-200 duration-200 rounded-full p-2" />
        <RiNotification2Line className="text-4xl  hover:bg-slate-200 duration-200 rounded-full p-2" />
        <Avatar src={avatar} size="35" round={true} />
      </div>
    </div>
  );
};

export default Navbar;
