import { Popover } from "antd";
import "../cart/cart.css";
import React, { Component } from "react";
import { Button } from "antd";
import { useParams } from "react-router";
import { connect } from "../../lib/connect";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//import { connect, useSelector } from "react-redux";
import {
  deleteProduct,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
} from "../../reducer/actionCart";
import { useState, useRef } from "react";
import { Modal } from "react-bootstrap";
import Item from "antd/lib/list/Item";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import { createOrder, clearOrder } from "../../actions/orderActions";
function Cart(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // class Cart extends Component {
  //     constructor(props) {
  //       super(props);
  //       this.state = {
  //         name: "",
  //         email: "",
  //         address: "",
  //         showCheckout: false,
  //       };
  //     }
  // const user = useSelector(state => state.user);
  // if (user.account) {
  //   navigate('thongtinnguoidung');
  // }
  //let cart = [];
  const user = useSelector((state) => state.user);
  useEffect(() => {
    console.log("account", user.account);
    if (user.tokenChecked == true) {
      navigate("/giohang");
    } else {
      alert("Đề nghị quý khách hàng đăng nhập để được mua hàng ");
      navigate("/signin");
    }
  }, [user]);

  const cart = useSelector((state) => state.cartReducer.cart);
  console.log(`abc`, cart);
  // const post_name = useRef(null);
  // const post_sodienthoai = useRef(null);
  // const post_email = useRef(null);
  // const post_diachi = useRef(null);
  // const post_anh = useRef(null);
  // const post_mota = useRef(null);

  const [post, setPost] = useState({
    idorder: "",
    Idproduct: "",
    UserId: "",
    Quantity: "",
    Total: "",
  });
  const [open, setOpen] = useState(false);
  //const [customer, setcustomer] = useState({ Id: "", NameUser: "", Phone: "" })
  function handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //const { cart } = useSelector((state) => state);
  //  console.log('cart',this.props.cart)
  //let Name = props.cart.Name
  function TotalPrice(price, tonggia) {
    return Number(price * tonggia).toLocaleString("en-US");
  }
  let TotalCart = 0;
  Object.keys(cart).forEach(function (item) {
    //return Number(price * tonggia).toLocaleString('en-US');
    TotalCart += cart[item].price * cart[item].quantity;
    //TotalCart+=TotalPrice;

    // cart.push(cart[item]);
  });

  async function createPost() {
    try {
      const res = await fetch(`/user`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(),
      });
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }
      const data = await res.json();
      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };
      alert("Thêm thành công !");
      console.log(`carrtttt`, props.name);
      //setPostResult(fortmatResponse(result));
      // publish()
    } catch (err) {
      // setPostResult(err.message);
      alert("Thêm  ko thành công !");
    }
  }
  return (
    <div className="row">
      <div className="col-md-12">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <i
                      className="badge badge-danger"
                      onClick={() => dispatch(deleteProduct(key))}
                    >
                      X
                    </i>
                  </td>
                  <td>{item.nametool}</td>
                  <td>
                    <img
                      src={item.imagetool}
                      style={{ width: "100px", height: "80px" }}
                    />
                  </td>
                  <td>{item.price} $</td>
                  <td>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(DECREASE_QUANTITY(key))}
                    >
                      -
                    </span>
                    <span className="btn btn-info">{item.quantity}</span>
                    <span
                      className="btn btn-primary"
                      style={{ margin: "2px" }}
                      onClick={() => dispatch(INCREASE_QUANTITY(key))}
                    >
                      +
                    </span>
                  </td>
                  <td>{TotalPrice(item.price, item.quantity)} $</td>
                </tr>
              );
            })}
            <tr>
              <td colSpan="5">Total Carts</td>
              <td>{Number(TotalCart).toLocaleString("en-US")} $</td>
            </tr>
          </tbody>
          <td>
            <Link
              to={"/checkout"}
              TotalPrice={TotalPrice}
              TotalCart={TotalCart}
              item={props}
              // onPress={() => this.props.navigation.navigate("Home")}
            >
              Order
            </Link>
          </td>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};
export default connect(Cart, mapStateToProps, mapDispatchToProps);
