import { configureStore } from '@reduxjs/toolkit';
import headReducer from '../features/headReducer'

export const store = configureStore({
  reducer: {
    car: headReducer
  },
});
