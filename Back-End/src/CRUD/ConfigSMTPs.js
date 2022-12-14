import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { addNewSmtp } from "../kAcctions/ConfigSmtp";
import { useDispatch } from "react-redux";

export default function ConfigSMTPs(handlePutConfig) {
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
    Status: true,
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

  const handleSaveConfig = () =>
    new Promise((resole, reject) => {
      let isValidate = checkValidateInput();

      if (isValidate == true) {
        let isValidateEmail = checkValidateEmail();
        if (isValidateEmail == true) {
          try {
            dispatch(addNewSmtp(data));
            handlePutConfig.handlePutConfig();
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
        open={handlePutConfig.config}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <DialogTitle>Thêm cấu hình gửi thư</DialogTitle>

        <DialogContent>
          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "Name")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "Email")}
                  ></input>
                </div>

                <div className="form-group ">
                  <label className="required">SMTP</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => handleOnChange(e, "PassSMTP")}
                  ></input>
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
              onClick={handleSaveConfig}
            >
              Save
            </button>
            <button
              type="reset"
              value="Reset"
              style={{ marginLeft: 20 }}
              className="btn btn-danger"
              onClick={handlePutConfig.handlePutConfig}
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
