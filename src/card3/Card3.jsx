import React from "react";
import "./style.scss";
import image__card from "../assets/image/person.png";
import { Card__3 } from "../statik";
import { FaStar } from "react-icons/fa";

const Card3 = () => {
  return (
    <section className="container">
      <div className="card3__wrapepr">
        {Card__3?.map((link, index) => (
          <div className="card" key={index}>
            <div className="card__image">
              <img src={image__card} alt={link.name} />
            </div>
            <div className="card__body">
              <h1>{link.name}</h1>
              <p>{link.description}</p>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          </div>
        ))}
      <div className="poinet">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span style={{background: "#3858D6"}}></span>
      </div>
      </div>
    </section>
  );
};

export default Card3;
