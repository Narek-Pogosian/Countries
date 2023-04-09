import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  isLoading: false,
  error: "",
};

// Either pending, fulfilled or rejected action types
export const fetchCountries = createAsyncThunk("fetchCountries", async () => {
  const response = await fetch("/data.json");
  const data = await response.json();
  return data;
});

const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCountries.pending, (state) => {
      // state.isLoading = true;
    });
    builder.addCase(fetchCountries.fulfilled, (state, action) => {
      // state.isLoading = false;
      state.countries = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCountries.rejected, (state, action) => {
      // state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default countriesSlice.reducer;
