import React from "react";
import "../css/Itemlistconten.css";
import { Link } from "react-router-dom";
export default function Itemlisttree(item) {
  console.log(item, "itme");
  return (
    //  <Link key={item.numbers} to={`${item.Idintroduction}`} >
    <article key={item.Idtree} className="conten-container-2">
      <img src />
      <div className="conten-list">
        <p className="title-container-2"></p>
        <div className="thongtin-list">
          <div className="luotxem">
            <i className="fa-solid fa-eye" />
            <p className="conten-p"> lượt xem</p>
          </div>
          <div className="nguoiviet">
            <i className="fa-solid fa-award" />
            <p className="conten-p">{item.author}</p>
          </div>
        </div>
        <div className="thoigian">
          <i className="fa-solid fa-clock" />
          <p className="conten-p">{item.writingdate}</p>
        </div>
      </div>
    </article>
    //  </Link>
  );
}
