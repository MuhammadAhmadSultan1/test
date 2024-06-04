import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";

const initialState = {
  path: "",
};

const selectedCard = createSlice({
  name: "selectedCard",
  initialState: initialState,
  reducers: {
    setSelectCard: (state, action: PayloadAction<string>) => {
      state.path = action.payload;
      return state;
    },
  },
});

export const { setSelectCard } = selectedCard.actions;

export default selectedCard.reducer;
