import React, { useState } from "react";
import "./gallery.css";
import CancelIcon from "@material-ui/icons/Cancel";
import Video from "../utils/videos/pranav.mp4";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: "imagesnew/img-1.jpg",
      //  videoSrc={Video},
    },
    {
      id: 2,
      imgSrc: "imagesnew/img-2.jpg",
    },
    {
      id: 3,
      imgSrc: "imagesnew/img-3.jpg",
    },
    {
      id: 4,
      imgSrc: "imagesnew/img-4.jpg",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgsrc] = useState(false);
  const getImg = (imgSrc) => {
    setTempimgsrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <img src={Image} style={{ backgroundSize: "cover" }} />
      <h1 style={{ textAlign: "center", marginTop: "75px", color: "white" }}>
        Images Gallery
      </h1>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt="hunter" />
        <CancelIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} alt="hunter" style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
