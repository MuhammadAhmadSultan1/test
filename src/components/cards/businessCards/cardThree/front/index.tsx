import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../../customImage";

import { TCanvasCardProps } from "../../../../../types/card";

export default function CardThree(props: TCanvasCardProps) {
  const { editable, primary, text } = props;

  const { tileSvg } = useGetCardSvgs({ primary });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={336}
      height={192}
      style={{ backgroundColor: "#ffffff" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={310} y={75} svgString={tileSvg} />
        <Konva.Group x={15} y={20}>
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
            width={78}
            height={12}
            fontStyle={text.designation.fontStyle}
            textDecoration={text.designation.textDecoration}
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
              y={20}
              align="top"
              fontSize={text.website.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              fontStyle={text.website.fontStyle}
              textDecoration={text.website.textDecoration}
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
              y={33}
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
              y={46}
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
