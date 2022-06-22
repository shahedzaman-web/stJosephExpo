import {authApi} from '../services/authApi';
import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from '../slices/authSlice';
import {branchDataSlice} from '../slices/branchDataSlice';
import { appApi } from '../services/appApi';

export default combineReducers({
  [authSlice.name]: authSlice.reducer,
  [branchDataSlice.name]: branchDataSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [appApi.reducerPath]: appApi.reducer,
});
