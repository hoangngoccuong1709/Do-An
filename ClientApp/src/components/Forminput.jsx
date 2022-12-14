import React, { useState } from "react";
import "../css/Forminput.css";
import { addNewSub } from "../action/Subcribe";
import { useDispatch } from "react-redux";
export default function Forminput() {
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();

  const formatDate = (date) => {
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 101).toString().substring(1);
    var day = (date.getDate() + 100).toString().substring(1);
    var hours = (date.getHours() + 100).toString().substring(1);
    var min = (date.getMinutes() + 100).toString().substring(1);
    var sec = (date.getSeconds() + 100).toString().substring(1);
    return year + "-" + month + "-" + day + " " + hours + ":" + min + ":" + sec;
  };

  const date = formatDate(new Date());

  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
    createAt: date,
  });

  const handleOnchange = (e, id) => {
    //good code :))
    let copystate = { ...input };
    copystate[id] = e.target.value;
    setInput({
      ...copystate,
    });
  };

  const handleSubmit = async (e) => {
    const createdb = new Promise((resole, reject) => {
      try {
        dispatch(addNewSub(input));
        resole(createdb);
      } catch (e) {
        reject(e);
      }
    });
    setInput({
      name: "",
      email: "",
      message: "",
    });

    setDisplay(!display);
  };

  return (
    <div className="thongtin">
      <h2>
        Subscribe to our
        <br />
        newsletter
      </h2>
      {/* <p>Chào mừng bạn đã gửi tin thành công</p> */}

      {display === true && (
        <p style={{ color: "red" }} className="mt-3">
          Đăng ký thành công!
        </p>
      )}
      {display === false && (
        <div className="form">
          <form id="form-input">
            <input
              value={input.name}
              type="text"
              name="Your Name"
              placeholder="Your Name"
              onChange={(e) => handleOnchange(e, "name")}
            />
            <input
              value={input.email}
              type="text"
              placeholder="Mail"
              onChange={(e) => handleOnchange(e, "email")}
            />
            <textarea
              value={input.message}
              type="text"
              placeholder="Messages"
              onChange={(e) => handleOnchange(e, "message")}
            />
          </form>
          <button onClick={handleSubmit}>SEND MESSAGE</button>
        </div>
      )}
    </div>
  );
}
