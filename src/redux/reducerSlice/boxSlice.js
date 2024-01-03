import { createSlice } from '@reduxjs/toolkit';

//creating redux initialstate
const initialState = {
    backgroundColor: 'red',
    padding: '10px',
    height:'10px'
};

// Redux Toolkit slice
export const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    changeColor: (state,actions) => {
       
    },
  },
});
export const { changeColor } = boxSlice.actions;

export default boxSlice.reducer;