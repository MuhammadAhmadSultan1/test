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

// export type TFieldName =
//   | "name"
//   | "designation"
//   | "phoneNumber"
//   | "website"
//   | "email"
//   | "address";

export interface IRef {
  name: Text | null;
  designation: Text | null;
}

export type TFieldName = keyof IRef;
export type TTextField = Record<TFieldName, string>;

// interface ITextPosition {
//   x: number;
//   y: number;
// }

// export interface IDblClickHandler {
//   textPosition: ITextPosition;
//   fieldName: TFieldName;
// }
