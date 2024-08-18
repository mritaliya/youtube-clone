import React from "react";
import moment from "moment";
import { time_converter } from "../utils/converter";


const Time = ({ time }) => {
  // console.log(time);

  // const videoTime=moment()?.startOf("day")?.seconds(time)?.format("H:mm:SS")
  return (
    <div>
      <span className="absolute bottom-2 right-2 bg-black text-white px-2 py-1 text-xs rounded-md">
        {time_converter(time)}
      </span>
    </div>
  );
};

export default Time;
