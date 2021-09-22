import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import axios from 'axios';
const initialState = {
  current: {},
  loading: false,
  error: '',
};

export const getUser = createAsyncThunk(
  'login/getUser',
  async (params, thunkAPI) => {
    // const currentUser = await userApi.login(params);
    // console.log(userApi.login(params));
    // return currentUser;

    let bodyParams  = JSON.stringify(params);
    return await axios
    .post(
      "http://localhost:4000/login",
      {
        bodyParams
      },
      { withCredentials: true }
    )
    .then((response) => {
      if (response.data.redirect) {
        localStorage.setItem('id' , response.data.id);
        // window.location = response.data.redirect;
      } 
    });
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.rejected]: (state) => {
      state.loading = false;
      state.error = 'Login unsuccessful';
    },
    [getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.current = action.payload;
    },
  },
});

export default loginSlice.reducer;
