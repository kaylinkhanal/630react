import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0,
};

// Redux Toolkit slice
export const counterSlice = createSlice({
  name: 'count',
  initialState,
  reducers: {
    handleInc: (state,actions) => {
      state.count++
    },
    handleDec: (state,actions) => {
      state.count--
  },
  },
});
export const { handleInc, handleDec } = counterSlice.actions;

export default counterSlice.reducer;