import {createSlice} from '@reduxjs/toolkit';

export const sampleCounterSlice = createSlice({
  name: 'sampleCounter',
  initialState: {
    value: 0,
  },
  reducers: {
    addToSampleCounter: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const sampleCounterSliceActions = sampleCounterSlice.actions;
