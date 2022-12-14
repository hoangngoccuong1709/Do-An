import { combineReducers } from "redux";
import orderReducer from "./OrderReducer";
const rootReducer = combineReducers({
  order: orderReducer,
});

export default rootReducer;
