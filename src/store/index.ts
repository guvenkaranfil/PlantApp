import {configureStore} from '@reduxjs/toolkit';

// reducers
import userReducer from './slices/user';

export const store = configureStore({
  reducer: {
    userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
