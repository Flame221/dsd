import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import todoReducer from "./todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoReducer,
    auth: authReducer,
  }
})