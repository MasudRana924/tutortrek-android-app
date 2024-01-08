// import { configureStore } from '@reduxjs/toolkit';
// import registerSlice from './auth/userSLice'
// import loginSlice from './auth/loginSlice';

// const store = configureStore({
//   reducer: {
//     register: registerSlice,
//     user:loginSlice,
//     // other reducers...
//   },
// });

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authSlice from "./auth/loginSlice";
import registerSlice from './auth/userSLice';

const persistConfig = {
  key: "authentication",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authSlice);
const combinedReducer = {
  user: persistedReducer,
  register: registerSlice,

};
const middlewares = [];
if (process.env.NODE_ENV === "development") {
  const { logger } = require("redux-logger");
  middlewares.push(logger);
}
export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: true,
});
export const persistor = persistStore(store);