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
}

interface ITextProperties {
  text: string;
  fontSize: number;
}

export type TFieldName = keyof IRef;
export type TTextField = Record<TFieldName, ITextProperties>;

// interface ITextPosition {
//   x: number;
//   y: number;
// }

// export interface IDblClickHandler {
//   textPosition: ITextPosition;
//   fieldName: TFieldName;
// }
