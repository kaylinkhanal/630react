// store.js
import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducerSlice/userSlice'
import countReducer from './reducerSlice/counterSlice'
import logger from 'redux-logger'

export const store = configureStore({
  reducer: {
    user: userReducer,
    count: countReducer
  },
  middleware: ()=> [logger]
})