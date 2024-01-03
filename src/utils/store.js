import { configureStore } from "@reduxjs/toolkit";
import loaderReducers from "../redux-slice/loaderSlice";
import dropdownReducers from "../redux-slice/dropdownSlice";
import selectedReducers from "../redux-slice/selectedSlice";
import resultReducers from "../redux-slice/resultSlice";
export const store = configureStore({
  reducer: {
    loader: loaderReducers, // name of the reducer and its source
    dropdown: dropdownReducers,
    selectedVariables:selectedReducers,
    result:resultReducers
  },
});
