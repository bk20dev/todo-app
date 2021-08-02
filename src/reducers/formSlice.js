import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    title: '',
  },
  reducers: {
    update(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { update } = formSlice.actions;
export default formSlice.reducer;
