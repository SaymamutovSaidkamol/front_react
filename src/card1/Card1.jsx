import React from "react";
import "./style.scss";
import image__card from "../assets/image/apple-watch.png";
import { Card__1 } from "../statik";

const Card1 = () => {
  return (
    <section className="container">
      <div className="card1__wrapepr">
        {Card__1?.map((link, index) => (
          <div className="card" key={index}>
            <div className="card__image">
              <img src={image__card} alt={link.name} />
            </div>
            <div className="card__body">
              <h1>{link.name}</h1>
              <p>{link.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div class="title">
        <p class="firts">Find your favourite smart watch.</p>
        <p class="second">Our Latest Products</p>
      </div>
    </section>
  );
};

export default Card1;
