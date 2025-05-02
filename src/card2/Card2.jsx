import React from "react";
import "./style.scss";
import image__card from "../assets/image/watch.png";
import { Card__2 } from "../statik";
import { FaStar } from "react-icons/fa";

const Card2 = () => {
  return (
    <section className="container">
      <div className="card2__wrapepr">
        {Card__2?.map((link, index) => (
          <div className="card" key={index}>
            <div className="card__image">
              <img src={image__card} alt={link.name} />
            </div>
            <div className="card__body">
              <h3>{link.name}</h3>
              <div class="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className="card__price">
                <div class="card__price_one">${link.action}</div>
                <div class="card__price_two">${link.price}</div>
              </div>
            </div>
          </div>
        ))}
        <div class="btn">
          <button>View More</button>
        </div>
      </div>

      <div class="title">
        <p class="firts">Here are our some of the best clients.</p>
        <p class="second">What People Say About Us</p>
      </div>
    </section>
  );
};

export default Card2;
