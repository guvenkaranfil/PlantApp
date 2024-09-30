import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getStorage, setStorage} from '@src/storage';

export interface userState {
  isUserPremium: boolean;
  onbardingCompleted: boolean;
}

const initialState: userState = {
  isUserPremium: false,
  onbardingCompleted: getStorage('onboardingCompleted') || false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserPremium: (state, action) => {
      state.isUserPremium = action.payload;
    },
    updateCompleteOnboarding: (state, action: PayloadAction<boolean>) => {
      state.onbardingCompleted = action.payload;
      setStorage('onboardingCompleted', action.payload);
    },
  },
});

export const {updateUserPremium, updateCompleteOnboarding} = userSlice.actions;

export default userSlice.reducer;
