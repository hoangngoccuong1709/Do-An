import React from "react";
import "../css/Viewport.css";
// import Itemlistconten from './Itemlistconten';
// import Listnav from "./List-nav.js";
import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Hotsearch from "./Hotsearch";
import { Link } from "react-router-dom";
function Viewpost(item) {
  const treeReducer = item.treeReducer;
  console.log("tree", treeReducer);
  const dispatch = useDispatch();
  console.log("dd", item);
  const { idpost } = useParams();
  console.log("tb: ", idpost);
  const { Idtree } = useParams();
  console.log("ta: ", Idtree);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch(`/api/post/info?idpost=${idpost}`, requestOptions)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log("error", error));
  }
  // return data.map((item, index) => {
  //   return (
  // <div key={index} className="container">
  //   {/* <Listnav /> */}
  //   <nav className="nav">
  //     <ul>
  //       <h3 className="conten-nav">Các chuyên mục</h3>
  //       <li>
  //         <button>Cây cảnh</button>
  //       </li>
  //       <li>
  //         <button>Cây văn phòng</button>
  //       </li>
  //       <li>
  //         <button>Cây ăn quả</button>
  //       </li>
  //       <li>
  //         <button>Cây thuốc</button>
  //       </li>
  //       <li>
  //         <button>Cây làm gỗ</button>
  //       </li>
  //       <li>
  //         <button>Cây thiên nhiên</button>
  //       </li>
  //     </ul>
  //   </nav>

  /* <Itemcontenbody  /> */
  return data.map((item, index) => {
    return (
      <div className="div">
        <article className="article">
          <h3>{item.nameconten}</h3>
          <p className="tacgia">{item.author}</p>
          <p className="conten">Tham khảo</p>
          <p className="title">{item.describe}</p>
        </article>

        <section className="w3l-teams-15">
          <div className="team-single-main ">
            <div className="container-post">
              <div className=" grid grid-column-2 row">
                <div className="column">
                  <h3 className="team-head ">{item.nameconten}</h3>
                  <p className="para  text ">{item.describe}</p>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.htmlContent,
                    }}
                  />
                  {/* <a href="about.html" className="action-button btn mt-4">
                    Read more
                  </a> */}
                </div>
                <div
                  style={{ textAlign: "center" }}
                  className="column"
                  data-selector="header11"
                >
                  <img
                    src={item.imageconten}
                    alt=""
                    className="img-responsive"
                  />
                  {/* <img
                    style={{ marginTop: 50 }}
                    src={item.imageconten}
                    alt=""
                    className="img-responsive"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        <h2 className="title-post"> Các bài viết liên quan</h2>
        <section className="body1 container">
          {Object.values(treeReducer).map((item) => {
            return (
              <Link item={item} key={item.idtree} to={`${item.idtree}`}>
                <div key={item.idtree} className="body1-item">
                  <img className="img_item" src={item.image} alt="img" />
                  <h4 className="descrep">Tìm hiểu về :</h4>
                  <h3 className="title">{item.nametree}</h3>;
                </div>
              </Link>
            );
          })}
        </section>
      </div>
    );
  });
}
const mapStateToProps = (state) => {
  return {
    treeReducer: state.treeReducer.tree,
  };
};
export default connect(mapStateToProps)(Viewpost);
