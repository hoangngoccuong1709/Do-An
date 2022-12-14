import { Button, Input } from "antd";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../css/Header.css";
export default function Header(props) {
  // const {} =useParams();
  function handlesearchitem(newfilter) {
    console.log("new:", newfilter);
  }
  const filterProduct = (data) => {
    const updateLisst = data.filter((x) => x.Nametree === handlesearchitem);
  };

  return (
    <header id="header" className="container user_flex">
      <div className="user_flex header__left">
        <div className="logo">
          <h3 className="logo-text">
            <a href="/">
              <span>wiki</span>Trees
            </a>
          </h3>
        </div>
        <form action="#" className="user_flex form-search">
          <input
            type="text"
            placeholder="Tìm kiếm bất cứ loài cây nào"
            className="input-search"
            enterButton
          />
          <Button className="btn btn-search">
            <i className="fa-solid fa-magnifying-glass" />
          </Button>
        </form>
      </div>
      <div className="menu-right">
        <Link to={"/nhandien"}>
          <i className="fas fa-seedling"></i>
        </Link>
        <Link to={"/signin"}>
          <i className="fa-solid fa-user" />
        </Link>
        {/* <a>
          <i className="fa-solid fa-user" />
        </a> */}
        <Link to={"/giohang"}>
          <i className="fa-solid fa-cart-shopping" />
        </Link>
        <Link to={"/shop"}>
          <i className="fa-solid fa-shop"></i>
          {/* <i className="fa-solid fa-message" /> */}
        </Link>
      </div>
    </header>
  );
}
