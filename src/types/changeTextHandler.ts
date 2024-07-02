import { Text } from "konva/lib/shapes/Text";
import { TFieldName } from "./common";

interface IAreaPosition {
  x: number;
  y: number;
}

export interface IChangeTextHanlerProps {
  currentText: string;
  areaPosition: IAreaPosition;
  container: string;
  fieldName: TFieldName;
  textRef: Text | null;
  stageScale: number;
  index?: number;
  onEnter: (
    value: string,
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName,
    index?: number
  ) => void;
  onEscape: (
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName,
    index?: number
  ) => void;
  // onChange: (value: string, fieldName: TFieldName) => void;
  onClick: (fieldName: TFieldName, index?: number) => void;
}
