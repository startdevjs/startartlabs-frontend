import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getAllUsersInSuccess, getAllUsersFailure } from "./actions";

function* getAllUsers({ payload }) {
  const { search } = payload;
  try {
    const response = yield call(api.get, `/user`);

    const getAllUsers = response.data;

    yield put(getAllUsersInSuccess(getAllUsers));
  } catch (error) {
    yield put(getAllUsersFailure());
  }
}

export default all([takeLatest("@getAllUsers/GET_ALL_USERS_IN_REQUEST", getAllUsers)]);
