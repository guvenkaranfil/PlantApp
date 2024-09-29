import {createSlice} from '@reduxjs/toolkit';

export interface userState {
  isUserPremium: boolean;
}

const initialState: userState = {
  isUserPremium: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserPremium: (state, action) => {
      state.isUserPremium = action.payload;
    },
  },
});

export const {updateUserPremium} = userSlice.actions;

export default userSlice.reducer;
