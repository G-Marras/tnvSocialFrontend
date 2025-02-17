import {combineReducers} from "@reduxjs/toolkit";
import {userSlice} from "./user.slices.js";


export const reducers = combineReducers({
    user: userSlice.reducer,
})