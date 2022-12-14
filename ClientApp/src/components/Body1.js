// import "../css/Body1.css";
// import React from "react";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getTrees, setError } from "../action/treeAction";
// import { connect } from "../lib/connect";
// import treeReducer from "../reducer/treeReducer";
// import { object } from "prop-types";
// function Body1(props) {
//   // this.props.getTrees();

//   // static getDerivedStateFromProps
//   //  const trees = useSelector((state) => state.treeReducer.tree);
//   const dispatch = useDispatch();
//   // const [token, setToken] = useState();
//   // useEffect(() => {
//   dispatch(getTrees());
//   // }, []);
//   // console.log(trees);
//   return (
//     <section className="body1 container">
//       {treeReducer.map((post) => {
//         return (
//           <a>
//             <div className="body1-item">
//               {/* <img className="img_item" src={post.image} alt="img" /> */}
//               <h4 className="descrep">Tìm hiểu về :</h4>
//               {/* <h3 className="title">{post.nametree}</h3>; */}
//             </div>
//           </a>
//         );
//       })}
//     </section>
//   );
// }
// const mapStateToProps = (state) => {
//   return {
//     // error: setError(state),
//     treeReducer: state.treeReducer,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     trees: () => dispatch(getTrees()),
//   };
// };

// export default connect(Body1, mapStateToProps, mapDispatchToProps);

import "../css/Body1.css";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrees, setError } from "../action/treeAction";
import { connect } from "react-redux";
import { Form, Link } from "react-router-dom";
// import { connect } from "../lib/connect";
// import treeReducer from "../reducer/treeReducer";
import { object } from "prop-types";
import treeReducer from "../reducer/treeReducer";
import { Input } from "antd";
import { data } from "@tensorflow/tfjs";
export class Body1 extends Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {
    query: "",
    data: [],
    filteredData: [],
  };
  handleInputChange = (event) => {
    const query = event.target.value;

    this.setState((prevState) => {
      const filteredData = prevState.data.filter((element) => {
        return element.nametree.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData,
      };
    });
  };

  getData = () => {
    fetch(`/api/tree`)
      .then((response) => response.json())
      .then((data) => {
        const { query } = this.state;
        const filteredData = data.filter((element) => {
          return element.name.toLowerCase().includes(query.toLowerCase());
        });

        this.setState({
          data,
          filteredData,
        });
      });
    console.log(data, "data");
  };

  componentDidMount() {
    this.props.getTrees();
  }

  // filterArray = () => {
  //   var searchString = this.state.query;
  //   var treeReducer = this.state.data;
  //   if (searchString.length > 0) {
  //     // console.log(responseData[i].name);
  //     treeReducer = treeReducer.filter((l) => {
  //       console.log(l.nametree.toLowerCase().match(searchString));
  //     });
  //   }
  // };
  render() {
    // let data = Array.from(this.state.tree);
    const treeReducer = this.props.treeReducer;

    // if (treeReducer.length > 0) {
    return (
      <div>
        <form>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </form>
        <div>
          {this.state.filteredData.map((i) => (
            <p>{i.name}</p>
          ))}
        </div>

        {/* <form>
          <input
            type="text"
            id="filter"
            placeholder="Search for..."
            ref={(input) => (this.search = input)}
            onChange={this.handleInputChange}
          />
        </form> */}
        <div>
          {/* <input
            placeholder="Enter Post Title"
            onChange={(event) => setQuery(event.target.value)}
          /> */}
        </div>
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

    return (
      <div className="row">
        <h2>Loading...!</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(treeReducer, "state");
  return {
    treeReducer: state.treeReducer.tree,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getTrees: () => dispatch(getTrees()),
    //  / AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Body1);
