import {
  setAccount,
  setLoginError,
  tokenChecked,
  setRegister,
} from "../kReducer/user";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Outlet } from "react-router-dom";
// import Home from "../pages/home/Home";
export function checkToken(params) {
  let token = localStorage.getItem("token");
  return (dispatch) => {
    if (!token) {
      dispatch(setAccount(null));
      dispatch(tokenChecked(false));
    } else {
      fetch(`/user/info`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }).then((res) => {
        res
          .json()
          .then((data) => {
            if (res.status == 200) {
              dispatch(setAccount(data));
            } else {
              dispatch(setLoginError(data));
            }
            dispatch(tokenChecked(true));
          })
          .catch((e) => {
            dispatch(
              setLoginError({
                error: e.name,
                message: e.message,
              })
            );
            dispatch(tokenChecked(true));
          });
      });
    }
  };
}

export function login(params) {
  return (dispatch) => {
    fetch(`/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          if (res.status == 200) {
            localStorage.setItem("token", data.accessToken);
            dispatch(setAccount(data));
            dispatch(tokenChecked(true));
            // .then(
            //     () => {

            // window.location.reload();
          } else {
            dispatch(setLoginError(data));
          }
        })
        .catch((e) => {
          const message =
            (e.response && e.response.data && e.response.data.message) ||
            e.message ||
            e.toString();
          dispatch(setLoginError(message));
          // dispatch(
          //   setLoginError({
          //     error: e.name,
          //     message: e.message,
          //   })
          // );
        });
    });
  };
}
export function register(params) {
  return (dispatch) => {
    fetch(`/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    }).then((res) => {
      res.json();
      if (res.status == 200) {
        alert("Bạn đã đăng ki thành công");
      } else {
        alert("Tài khoản đã có vui lòng thử lại");
      }
      window.location
        .reload()
        .then((data) => {
          if (res.status == 200) {
            alert("Bạn đã đăng ki thành công");
            // window.location.reload(navigate("/thongtinnguoidung"));
            dispatch(setRegister(true));
            dispatch(setAccount(data));
            // window.location.reload();
          } else {
            dispatch(setLoginError(data));
          }
        })
        .catch((e) => {
          dispatch(
            setLoginError({
              error: e.name,
              message: e.message,
            })
          );
        });
    });
  };
}
