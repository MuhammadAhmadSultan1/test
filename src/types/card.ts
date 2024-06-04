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

interface IAttribute {
  text: string;
  color: string;
  fontSize: number;
  fontWeight: number;
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
