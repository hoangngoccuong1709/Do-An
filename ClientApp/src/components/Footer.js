import React from "react";
import "../css/Footer.css";
import { Image } from "react";
export default function Footer() {
  return (
    <footer className="footer-web" id="footer">
      <div className="title-footer">
        <h5 className="h4">wikiTrees</h5>
        <p className="p">Nơi tìm kiếm thông tin hữu ích</p>
        <div className="icon-footer">
          <img className="img-icon" src="../images/Instagram.png" />
          <img className="img-icon" src="../images/Facebook.png" />
          <img className="img-icon" src="../images/Twitter.png" />
          <img className="img-icon" src="../images/WhatsApp.png" />
        </div>
      </div>
      <div className="danhmuc-footer">
        <div className="danhmuc">
          <h5 className="h4">Trang chủ </h5>
          <p className="p">Giới thiệu về wikiTrees</p>
          <p className="p">Các chuyên gia </p>
          <p className="p">Liên hệ với chúng tôi</p>
        </div>
        <div className="danhmuc" style={{ marginLeft: "4rem" }}>
          <h5 className="h4">Shop </h5>
          <p className="p">Mua hàng bên shop</p>
          <p className="p">Liên hệ với shop</p>
          <p className="p">Các sản phẩm nội bật</p>
        </div>
        <div className="danhmuc" style={{ marginLeft: "4rem" }}>
          <h5 className="h4">Sơ đồ trang web</h5>
          <p className="p">Điều khoản sử dụng</p>
          <p className="p">Chính sách và quyền riêng tư</p>
        </div>
      </div>
    </footer>
  );
}
