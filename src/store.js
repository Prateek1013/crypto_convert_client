import { configureStore } from "@reduxjs/toolkit";
import loaderReducers from './redux-slice/loaderSlice';

export const store=configureStore({
    reducer: {
        loader:loaderReducers    // name of the reducer and its source
    }
});
