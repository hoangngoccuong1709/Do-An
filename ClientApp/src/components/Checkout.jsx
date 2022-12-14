import { array } from "prop-types";
import React from "react";
import { useSelector } from "react-redux";
import connect from "../lib/connect";
import "../css/Checkout.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Checkout(props) {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cartReducer.cart);
  const user = useSelector((state) => state.user.account);
  let TotalCart = 0;
  Object.keys(cart).forEach(function (item) {
    //return Number(price * tonggia).toLocaleString('en-US');
    TotalCart += cart[item].price * cart[item].quantity;
  });

  // const quantity = useSelector((state) => state.cartReducer.cart.quantity);
  async function createPost() {
    // const userId = () => {
    //   user.map((item) => {
    //     return item.id;
    //   });
    // };
    let TotalCart = 0;
    Object.keys(cart).forEach(function (item) {
      //return Number(price * tonggia).toLocaleString('en-US');
      TotalCart += cart[item].price * cart[item].quantity;
    });

    // let TotalCart = 0;
    // TotalCart += parseInt(price) * parseInt(quantity);
    var quantity = cart.map((item) => item.quantity);
    console.log("quan", TotalCart);
    // var quantity = cart.quantity;
    var userId = user.id;
    // var userId = user.map((item) => {
    //   return item.id;
    // });
    //  var price = cart.map((item) => item.price);

    const postData = {
      // total: TotalCart,
      // quantity: quantity,
      //userId: userId,
      orderDetails: cart.map((item) => ({
        idplantingtool: item.id,
        quantity: item.quantity,
        price: item.price,
        userId,
      })),

      TotalMoney: TotalCart,
      userId,
      // idproduct,
      // price,

      // price: price,
    };

    try {
      const res = await fetch(`/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
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
      alert("Th??m th??nh c??ng !");
      // window.location.reload(navigate("/"));

      //setPostResult(fortmatResponse(result));
      // publish()
    } catch (err) {
      // setPostResult(err.message);
      alert("Th??m  ko th??nh c??ng !");
    }
  }
  return (
    <div className="container mt-4">
      <form
        className="needs-validation"
        name="frmthanhtoan"
        method="post"
        action="#"
      >
        <input type="hidden" name="kh_tendangnhap" defaultValue="dnpcuong" />
        <div className="py-5 text-center">
          <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
          <h2>Thanh to??n</h2>
          <p className="lead">
            Vui l??ng ki???m tra th??ng tin Kh??ch h??ng, th??ng tin Gi??? h??ng tr?????c khi
            ?????t h??ng.
          </p>
        </div>
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <h4 className="d-flex justify-content-between align-items-center mb-3">
              <span className="text-muted">Gi??? h??ng</span>
              <span className="badge badge-secondary badge-pill">
                {/* {item.quantity} */}
              </span>
            </h4>
            <ul className="list-group mb-3">
              {/* <input
                type="hidden"
                name="sanphamgiohang[1][sp_ma]"
                defaultValue={2}
              />
              <input
                type="hidden"
                name="sanphamgiohang[1][gia]"
                defaultValue={11800000.0}
              />
              <input
                type="hidden"
                name="sanphamgiohang[1][soluong]"
                defaultValue={2}
              /> */}
              {cart.map((item) => {
                return (
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div className="font">
                      <h6 className="my-0">{item.name}</h6>
                      <small className="text-muted">{item.price}</small>
                    </div>
                    {/* <span className="text-muted">4000</span> */}
                  </li>
                );
              })}
              <input
                type="hidden"
                name="sanphamgiohang[2][sp_ma]"
                defaultValue={4}
              />
              <input
                type="hidden"
                name="sanphamgiohang[2][gia]"
                defaultValue={14990000.0}
              />
              <input
                type="hidden"
                name="sanphamgiohang[2][soluong]"
                defaultValue={8}
              />
              {/* <li className="list-group-item d-flex justify-content-between lh-condensed">
                <div>
                  <h6 className="my-0">Apple iPhone 5 16GB White</h6>
                  <small className="text-muted">14990000.00 x 8</small>
                </div>
                <span className="text-muted">119920000</span>
              </li> */}
              <li className="list-group-item d-flex justify-content-between">
                <span>T???ng th??nh ti???n</span>
                <strong>{TotalCart}</strong>
              </li>
            </ul>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="M?? khuy???n m??i"
              />
              <div className="input-group-append">
                <button type="submit" className="btn btn-secondary">
                  X??c nh???n
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 order-md-1">
            <h4 className="mb-3">Th??ng tin kh??ch h??ng</h4>
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="kh_ten">H??? t??n</label>;
                <input
                  type="text"
                  className="form-control"
                  name="kh_ten"
                  id="kh_ten"
                  defaultValue={user.fullName}
                  readOnly
                ></input>
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_gioitinh">T??n ????ng nh???p</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_gioitinh"
                  id="kh_gioitinh"
                  defaultValue={user.userName}
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_diachi">?????a ch???</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_diachi"
                  id="kh_diachi"
                  defaultValue={user.address}
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_dienthoai">??i???n tho???i</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_dienthoai"
                  id="kh_dienthoai"
                  defaultValue={user.phoneNumber}
                  readOnly
                />
              </div>
              <div className="col-md-12">
                <label htmlFor="kh_email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="kh_email"
                  id="kh_email"
                  defaultValue={user.email}
                  readOnly
                />
              </div>
            </div>
            <h4 className="mb-3">H??nh th???c thanh to??n</h4>
            <div className="d-block my-3">
              <div className="custom-control custom-radio">
                <input
                  id="httt-1"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  defaultValue={1}
                />
                <label className="custom-control-label" htmlFor="httt-1">
                  Ti???n m???t
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="httt-2"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  defaultValue={2}
                />
                <label className="custom-control-label" htmlFor="httt-2">
                  Chuy???n kho???n
                </label>
              </div>
              <div className="custom-control custom-radio">
                <input
                  id="httt-3"
                  name="httt_ma"
                  type="radio"
                  className="custom-control-input"
                  required
                  defaultValue={3}
                />
                <label className="custom-control-label" htmlFor="httt-3">
                  Ship COD
                </label>
              </div>
            </div>
            <hr className="mb-4" />
            <button
              className="btn btn-primary btn-lg btn-block"
              // type="submit"
              name="btnDatHang"
              onClick={createPost}
            >
              ?????t h??ng
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer,
    user: state.user,
    // quantity: state.cartReducer.cart.quantity,
    //total: state.cart.total,
  };
};
export default connect(Checkout, mapStateToProps);
