import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { logout } from "../../kReducer/user";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">WikiTree</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <Link to="/home" style={{ textDecoration: "none" }}>
              <span>Home</span>
            </Link>
          </li>
          <p className="title">LISTS</p>

          <Link to="/tree" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Quản lí cây</span>
            </li>
            <Link to="/plantlist" style={{ textDecoration: "none" }}>
              <li>
                <PersonOutlineIcon className="icon" />
                <span>Quản lí tên loại cây</span>
              </li>
            </Link>
          </Link>
          <Link to="/post" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Quản lí bài viết</span>
            </li>
          </Link>
          <Link to="/dungcu" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Quản lí dụng cụ</span>
            </li>
          </Link>
          <Link to="/donhang" style={{ textDecoration: "none" }}>
            <li>
              <LocalShippingIcon className="icon" />
              <span>Quản lí đơn hàng</span>
            </li>
          </Link>
          {/* <p className="title">USEFUL</p> */}
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Quản lí</span>
          </li> */}
          {/* <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li> */}
          <p className="title">SERVICE</p>
          <Link to="/Customer" style={{ textDecoration: "none" }}>
            <li>
              <SettingsSystemDaydreamOutlinedIcon className="icon" />
              <span>Quản lí khách hàng</span>
            </li>
          </Link>
          <Link to="/subscribe" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Quản lý Subscribe</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Quản lí tài khoản</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <Link
              onClick={() => dispatch(logout())}
              to={"/"}
              type="button"
              className="btn btn-danger btn-sm"
            >
              <ExitToAppIcon className="icon" />
              <span>Logout</span>
            </Link>
            {/* <ExitToAppIcon className="icon" />
            <span>Logout</span> */}
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
