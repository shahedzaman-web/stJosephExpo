import {createSlice} from '@reduxjs/toolkit';
import { appApi } from '../services/appApi';

const initialState = {
  branchData: [],
};
export const branchDataSlice = createSlice({
  name: 'branchData',
  initialState,

  extraReducers: builder => {
    builder.addMatcher(
      appApi.endpoints.getAllBranchForStudent.matchFulfilled,

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
