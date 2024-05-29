import { TFieldName } from "./common";

interface IAreaPosition {
  x: number;
  y: number;
}

export interface IChangeTextHanlerProps {
  currentText: string;
  areaPosition: IAreaPosition;
  lineHeight: string;
  fontFamily: string;
  container: string;
  fieldName: TFieldName;
  fontSize: number;
  onEnter: (
    value: string,
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName
  ) => void;
  onEscape: (textarea: HTMLTextAreaElement, fieldName: TFieldName) => void;
  onChange: (value: string, fieldName: TFieldName) => void;
}
