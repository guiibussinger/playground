import { combineReducers } from '@reduxjs/toolkit';

import authSlice from './authSlice';

const rootReducer = combineReducers({
  auth: authSlice
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
