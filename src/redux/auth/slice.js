// import { onSubmit } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onSubmit: {
      reducer(state, action) {
        state.user = action.payload;
      },
      //   prepare(user) {
      //     return {
      //       user,
      //       isLoggedIn: true,
      //     };
      //   },
    },
  },
});

export const { onSubmit } = authSlice.actions;
export const authReducer = authSlice.reducer;
