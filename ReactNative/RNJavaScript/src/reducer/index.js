import {configureStore} from '@reduxjs/toolkit';
import {sampleCounterSlice} from './sampleCounter';

export const rootReducer = configureStore({
  reducer: {
    sampleCounter: sampleCounterSlice.reducer,
  },
});
