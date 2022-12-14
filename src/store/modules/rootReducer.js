import { combineReducers } from "redux";

import getAllUsers from "./getAllUsers/reducer";
import getUserById from "./getUserById/reducer";

export default combineReducers({
  getAllUsers,
  getUserById,
});
