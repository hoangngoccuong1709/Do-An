import React, { Component, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
//import AppRoutes from './AppRoutes';
import "./custom.css";
import { Spin } from "antd";
import Home from "./pages/home/index";
import Listtree from "./components/Listtree";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Viewport from "./components/Viewpost";
import Shop from "./pages/shop/Shop";
import Treedetail from "./pages/shop/Treedetail";
import Signup from "./pages/signin/Signup";
import Signin from "./pages/signin/Signin";
import Account from "./pages/account/Account";
import { useEffect } from "react";
import { checkToken } from "./action/user";
import { useSelector, useDispatch } from "react-redux";
import Cart from "./pages/cart/Cart";
import Checkout from "./components/Checkout";
import Indentified from "./pages/identified/Indentified";
import Search from "antd/lib/transfer/search";
// export default class App extends Component {
//   static displayName = App.name;

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkToken());
  }, []);

  return (
    <Suspense
      fallback={
        <div className="fixed w-screen h-screen">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Spin size="large" />
          </div>
        </div>
      }
    >
      <Header />
      <Routes>
        {/* <Route path='/login' exact element={<LoginPage />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path=":idtree" element={<Listtree />} />
        <Route path=":idtree/:idpost" element={<Viewport />} />
        <Route path=":idtree/:idpost/:idtree" element={<Listtree />} />
        <Route path=":idtree/:idpost/:idtree/:idpost" element={<Viewport />} />
        <Route path="/shop" exact element={<Shop />}></Route>

        <Route
          path="/shop/:idplantingtool"
          exact
          element={<Treedetail />}
        ></Route>
        <Route path="signin" element={<Signin />} />
        <Route path="thongtinnguoidung" element={<Account />} />

        <Route path="dangki" element={<Signup />} />
        <Route path="search" element={<Search />} />
        <Route path="giohang" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="/nhandien" exact element={<Indentified />}></Route>
        {/* {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })} */}
      </Routes>
      <Footer />
    </Suspense>
  );
}
export default App;
// }
