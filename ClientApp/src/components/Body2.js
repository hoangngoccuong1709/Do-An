import React from "react";
import "../css/Body2.css";

function Body2(props) {
  return (
    <section className="user_flex body2 container">
      <div className="info">
        <h3 className="info-title">
          wikiHow là nơi mà kiến thức của chuyên gia đồng hành cùng những bài
          nghiên cứu đáng tin cậy.
        </h3>
        <p className="info-descrep">
          Từ năm 2005, wikiHow đã giúp đỡ hàng tỷ người trong việc giải quyết
          các vấn đề từ lớn tới nhỏ. Chúng tôi hợp tác với những chuyên gia uy
          tín, một đội ngũ những nhà nghiên cứu đã qua đào tạo và một cộng đồng
          tận tâm nhằm tạo ra những nội dung hướng dẫn đáng tin cậy, dễ hiểu và
          thân thiện trên mạng.
        </p>
        <a href="#" id="readmore">
          Cùng tìm hiểu tiến trình biên tập của chúng tôi
        </a>
      </div>
      <div className="info infor">
        <img src="./images/" alt="" className="icon-banner" />
        <h3>Có căn cứ</h3>
        <p>90.000 bài viết đã được nghiên cứu về mặt học thuật</p>
        <img src="../images/research.png" alt="icon" />
        <h3>Có căn cứ</h3>
        <p>90.000 bài viết đã được nghiên cứu về mặt học thuật</p>
      </div>
    </section>
  );
}

export default Body2;
