import { PayloadAction, createSlice } from "@reduxjs/toolkit/react";
import { ICanvasCardProps } from "../../types/card";

const initialState: ICanvasCardProps = {
  productId: "",
  sessionId: "",
  templateId: 0,
  templateKey: "",
  sku: "",
  variantId: "",
  primaryColor: "",
  secondaryColor: "",
  templateAttributes: {
    logo: {
      url: "",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
    },
    name: {
      text: "Jamie Maclaren",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.2,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    designation: {
      text: "Project Manager",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    phone: {
      text: "+92 123 456 7890",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    website: {
      text: "www.website.com",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    email: {
      text: "test@gmail.com",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    description: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      width: 20,
      height: 10,
      x: 0,
      y: 0,
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    problem: {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      width: 125,
      height: 58,
      x: 0,
      y: 0,
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    solution: {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      width: 125,
      height: 58,
      x: 0,
      y: 0,
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    callToAction: {
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      width: 125,
      height: 58,
      x: 0,
      y: 0,
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 1,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    services: [
      {
        text: "Brochures",
        width: 70,
        height: 12,
        x: 392,
        y: 320,
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1,
        textDecoration: "empty string",
      },
      {
        text: "Business Card",
        width: 70,
        height: 12,
        x: 392,
        y: 340,
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1,
        textDecoration: "empty string",
      },
      {
        text: "Banners",
        width: 70,
        height: 12,
        x: 392,
        y: 360,
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1,
        textDecoration: "empty string",
      },
      {
        text: "Stickers",
        width: 70,
        height: 12,
        x: 392,
        y: 380,
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1,
        textDecoration: "empty string",
      },
    ],
  },
};

const selectedTemplateData = createSlice({
  name: "selectedTemplateData",
  initialState: initialState,
  reducers: {
    setSelectedTemplateData: (
      state,
      action: PayloadAction<Partial<ICanvasCardProps>>
    ) => {
      return { ...state, ...action.payload };
    },
    resetSelectedTemplateData: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { setSelectedTemplateData, resetSelectedTemplateData } =
  selectedTemplateData.actions;

export default selectedTemplateData.reducer;
