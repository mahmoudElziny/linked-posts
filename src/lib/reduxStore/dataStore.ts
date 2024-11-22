import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";

export let dataStore = configureStore({
  reducer: {
    authReducer,
    postsReducer
  }
});


export type storeDispatch = typeof dataStore.dispatch;
export type rootStore = ReturnType <typeof dataStore.getState>
