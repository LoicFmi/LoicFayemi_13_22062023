import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isAuth: false,
  error: ''
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginPending: state => {
      state.isLoading = true;
    },
    loginSuccess: state => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    loginError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    loginOut: state => {
      state.isAuth = false;
    }
  }
});

const { actions, reducer } = loginSlice;

export const { loginPending, loginSuccess, loginError, loginOut } = actions;

export default reducer;
