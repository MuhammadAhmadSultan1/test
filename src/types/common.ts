import type { Text } from "konva/lib/shapes/Text.ts";

export interface ISessionContent {
  id: number;
  sessionId: string;
  updatedAt: string;
  createdAt: string;
  logoUrl: string;
}
export interface ISessionResponse {
  success: boolean;
  message: string;
  content: ISessionContent;
  colors: string[];
}

export interface IColorScheme {
  primary: string;
  secondary: string;
  text: string;
}

export interface IRef {
  name: Text | null;
  designation: Text | null;
  phone: Text | null;
  email: Text | null;
  website: Text | null;
  address: Text | null;
  description: Text | null;
}

export interface ITextProperties {
  text: string;
  fontSize: number; // 10 - 12 - 14
  fontStyle: string; // italic - normal
  fill: string;
  textDecoration: string;
}

export type TFieldName = keyof IRef;
export type TTextField = Record<TFieldName, ITextProperties>;

export interface IColorVariation {
  primary?: string;
  secondary?: string;
}

export enum FONT_WEIGHT {
  NORMAL = "normal",
}

export enum FONT_STYLE {
  ITALIC = "italic",
  BOLD = "bold",
  NORMAL = "normal",
  BOLD_ITALIC = "bold italic",
}

export enum TEXT_DECORATION {
  UNDERLINE = "underline",
  EMPTY = "",
}

// interface ITextPosition {
//   x: number;
//   y: number;
// }

// export interface IDblClickHandler {
//   textPosition: ITextPosition;
//   fieldName: TFieldName;
// }
