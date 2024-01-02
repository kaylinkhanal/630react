// store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducerSlice/userSlice'
import countReducer from './reducerSlice/counterSlice'


export const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer
  },
})