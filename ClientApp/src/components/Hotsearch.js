import "../css/Hotsearch.css";
import React, { Component } from "react";
import { connect } from "react-redux";
// import connect from "../lib/connect";
// import Button from '../component/ComponentsBtn'
// import { useState,useEffect } from "react";
// import { useParams } from 'react-router-dom';
function Hotsearch(props) {
  const treeReducer = props.treeReducer;
  return (
    <section className="container user-grid">
      <div className="hotsearch body1">
        {Object.values(treeReducer).map((post) => {
          return (
            <div className="body1-item">
              <img className="img_item" src={post.image} alt="hello" />
              <h4 className="descrep">Tìm hiểu về :</h4>
              <h3 className="title"> {post.nametree}</h3>
            </div>
          );
        })}
      </div>
      <nav className="nav" style={{ paddingLeft: 20 }}>
        <h3 className="conten-nav">Các chuyên mục</h3>
        <ul className="ul-nav">
          <li>
            <button>Cây cảnh</button>
          </li>
          <li>
            <button>Cây văn phòng</button>
          </li>
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
    </section>
  );
}
const mapStateToProps = (state) => {
  return {
    treeReducer: state.treeReducer.tree,
  };
};
export default connect(mapStateToProps)(Hotsearch);
