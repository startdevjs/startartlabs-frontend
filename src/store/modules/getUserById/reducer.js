import produce from "immer";

const INITIAL_STATE = {
  loading: false,
  data: null,
  error: false,
};

export default function getUserById(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case "@getUserById/GET_USER_BY_ID_IN_REQUEST": {
        draft.loading = true;
        break;
      }

      case "@getUserById/GET_USER_BY_ID_IN_SUCCESS": {
        draft.loading = false;
        draft.data = payload.getUserById;
        draft.error = false;
        break;
      }

      case "@getUserById/GET_USER_BY_ID_FAILURE": {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}
