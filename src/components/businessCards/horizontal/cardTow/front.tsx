import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

import LOGO from "../../../../assets/logo.png";

export default function CardTow(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { footerSvg, headerSvg, centerSvg } = useGetCardSvgs({
    primary,
    secondary,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={336}
      height={192}
      style={{ backgroundColor: "#ffff" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={0} y={0} svgString={headerSvg} />
        <CustomImage x={0} y={188} svgString={footerSvg} />
        <CustomImage height={49} width={89} x={30} y={70} url={LOGO} />
        <Konva.Group x={50} y={40}>
          <CustomImage x={120} y={0} svgString={centerSvg} />
        </Konva.Group>
        <Konva.Group x={190} y={20}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.name.text}
            x={15}
            y={7}
            align="top"
            fontSize={text.name.fontSize}
            fill={"#000000"}
            width={122}
            height={19}
            fontStyle={text.name.fontStyle}
            textDecoration={text.name.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.name &&
                editable
              ) {
                props.textRef.current.name.hide();
                props.dblClickHandler("name");
              }
            }}
          />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.designation = ref)
                : undefined
            }
            text={text.designation.text}
            x={15}
            y={24}
            align="top"
            fontSize={text.designation.fontSize}
            fill={"#000000"}
            width={70}
            height={10}
            fontStyle={text.designation.fontStyle}
            textDecoration={text.designation.textDecoration}
            // fontStyle={designation.fontStyle}
            // onClick={() => onClickTextItem("designation")}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.designation &&
                editable
              ) {
                props.textRef.current.designation.hide();
                props.dblClickHandler("designation");
              }
            }}
          />
          <Konva.Group y={80}>
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.phone = ref)
                  : undefined
              }
              text={text.phone.text}
              x={15}
              y={7}
              align="top"
              fontSize={text.phone.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              fontStyle={text.phone.fontStyle}
              textDecoration={text.phone.textDecoration}
              onDblClick={() => {
                if (
                  props.editable &&
                  props.textRef.current &&
                  props.textRef.current.phone &&
                  editable
                ) {
                  props.textRef.current.phone.hide();
                  props.dblClickHandler("phone");
                }
              }}
            />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.website = ref)
                  : undefined
              }
              text={text.website.text}
              x={15}
              y={18}
              align="top"
              fontSize={text.website.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              fontStyle={text.website.fontStyle}
              textDecoration={text.website.textDecoration}
              // fontStyle={.website.fontStyle}
              // onClick={() => onClickTextItem(".website")}
              onDblClick={() => {
                if (
                  props.editable &&
                  props.textRef.current &&
                  props.textRef.current.website &&
                  editable
                ) {
                  props.textRef.current.website.hide();
                  props.dblClickHandler("website");
                }
              }}
            />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.email = ref)
                  : undefined
              }
              text={text.email.text}
              x={15}
              y={29}
              align="top"
              fontSize={text.email.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              fontStyle={text.email.fontStyle}
              textDecoration={text.email.textDecoration}
              onDblClick={() => {
                if (
                  props.editable &&
                  props.textRef.current &&
                  props.textRef.current.email &&
                  editable
                ) {
                  props.textRef.current.email.hide();
                  props.dblClickHandler("email");
                }
              }}
            />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.address = ref)
                  : undefined
              }
              text={text.address.text}
              x={15}
              y={40}
              width={98}
              height={20}
              align="top"
              fontSize={text.address.fontSize}
              fill={"#000000"}
              fontStyle={text.address.fontStyle}
              textDecoration={text.address.textDecoration}
              onDblClick={() => {
                if (
                  props.editable &&
                  props.textRef.current &&
                  props.textRef.current.address &&
                  editable
                ) {
                  props.textRef.current.address.hide();
                  props.dblClickHandler("address");
                }
              }}
            />
          </Konva.Group>
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
