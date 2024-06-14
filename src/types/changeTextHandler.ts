import { IRef, TFieldName } from "./common";

interface IAreaPosition {
  x: number;
  y: number;
}

export interface IChangeTextHanlerProps {
  currentText: string;
  areaPosition: IAreaPosition;
  container: string;
  fieldName: TFieldName;
  textRef: React.MutableRefObject<IRef>;
  stageScale: number;
  onEnter: (
    value: string,
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName
  ) => void;
  onEscape: (textarea: HTMLTextAreaElement, fieldName: TFieldName) => void;
  // onChange: (value: string, fieldName: TFieldName) => void;
  onClick: (fieldName: TFieldName) => void;
}
