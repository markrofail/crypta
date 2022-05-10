import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isLoggedIn = true;
    },
  },
});

export const {signIn} = authSlice.actions;

export const authReducer = authSlice.reducer;
