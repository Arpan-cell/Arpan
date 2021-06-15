import { combineReducers } from "redux";
import AuthReducers from "./Authreduces";
const rootReducer = combineReducers({
  authData: AuthReducers,
});

export default rootReducer;
