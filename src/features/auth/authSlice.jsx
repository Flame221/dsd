import { createSlice } from '@reduxjs/toolkit'
import { data, isUserExists } from '../../db/users';
const initialState = {
  isLoggedin: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, {_, payload}) => {
      if(isUserExists(payload)) state.isLoggedin = true;
    },
    logout: (state) => {
      state.isLoggedin = false;
    }
  }
});

export const { login, logout } = authSlice.actions

export default authSlice.reducer