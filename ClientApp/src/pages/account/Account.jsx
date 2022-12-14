// import "./datable.scss";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../reducer/user";
import "./profile.css";
import { Button } from "antd";
const Account = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  return (
    <div className="container">
      <h1 className="text-center">Trang thông tin cá nhân </h1>
      <div className="container-1">
        <div className="row profile">
          <div className="col-md-5">
            <div className="profile-sidebar">
              <div className="profile-userpic">
                {" "}
                <img
                  src={user.account.description}
                  className="img-responsive"
                  alt="Thông tin cá nhân"
                />
              </div>
              <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                  {user.account.fullName}{" "}
                </div>
                <div className="profile-usertitle-job">
                  {" "}
                  {user.account.fullName}{" "}
                </div>
                <div className="profile-usertitle-job">
                  {" "}
                  {user.account.address}{" "}
                </div>
                <div className="profile-usertitle-job">
                  {" "}
                  {user.account.email}{" "}
                </div>
                <div className="profile-usertitle-job">
                  {" "}
                  {user.account.phoneNumber}{" "}
                </div>
              </div>
              <div className="profile-userbuttons">
                <Link to={"/"} type="button" className="btn btn-success btn-sm">
                  Trang chủ
                </Link>

                <Link
                  onClick={() => dispatch(logout())}
                  to={"/signin"}
                  type="button"
                  className="btn btn-danger btn-sm"
                >
                  Thoát ra
                </Link>
              </div>
              <div className="profile-usermenu">
                <ul className="nav">
                  {/* <div
                    className="logo_menuchinh"
                    style={{
                      float: "left",
                      paddingTop: "5px",
                      paddingLeft: "10px",
                      color: "#fff",
                      marginLeft: "auto",
                      marginRight: "auto",
                      lineHeight: "40px",
                      fontSize: "16px",
                      fontWeight: "bold",
                      fontFamily: "Arial",
                    }}
                  >
                    WEBBANHOA.COM
                  </div> */}
                  <div className="menu-icon">{/* <span>Menu</span> */}</div>
                  <li className="active">
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="glyphicon glyphicon-info-sign" /> Cập nhật
                      thông tin cá nhân{" "}
                    </a>
                  </li>

                  {/* <li>
                    {" "}
                    <a href="#">
                      {" "}
                      <i className="glyphicon glyphicon-envelope" /> Tin nhắn{" "}
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="profile-content">
              {" "}
              Chào mừng {user.account.fullName} đến với website Wikitree.com
              Rừng là ngôi nhà chung của muôn loài thực vật, trong đó có những
              loài vô cùng quý hiếm. Ngôi nhà ấy không được bảo vệ, sẽ dẫn đến
              những hậu quả không nhỏ về mặt sinh thái. Rừng là lá phổi xanh của
              trái đất. Chỉ riêng hình ảnh lá phổi cũng đã nói lên sự quan trọng
              vô cùng của rừng với cuộc sống con người. Rừng ngăn nước lũ, chống
              xói mòn, điều hòa khí hậu. Hầu như mọi hiện tượng bất thường của
              khí hậu đều có nguồn gốc từ việc con người không bảo vệ rừng. Ở
              Việt Nam chúng ta, suốt từ Bắc đến Nam, lũ lụt, hạn hán xảy ra
              liên miên trong nhiều năm qua là bởi rừng đã bị con người khai
              thác, chặt phá không thương tiếc. Bảo vệ rừng là bảo vệ những
              nguồn lợi kinh tế to lớn mà rừng đem lại cho con người.
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div style={{ textAlign: "center" }}>
    //   <h3 style={{ fontSize: 20 }}> Thông tin người dùng</h3>
    //   <div className="row">
    //     <div>
    //       <div className="form-group ">
    //         <label className="required">Tên người dùng : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.fullName}
    //         </label>
    //       </div>

    //       <div className="form-group " style={{ marginTop: 20 }}>
    //         <label className="required"> Số điện thoại : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.userName}{" "}
    //         </label>
    //       </div>
    //       <div className="form-group " style={{ marginTop: 20 }}>
    //         <label className="required"> Số điện thoại : </label>
    //         <label type="text" className="form-control " required pattern="\S+">
    //           {user.account.email}{" "}
    //         </label>
    //       </div>
    //       {/* <button  type="reset" value="Reset" className='btn btn-primary text-center'>Login</button> */}
    //     </div>
    //   </div>
    // </div>
  );
};
export default Account;
