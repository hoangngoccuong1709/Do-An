import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Navbars from "../components/navbar/Navbar";
import { Link, Outlet } from "react-router-dom";

const Subscribe = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbars />
        <Navbar bg="primary mb-3 " variant="dark">
          <Container>
            <Nav>
              <Link
                to=""
                className="active ml-3 active"
                style={{
                  color: "antiquewhite",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                }}
              >
                Tổng quan
              </Link>
              <Link
                to="pageConfig"
                className="active ml-5 "
                style={{
                  color: "antiquewhite",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "17px",
                }}
              >
                Cài đặt SMTP
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    </div>
  );
};

export default Subscribe;
