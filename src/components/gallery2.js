import React, { useState } from "react";
import "./gallery.css";
import CancelIcon from "@material-ui/icons/Cancel";
const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: "imagesnew/YSH06625.JPG",
    },
    {
      id: 2,
      imgSrc: "imagesnew/YSH06717.JPG",
    },
    {
      id: 3,
      imgSrc: "imagesnew/YSH06771.JPG",
    },
    {
      id: 4,
      imgSrc: "imagesnew/YSH06778.JPG",
    },
    {
      id: 5,
      imgSrc: "imagesnew/YSH06788.JPG",
    },
    {
      id: 6,
      imgSrc: "imagesnew/YSH06791.JPG",
    },
    {
      id: 7,
      imgSrc: "imagesnew/YSH06793.JPG",
    },
    {
      id: 8,
      imgSrc: "imagesnew/img-8.jpg",
    },
    {
      id: 9,
      imgSrc: "imagesnew/img-9.jpg",
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
