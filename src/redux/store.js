// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import { api } from './services/heroApi';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
