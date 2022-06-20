import {createSlice} from '@reduxjs/toolkit';
import {studentApi} from '../services/studentApi';

const initialState = {
  branchData: [],
};
export const branchDataSlice = createSlice({
  name: 'branchData',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      studentApi.endpoints.getAllBranch.matchFulfilled,

      (state, {payload}) => {
        const res = payload.data.map(item => {
          return {
            value: item._id,
            label: item.branchName,
          };
        });
        state.branchData = res;
       
      },
    );
  },
});
