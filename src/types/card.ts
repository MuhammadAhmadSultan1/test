import { Stage } from "konva/lib/Stage";
import { IRef, TFieldName } from "./common";

export interface ICardProps {
  logoUrl: string;
  name: string;
  designation: string;
  phoneNumber: string;
  website: string;
  email: string;
  address: string;
  selected?: boolean;
}

export interface IAttribute {
  text: string;
  color: string;
  fontSize: number;
  fontWeight: number;
  fontStyle: "normal" | "bold" | "italic" | "bold italic";
  textDecoration: "empty string" | "underline" | "line-through";
  // fontFamily: string;
  lineHeight: number;
  svgColor?: string;
  svgAroundColor?: string;
  //   bgColor?: string;
}

export interface ICanvasCardProps {
  logo: {
    url: string;
    width: number;
    height: number;
  };
  name: IAttribute;
  designation: IAttribute;
  phone: IAttribute;
  website: IAttribute;
  email: IAttribute;
  address: IAttribute;
  description: IAttribute;
  selected?: boolean;
  editable?: boolean;
  primary?: string;
  secondary?: string;
}

export type TCanvasCardProps = {
  text: ICanvasCardProps;
  selected?: boolean;
  primary?: string;
  secondary?: string;
} & (
  | {
      editable: true;
      textRef: React.MutableRefObject<IRef>;
      stageRef: React.RefObject<Stage>;
      dblClickHandler: (fieldName: TFieldName) => void;
    }
  | {
      editable: false;
    }
);
