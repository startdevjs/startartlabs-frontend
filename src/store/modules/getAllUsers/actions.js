export function getAllUsersInRequest() {
  return {
    type: "@getAllUsers/GET_ALL_USERS_IN_REQUEST",
    payload: {},
  };
}

export function getAllUsersInSuccess(getAllUsers) {
  return {
    type: "@getAllUsers/GET_ALL_USERS_IN_SUCCESS",
    payload: { getAllUsers },
  };
}

export function getAllUsersFailure() {
  return {
    type: "@getAllUsers/GET_ALL_USERS_FAILURE",
  };
}
