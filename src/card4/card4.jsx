import React from "react";
import "./style.scss";
import image__card from "../assets/image/watch.png";
import { Card__4 } from "../statik";

const Card4 = () => {
  return (
    <section className="container">
      <div className="card4__wrapepr">
        {Card__4?.map((link, index) => (
          <div className="card" key={index}>
            <div className="card__body">
              <h3>{link.name}</h3>
              <p>{link.description}</p>
              <div class="hero__search">
                <input type="text" placeholder="Enter Email Address" />
                <button>Subscribe</button>
              </div>
            </div>
            <div className="card__image">
              <img src={image__card} alt={link.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card4;
