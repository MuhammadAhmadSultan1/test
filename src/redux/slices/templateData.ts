import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { ICanvasCardProps } from "../../types/card";

const initialState: ICanvasCardProps[] = [];

const templateData = createSlice({
  name: "templateData",
  initialState: initialState,
  reducers: {
    setTemplateData: (
      state,
      action: PayloadAction<Partial<ICanvasCardProps>>
    ) => {
      const index = state.findIndex(
        (template) => template.templateKey === action.payload.templateKey
      );
      if (index !== -1) {
        state.splice(index, 1, { ...action.payload } as ICanvasCardProps);
        return state;
      }
      state.push({ ...action.payload } as ICanvasCardProps);
      return state;
    },
    resetTemplatesData: (state) => {
      state = [];
      return state;
    },
  },
});

export const { setTemplateData, resetTemplatesData } = templateData.actions;

export default templateData.reducer;
