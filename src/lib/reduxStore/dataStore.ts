import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

export let dataStore = configureStore({
  reducer: authSlice
});


export type storeDispatch = typeof dataStore.dispatch;