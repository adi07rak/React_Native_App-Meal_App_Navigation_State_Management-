import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.ids.push(payload.id);
    },
    removeFavorite: (state, { payload }) => {
      //   state.ids = [...state.ids.filter((id) => id !== payload.id)];
      state.ids.splice(state.ids.indexOf(payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
