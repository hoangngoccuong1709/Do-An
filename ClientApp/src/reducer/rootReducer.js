import { combineReducers } from "redux";
import plantToolReducer from "./plantToolReducer";
import treeReducer from "./treeReducer";
import Subscribe from "./Subscribe";
const rootReducer = combineReducers({
  tree: treeReducer,
  tool: plantToolReducer,
  Subscribe: Subscribe,
});

export default rootReducer;
