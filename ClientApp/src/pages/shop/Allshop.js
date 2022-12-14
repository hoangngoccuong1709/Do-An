import "../../css/Body1.css";
import React, { Component } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTools, setError } from "../../action/plantTool";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { object } from "prop-types";
export class Body1 extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTools();
  }
  render() {
    // let data = Array.from(this.state.tree);
    const plantToolReducer = this.props.plantToolReducer;

    // if (treeReducer.length > 0) {
    return (
      <section className="body1 container">
        {Object.values(plantToolReducer).map((item) => {
          return (
            <Link
              item={item}
              key={item.idplantingtool}
              plantToolReducer={plantToolReducer}
              to={`${item.nametool}`}
            >
              <div key={item.idplantingtool} className="body1-item">
                <img className="img_item" src={item.imagetool} alt="img" />
                <h4 className="descrep">Tìm hiểu về :</h4>
                <h3 className="title">{item.nametool}</h3>;
              </div>
            </Link>
          );
        })}
      </section>
    );
    // }

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
    plantToolReducer: state.plantToolReducer.tool,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getTools: () => dispatch(getTools()),
    //  / AddCart: (item) => dispatch(AddCart(item)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Body1);
