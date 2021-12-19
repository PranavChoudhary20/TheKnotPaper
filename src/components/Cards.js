import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import image from "../utils/images/pranav.JPG";
import image2 from "../utils/images/pranav2.JPG";
import image3 from "../utils/images/pranav3.jpg";
import image4 from "../utils/images/pranav4.JPG";
function Cards() {
  return (
    <div className="cards">
      <h1>Check out!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={image}
              text="Explore more and more"
              label="Photo"
              path="/idc"
            />
            <CardItem
              src={image2}
              text="Explore more and more"
              label="Photo"
              path="/idc"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={image3}
              text="Explore more and more"
              label="Photo"
              path="/idc"
            />
            <CardItem
              src={image4}
              text="Explore more and more"
              label="Photo"
              path="/idc"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
