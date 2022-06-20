import {authApi} from '../services/authApi';
import {combineReducers} from '@reduxjs/toolkit';
import {authSlice} from '../slices/authSlice';
import {studentApi} from '../services/studentApi';
import {branchDataSlice} from '../slices/branchDataSlice';
import { teacherApi } from '../services/teacherApi';

export default combineReducers({
  [authSlice.name]: authSlice.reducer,
  [branchDataSlice.name]: branchDataSlice.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [studentApi.reducerPath]: studentApi.reducer,
  [teacherApi.reducerPath]: teacherApi.reducer,
});
