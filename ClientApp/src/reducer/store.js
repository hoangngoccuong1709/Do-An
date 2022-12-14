// src/store/index.js

// Import configureStore() from Redux toolkit:
import { configureStore } from "@reduxjs/toolkit";
import ajaxCall from "../lib/ajax";
import rootReducer from "./rootReducer";
// Import books reducer:
import treeReducer from "./treeReducer";
import plantToolReducer from "./plantToolReducer";
import user from "./user";
import cartReducer from "../reducer/cartReducer";
import Subscribe from "./Subscribe";

// Create Redux store:
export const store = configureStore({
  reducer: {
    treeReducer,
    plantToolReducer,
    user,
    cartReducer,
    Subscribe,
  },
  middleware: (getDefaultMiddleware) => [ajaxCall, ...getDefaultMiddleware()],
});
