import React from "react";
import "./style.scss";
import logo from "../assets/logo/Logo.svg";
import { colaction } from "../statik";
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { SlBasket } from "react-icons/sl";

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__navbar">
          <div className="logo__navbar">
                <img src={logo} alt="" />
          </div>
          <div className="header__collection">
                {colaction?.map((link, index) => {
                  return (
                    <li key={index} className="header__item">
                      <a href={link.path}>{link.title}</a>
                    </li>
                  );
                })}
          </div>
          <div className="header__options">
                <FaSearch />
                <IoPersonSharp />
                <SlBasket />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
