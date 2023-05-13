import { createSlice } from "@reduxjs/toolkit";
import Filter from "components/Filter/Filter";

const filtersInitialState = {
  status: Filter.all,
};
 export const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
