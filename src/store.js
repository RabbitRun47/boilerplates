import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Pages/Counter/reducer';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
