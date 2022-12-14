import React, { useEffect, useRef, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailAll } from "../kAcctions/Subcribe";
import { getListSMTP } from "../kAcctions/ConfigSmtp";
import Select from "react-select";

export default function SendEmailSubscribe(handlePutToggle) {
  const title = useRef(null);
  const content = useRef(null);
  const [selectedOption, setSelectedOption] = useState({
    value: "",
    label: "",
  });

  const dispatch = useDispatch();
  const dataSMTP = useSelector((state) => state.ConfigSmtp);

  useEffect(() => {
    getAllSMTP();
  }, []);

  const data = dataSMTP.list.map((state) => {
    return {
      value: state.email,
      label: state.email,
    };
  });

  const getAllSMTP = async () => {
    await Promise.all([dispatch(getListSMTP())]);
  };

  const handleOnSend = async () => {
    const dataSend = {
      SendNameEmail: selectedOption.value,
      Title: title.current.value,
      Content: content.current.value,
    };
    // console.log(dataSend);
    await new Promise((resole, reject) => {
      try {
        dispatch(sendEmailAll(dataSend));
      } catch (e) {
        reject(e);
      }
      alert("Gửi thành công");
    });
  };

  return (
    <div>
      <Dialog
        open={handlePutToggle.toggle}
        PaperProps={{
          style: {
            width: "100%",
          },
        }}
      >
        <DialogTitle>Send Email</DialogTitle>

        <DialogContent>
          <p style={{ color: "red", fontSize: "13px" }}>
            * Nội dung email sẽ được gửi đến tất cả các email có trong danh sách
            đăng ký
          </p>

          <form>
            <div className="row">
              <div>
                <div className="form-group ">
                  <label className="required">Gửi từ Email</label>
                  <Select
                    defaultValue={data[0]}
                    options={data}
                    name="true"
                    onChange={setSelectedOption}
                  ></Select>
                </div>
                <div className="form-group ">
                  <label className="required">Tiêu đề</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={title}
                  ></input>
                </div>

                <div className="form-group " style={{ marginTop: 20 }}>
                  <label className="required">Nội dung</label>
                  <textarea
                    ref={content}
                    type="text"
                    className="form-control "
                    style={{
                      height: "200px",
                    }}
                  ></textarea>
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
              onClick={handleOnSend}
              // onClick={check}
            >
              Send
            </button>
            <button
              type="reset"
              value="Reset"
              style={{ marginLeft: 20 }}
              className="btn btn-danger"
              onClick={handlePutToggle.handlePutToggle}
            >
              Cancel
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
