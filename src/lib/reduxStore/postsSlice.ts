import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let getPosts = createAsyncThunk('posts/getPosts', async function(values){
    return await axios.get('https://linked-posts.routemisr.com/posts?limit=50', {
      headers: {
        token: localStorage.getItem('loggedinToken')
      }
    })
    .then((res)=> res).catch((err)=> err);
});

let postsSlice = createSlice({
  name: "posts",
  initialState: {
    allPosts: null
  },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
        state.allPosts = action.payload.data.posts;
    });
  }
});

export default postsSlice.reducer
