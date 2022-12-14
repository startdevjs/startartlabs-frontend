import { all, takeLatest, call, put } from "redux-saga/effects";
import api from "../../../services/api";
import { getUserByIdInSuccess, getUserByIdFailure } from "./actions";

function* getUserById({ payload }) {
  const { id } = payload;

  try {
    const response = yield call(api.get, `/user/${id}`);

    const getUserById = response.data;

    yield put(getUserByIdInSuccess(getUserById));
  } catch (error) {
    yield put(getUserByIdFailure());
  }
}

export default all([takeLatest("@getUserById/GET_USER_BY_ID_IN_REQUEST", getUserById)]);
