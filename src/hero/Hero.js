import React from "react";
import "./style.scss";
import heroImg from "../assets/image/hero.png";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__wrapper">
        <div className="hero__content">
          <h1>Discover Most Suitable Watches</h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <div class="hero__search">
            <FaSearch />
            <input type="text" placeholder="Find the best brands" />
            <button>Search</button>
          </div>
        </div>
        <div className="hero__image">
          <img src={heroImg} alt="hero__image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
