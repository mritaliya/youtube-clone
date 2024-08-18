import React from "react";
import { value_converter } from "../utils/converter";

function ChannelLogo({ channellist }) {
  const { snippet, statistics } = channellist;

  return (
    <div className="flex items-center space-x-2">
      <div>
        <img
          className="h-10 w-15 rounded-full"
          src={snippet.thumbnails.default.url}
          alt=""
        />
      </div>
      <div className="px-3 py-2">
        <h3 className="font-medium ">{snippet.title}</h3>
        <span>{value_converter(statistics.subscriberCount)} subscribers</span>
      </div>
    </div>
  );
}

export default ChannelLogo;
