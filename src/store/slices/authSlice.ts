import { createSlice } from '@reduxjs/toolkit';

export type AuthSliceType = {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: { name?: string; avatar?: string; token?: string; permissions?: Object[] };
  error?: Object;
};

const initialState: AuthSliceType = {
  isLoading: true,
  isLoggedIn: false,
  user: {},
  error: undefined
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LOGIN: (state, action) => ({ ...state, isLoading: true }),
    LOGIN_SUCCESS: (state, { payload }) => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      user: payload
    }),
    LOGIN_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.error
    }),
    LOGOUT: (state, action) => ({ ...state, isLoading: true }),
    LOGOUT_SUCCESS: state => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      user: {}
    }),
    LOGOUT_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.error
    })
  }
});

const { actions, reducer } = authSlice;

export const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAILURE } =
  actions;

export default reducer;
