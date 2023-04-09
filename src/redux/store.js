import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "./darkModeSlice";
import countriesReducer from "./countriesSlice";
import regionReducer from "./regionSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    countries: countriesReducer,
    region: regionReducer,
  },
});
