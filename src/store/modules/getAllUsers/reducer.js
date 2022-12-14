import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: false,
};

export default function getAllUsers(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getAllUsers/GET_ALL_USERS_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getAllUsers/GET_ALL_USERS_IN_SUCCESS": {
        draft.loading = false;
        draft.data = payload.getAllUsers;
        draft.error = false;
        break;
      }

      case "@getAllUsers/GET_ALL_USERS_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
