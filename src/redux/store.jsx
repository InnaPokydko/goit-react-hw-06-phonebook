import { configureStore } from '@reduxjs/toolkit';
import { filtersReducer } from './filterSlice';
import { contactReducer } from './contactListSlice';

export const store = configureStore({
  reducer: {
  contacts: contactReducer,
  filter: filtersReducer,
  },
})