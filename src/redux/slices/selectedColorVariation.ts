import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { IColorVariation } from "../../types/common";

const variation: IColorVariation = {
  primary: "",
  secondary: "",
};

const selectedColorVariation = createSlice({
  name: "selectedColorVariation",
  initialState: variation,
  reducers: {
    setSelectedColorVariation: (
      state,
      action: PayloadAction<IColorVariation>
    ) => {
      state.primary = action.payload.primary;
      state.secondary = action.payload.secondary;
      return state;
    },
  },
});

export const { setSelectedColorVariation } = selectedColorVariation.actions;

export default selectedColorVariation.reducer;
