import {createSlice} from '@reduxjs/toolkit';

export interface userState {}

const initialState: userState = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;
