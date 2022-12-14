import { all } from "redux-saga/effects";

import getAllUsers from "./getAllUsers/sagas";
import getUserById from "./getUserById/sagas";

export default function* rootSaga() {
  return yield all([getAllUsers, getUserById]);
}
