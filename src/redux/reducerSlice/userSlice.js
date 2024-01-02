import { createSlice } from '@reduxjs/toolkit';

//creating redux initialstate
const initialState = {
    userName: 'kaylin',
    token: '31435278429y1n'
};

// Redux Toolkit slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state,actions) => {
        state.userName= actions.payload 
    },
  },
});
export const { setUsername } = userSlice.actions;

export default userSlice.reducer;