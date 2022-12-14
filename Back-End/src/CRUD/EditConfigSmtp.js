import React, { useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { updateConfig } from "../kAcctions/ConfigSmtp";
import { useDispatch } from "react-redux";
import { Switch } from "antd";
import "antd/dist/antd.css";

export default function ConfigSMTPs(handlePutConfigEdit) {
  const fill = handlePutConfigEdit.fillConfig;
  console.log(fill.Status);
  const [isTaxable, setIsTaxable] = useState(fill.Status);

  const checkeds = () => {
    setIsTaxable(!isTaxable);
  };
  const dispatch = useDispatch();
  //TODO: chuyển time lên backend c#
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
  const [data, setData] = useState({
    Name: "",
    Email: "",
    PassSMTP: "",
    Status: isTaxable,
    CreateAt: date,
  });

  const handleOnChange = (e, id) => {
    let copyState = { ...data };
    copyState[id] = e.target.value;
    setData({
      ...copyState,
    });
  };

  const checkValidateEmail = () => {
    let x = data.Email;
    let atPosition = x.indexOf("@");
    let dotPosition = x.lastIndexOf(".");
    if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= x.length
    ) {
      alert("Please enter a valid e-mail address.");
      return false;
    }
    return true;
  };
  const checkValidateInput = () => {
    let isValidate = true;

    let arr = ["Name", "Email", "PassSMTP"];
    for (let i = 0; i < arr.length; i++) {
      //   console.log(this.state[arr[i]]);
      if (!data[arr[i]]) {
        alert("missing perameter " + arr[i]);
        isValidate = false;
        break;
      }
    }
    return isValidate;
  };

  const handleSaveConfigEdit = () =>
    new Promise((resole, reject) => {
      let isValidate = checkValidateInput();
      if (isValidate == true) {
        let isValidateEmail = checkValidateEmail();
        if (isValidateEmail == true) {
          try {
            dispatch(updateConfig(data));
            resole();
          } catch (e) {
            reject(e);
          }
        }
      }
    });

  return (
    <div>
      <Dialog
        open={handlePutConfigEdit.configEdit}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <DialogTitle>Sửa cấu hình gửi thư</DialogTitle>

        <DialogContent>
          <div className="mb-3">
            <a style={{ color: "red", fontSize: "13px" }}>
              * Máy chủ gửi thư mặc định là "smtp.gmail.com" Port 587
            </a>
          </div>
          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Name</label>
                  <input
                    value={fill.Name || ""}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "Name")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">Email</label>
                  <input
                    value={fill.Email || ""}
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "Email")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">SMTP</label>
                  <input
                    value={fill.PassSMTP || ""}
                    type="password"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "PassSMTP")}
                  ></input>
                </div>
                <div className="form-group ">
                  <label className="required">Trạng thái</label>

                  <Switch
                    // defaultChecked
                    className="ml-3"
                    checked={isTaxable}
                    onChange={checkeds}
                  />
                </div>
              </div>
            </div>
          </form>
        </DialogContent>

        <DialogActions>
          <div className="button">
            <button
              type="reset"
              value="Reset"
              className="btn btn-primary text-center"
              onClick={handleSaveConfigEdit}
            >
              Save
            </button>
            <button
              type="reset"
              value="Reset"
              style={{ marginLeft: 20 }}
              className="btn btn-danger"
              onClick={handlePutConfigEdit.handlePutConfigEdit}
            >
              Cancel
            </button>
          </div>
        </DialogActions>
        <div>
          <form></form>
        </div>
      </Dialog>
    </div>
  );
}
