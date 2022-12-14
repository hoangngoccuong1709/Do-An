import React from "react";
import "../css/Listconten.css";
import { useState } from "react";
import { useEffect } from "react";
import { supabase } from "../client";
import Itemlistconten from "./Itemlistconten";
import { Link, useParams } from "react-router-dom";
import Searchitem from "./Searchitem";
import Hotsearch from "./Hotsearch";

export default function Header(Tree, props) {
  const trees = useSelector((state) => state.treeReducer.tree);
  return (
    <div className="container">
      <nav className="nav">
        <h3 className="conten-nav">Các chuyên mục</h3>
        <ul class="ul-nav">
          {/* <li><button onClick={()=>filterProduct(data)}>Cây cảnh</button></li>
            <li><button onClick={()=>filterProduct('Cây xoài')}>Cây văn phòng</button></li> */}
          <li>
            <button>Cây ăn quả</button>
          </li>
          <li>
            <button>Cây thuốc</button>
          </li>
          <li>
            <button>Cây làm gỗ</button>
          </li>
          <li>
            <button>Cây thiên nhiên</button>
          </li>
        </ul>
      </nav>
      {trees.map((item) => {
        return (
          <Link key={item.idtree}>
            <article className="conten-container">
              <img src={item.image} />
              <div className="conten-list">
                <p className="title-container">{item.nametree}</p>
                <div className="thongtin-list">
                  <div className="luotxem">
                    <i className="fa-solid fa-eye" />
                    <p className="conten-p">3000 Lượt xem</p>
                  </div>
                  <div className="nguoiviet">
                    <i className="fa-solid fa-award" />
                    <p className="conten-p">Alex-sindra</p>
                  </div>
                </div>
                <div className="thoigian">
                  <i className="fa-solid fa-clock" />
                  <p className="conten-p">Cập nhật 3 ngày trước</p>
                </div>
              </div>
            </article>
          </Link>
        );
        //<Itemlistconten key={item.Idintroduction} id={item.Idtree} item={item} Tree={Tree} />
      })}
    </div>
  );
}
