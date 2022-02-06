import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import PostReducer from "./PostReducer";
const rootReducer = combineReducers({
  AuthReducer: AuthReducer,
  PostReducer: PostReducer,
});
export default rootReducer;