import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";

import persistReducer from "./persistReducer";
import createStore from "./createStore";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

// const sagaMonitor =
//   process.env.NODE_ENV === "development"
//     ? console.tron.createSagaMonitor()
//     : null;

const sagaMiddleware = createSagaMiddleware({});

const middlewares = [sagaMiddleware];

const localStorageKey = "theme";
const persistedTheme = localStorage.getItem(localStorageKey);
let initialState = {
  preferences: persistedTheme ? JSON.parse(persistedTheme) : {},
};

const store = createStore(persistReducer(rootReducer, initialState), middlewares);
const persistor = persistStore(store);

store.subscribe(() => {
  const preferences = store.getState().toggleDarkTheme?.preferences;

  if (!preferences) return;

  localStorage.setItem(localStorageKey, JSON.stringify(preferences));
});

sagaMiddleware.run(rootSaga);

export { store, persistor };
