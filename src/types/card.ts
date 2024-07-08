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

export type TFontStyle = "normal" | "bold" | "italic" | "bold italic";
export type TTextDecoration = "empty string" | "underline" | "line-through";

export interface IAttribute {
  text: string;
  // color: string;
  width: number;
  height: number;
  x: number;
  y: number;
  fontSize: number;
  fontWeight: number;
  fontStyle: TFontStyle;
  textDecoration: TTextDecoration;
  // fontFamily: string;
  lineHeight: number;
  // svgColor?: string;
  // svgAroundColor?: string;
  //   bgColor?: string;
}

export interface ITemplateAttributes {
  logo: {
    url: string;
    width: number;
    height: number;
    x: number;
    y: number;
  };
  name: IAttribute;
  designation: IAttribute;
  phone: IAttribute;
  website: IAttribute;
  email: IAttribute;
  address: IAttribute;
  description: IAttribute;
  problem: IAttribute;
  solution: IAttribute;
  services: IAttribute[];
  callToAction: IAttribute;
  benefits: IAttribute[];
  painPoints: IAttribute[];
  featureHeadings: IAttribute[];
  featureDescriptions: IAttribute[];
  selected?: boolean;
  editable?: boolean;
  primary?: string;
  secondary?: string;
}

export interface ICanvasCardProps {
  productId: string;
  sessionId: string;
  templateKey: string;
  sku: string;
  templateId: number;
  variantId: string;
  primaryColor: string;
  secondaryColor: string;
  templateAttributes: ITemplateAttributes;
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
      dblClickHandler: (fieldName: TFieldName, index?: number) => void;
    }
  | {
      editable: false;
    }
);
