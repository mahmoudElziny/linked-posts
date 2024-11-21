import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let login = createAsyncThunk('auth/login', async function(values){
    return await axios.post('https://linked-posts.routemisr.com/users/signin', values)
    .then((res)=> res).catch((err)=> err);
});

let initialState: { userToken: null | string, userdata: null } = {
  userToken: null,
  userdata: null,
};

let authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: function (state) {
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
    state.userToken = action.payload.data.token;
    });
  }
});

export default authSlice.reducer
