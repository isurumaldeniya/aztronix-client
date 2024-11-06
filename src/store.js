import { configureStore } from "@reduxjs/toolkit";

//Reducers
import userReducer from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    userState: userReducer,
  }
})