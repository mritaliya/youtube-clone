import React, { useEffect, useState } from "react";
import Suggetion from "./suggetion";
const Suggestvideo = ({ related }) => {
  const [suggest, setSuggest] = useState([]);
  const { snippet } = related;
  const CategoryId = snippet.categoryId;

  useEffect(() => {
    let URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&videoCategoryId=${CategoryId}&key=AIzaSyB_0mMTPCH1eDAYLy_W8uPLCBUIkjFIRUo`;

    fetch(URL)
      .then((res) => res.json())
      .then((data) => setSuggest(data.items));
  }, []);
  return (
    <>
      <div className="mt-1  w-full   md:h-38 lg:h-32  space-x-1 ">
        {suggest.map((items,idx) => {
          return <Suggetion items={items} key={idx}/>;
        })}
      </div>
    </>
  );
};

export default Suggestvideo;
