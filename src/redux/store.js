import { authReducer } from './auth/slice';

const { configureStore } = require('@reduxjs/toolkit');

export const store = configureStore({
  reducer: { auth: authReducer },
});
