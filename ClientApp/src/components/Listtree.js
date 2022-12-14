import React from "react";
import "../css/Listconten.css";
import Itemlisttree from "./Itemlisttree";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getTrees } from "../action/treeAction";
import { List } from "antd";
import { Link } from "react-router-dom";
export default function Listtree(props) {
  const [tree, setTree] = useState([]);
  // const trees = useSelector((state) => state.treeReducer);
  const dispatch = useDispatch();
  const { idtree } = useParams();
  const id = parseInt(idtree);
  console.log(id, "treesss");
  // const [token, setToken] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`/api/post/idtree?treeidtree=${idtree}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setTree(data))
      .catch((error) => console.log("error", error));
  }
  return (
    <div className="container">
      <nav className="nav">
        <h3 className="conten-nav">Các chuyên mục</h3>
        <ul>
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
      {tree.map((item) => {
        return (
          <Link
            item={item}
            key={item.idpost}
            setTree={setTree}
            to={`${item.idpost}`}
          >
            <article key={item.idpost} className="conten-container-2">
              <img src={item.imageconten} />
              <div className="conten-list">
                <p className="title-container-2">{item.nameconten}</p>
                <div className="thongtin-list">
                  <div className="luotxem">
                    <i className="fa-solid fa-eye" />
                    <p className="conten-p"> {item.nameconten}</p>
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
          </Link>
          // <Itemlisttree key={item.Idtree} id={item.Idtree} item={item} />
        );
      })}
    </div>
  );
}
