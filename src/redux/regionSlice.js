import { createSlice } from "@reduxjs/toolkit";

export const regionSlice = createSlice({
  name: "region",
  initialState: {
    region: null,
  },
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export default regionSlice.reducer;
