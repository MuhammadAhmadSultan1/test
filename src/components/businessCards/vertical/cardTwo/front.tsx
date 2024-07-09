import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

export default function VerticalCardTwo(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { phoneSvg, leftSvg, PolygonLeft, emailSvg, locationSvg, websiteSvg } =
    useGetCardSvgs({
      primary: primary || text.primaryColor,
      secondary: secondary || text.secondaryColor,
    });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={192}
      height={336}
      style={{ backgroundColor: "white" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={5} y={40} svgString={PolygonLeft} />
        <CustomImage x={0} y={0} svgString={leftSvg} />

        <Konva.Group x={30} y={58}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            x={15}
            y={7}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#000000"}
            width={121}
            height={19}
            fontStyle={text.templateAttributes.name.fontStyle}
            textDecoration={text.templateAttributes.name.textDecoration}
            fontFamily="Inter"
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
        </Konva.Group>

        <Konva.Group x={31} y={60}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.designation = ref)
                : undefined
            }
            text={text.templateAttributes.designation.text}
            x={15}
            y={24}
            align="top"
            fontSize={text.templateAttributes.designation.fontSize}
            fill={"#000000"}
            width={100}
            height={10}
            fontStyle={text.templateAttributes.designation.fontStyle}
            textDecoration={text.templateAttributes.designation.textDecoration}
            fontFamily="Inter"
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
        </Konva.Group>

        <Konva.Group x={0} y={170}>
          <CustomImage x={10} y={0} svgString={phoneSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            x={30}
            y={6}
            align="top"
            fontSize={text.templateAttributes.phone.fontSize}
            fill={"#000000"}
            width={text.templateAttributes.phone.width}
            height={text.templateAttributes.phone.height}
            fontStyle={text.templateAttributes.phone.fontStyle}
            textDecoration={text.templateAttributes.phone.textDecoration}
            fontFamily="Inter"
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
        </Konva.Group>

        <Konva.Group x={0} y={200}>
          <CustomImage x={10} y={0} svgString={emailSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={text.templateAttributes.email.text}
            x={30}
            y={6}
            align="top"
            fontSize={text.templateAttributes.email.fontSize}
            fill={"#000000"}
            width={text.templateAttributes.email.width}
            height={text.templateAttributes.email.height}
            fontStyle={text.templateAttributes.email.fontStyle}
            textDecoration={text.templateAttributes.email.textDecoration}
            fontFamily="Inter"
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
        </Konva.Group>

        <Konva.Group x={0} y={230}>
          <CustomImage x={10} y={0} svgString={websiteSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={text.templateAttributes.website.text}
            x={30}
            y={6}
            align="top"
            fontSize={text.templateAttributes.website.fontSize}
            fill={"#000000"}
            width={text.templateAttributes.website.width}
            height={text.templateAttributes.website.height}
            fontStyle={text.templateAttributes.website.fontStyle}
            textDecoration={text.templateAttributes.website.textDecoration}
            fontFamily="Inter"
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
        </Konva.Group>

        <Konva.Group x={0} y={260}>
          <CustomImage x={10} y={0} svgString={locationSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.address = ref)
                : undefined
            }
            text={text.templateAttributes.address.text}
            x={30}
            y={6}
            align="top"
            fontSize={text.templateAttributes.address.fontSize}
            fill={"#000000"}
            width={text.templateAttributes.address.width}
            height={text.templateAttributes.address.height}
            fontStyle={text.templateAttributes.address.fontStyle}
            textDecoration={text.templateAttributes.address.textDecoration}
            fontFamily="Inter"
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
      </Konva.Layer>
    </Konva.Stage>
  );
}
