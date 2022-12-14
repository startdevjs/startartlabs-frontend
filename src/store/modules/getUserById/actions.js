export function getUserByIdInRequest(id) {
  return {
    type: "@getUserById/GET_USER_BY_ID_IN_REQUEST",
    payload: {
      id,
    },
  };
}

export function getUserByIdInSuccess(getUserById) {
  return {
    type: "@getUserById/GET_USER_BY_ID_IN_SUCCESS",
    payload: { getUserById },
  };
}

export function getUserByIdFailure() {
  return {
    type: "@getUserById/GET_USER_BY_ID_FAILURE",
  };
}
