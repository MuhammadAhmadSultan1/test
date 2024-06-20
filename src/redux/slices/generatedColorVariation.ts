import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { IGeneratedColors } from "../../types/generatedColors";

const initialState: IGeneratedColors = {
  templatePath: "",
  primary: [],
  secondary: [],
};

const generatedColors = createSlice({
  name: "generatedColors",
  initialState: initialState,
  reducers: {
    setGeneratedColor: (state, action: PayloadAction<IGeneratedColors>) => {
      return { ...state, ...action.payload };
    },
    resetGeneratedColors: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { setGeneratedColor, resetGeneratedColors } =
  generatedColors.actions;

export default generatedColors.reducer;
