import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import Subscribe from "./Subscribe";
import ConfigSmtp from "./ConfigSmtp";
import Order from "./OrderReducer";
import app from "./app";
import user from "./user";

export default configureStore({
  reducer: {
    user,
    ConfigSmtp,
    Subscribe,
    Order,
    app,
  },
  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});
