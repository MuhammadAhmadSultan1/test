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
    resetSelectedCard: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { setSelectCard, resetSelectedCard } = selectedCard.actions;

export default selectedCard.reducer;
