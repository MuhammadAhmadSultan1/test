import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { ICanvasCardProps } from "../../types/card";

const initialState: ICanvasCardProps = {
  logo: {
    url: "",
    width: 20,
    height: 10,
  },
  name: {
    text: "Jamie Maclaren",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.2,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  designation: {
    text: "Project Manager",
    color: "#ffffff",
    fontSize: 10,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  phone: {
    text: "+92 123 456 7890",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  website: {
    text: "www.website.com",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  email: {
    text: "test@gmail.com",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  address: {
    text: "X park view, DHA Phase 8 Lahore Pakistan",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
  description: {
    text: "X park view, DHA Phase 8 Lahore Pakistan",
    color: "#ffffff",
    fontSize: 8,
    fontWeight: 400,
    lineHeight: 0.8,
    fontStyle: "normal",
    textDecoration: "empty string",
  },
};

const templateData = createSlice({
  name: "templateData",
  initialState: initialState,
  reducers: {
    setTemplateData: (state, action: PayloadAction<ICanvasCardProps>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setTemplateData } = templateData.actions;

export default templateData.reducer;
