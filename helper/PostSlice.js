import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Get all posts
export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (thunkAPI) => {
    try {
      const response = await axios.get("/api/get-blogs", {
        headers: {
          "Cache-Control": "no-store",
        },
      });
      if (response.data.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
// get signle post details
export const getSignlePostDetails = createAsyncThunk(
  "post/getSignlePostDetails",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/api/get-blogs/${id}`);
      if (response.data.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);
// delete single post
export const deletePost = createAsyncThunk(
  "post/deletePost",
  async (id, thunkAPI) => {
    try {
      const response = await axios.post("/api/delete-blog", { id });
      if (response.data.status === 200) {
        return response.data;
      } else {
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.toString());
    }
  }
);

export const PostSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    loading: false,
    error: null,
    show: false,
    blogs: [],
  },
  reducers: {
    showPost: (state) => {
      state.show = true;
    },
    hidePost: (state) => {
      state.show = false;
    },
  },
  extraReducers: (builder) => {
    // get all posts
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // get signle post details
    builder
      .addCase(getSignlePostDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSignlePostDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(getSignlePostDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    // delete single post
    builder
      .addCase(deletePost.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.loading = false;
        state.post = action.payload;
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { showPost, hidePost } = PostSlice.actions;
export default PostSlice.reducer;
