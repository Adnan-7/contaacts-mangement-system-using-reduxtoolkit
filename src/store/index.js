import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from '../slices/contacts';

const allReducers = {
  contacts: contactsSlice.reducer,
};

const store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});

export default store;
