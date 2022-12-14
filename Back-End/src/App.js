import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Tree from "./pages/Tree";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Author from "./pages/Author";
import Pushlic from "./pages/Pushlic";
import Bill from "./pages/Bill";
import Customer from "./pages/Customer";
import TypeBook from "./pages/TypeTree";
import Post from "./pages/Post";
import Plantingtool from "./pages/Plantingtool";
import Subscribes from "./CRUD/Subcribe";
import Subscribe from "./CRUD/Info_Customer";
import PageConfig from "./CRUD/PageConfig";
import Signin from "../src/pages/signin/Signin";
function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Signin />} />
            <Route path="home" element={<Home />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="plantlist">
              <Route index element={<TypeBook />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route
                path="new"
                element={
                  <New inputs={productInputs} title="Add New Plantlist" />
                }
              />
            </Route>
            <Route path="tree">
              <Route index element={<Tree />} />
              {/* <Route path=":productId" element={<Single />} /> */}
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="post" element={<Post />}></Route>
            <Route path="Pushlic" element={<Pushlic />}></Route>
            <Route path="donhang" element={<Bill />}></Route>
            <Route path="dungcu" element={<Plantingtool />}></Route>

            <Route path="Customer" element={<Customer />}></Route>
            <Route path="subscribe" element={<Subscribes />}>
              <Route index element={<Subscribe />} />
              <Route path="pageConfig" element={<PageConfig />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
