import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

export default function VerticalCardThree(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { phoneSvg, emailSvg, locationSvg, websiteSvg, middleHalf } =
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
        <CustomImage
          height={25}
          width={101}
          x={25}
          y={20}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Group x={0} y={160}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            x={25}
            y={6}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#000000"}
            width={121}
            height={19}
            fontStyle={text.templateAttributes.name.fontStyle}
            textDecoration={text.templateAttributes.name.textDecoration}
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

        <Konva.Group x={0} y={175}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.designation = ref)
                : undefined
            }
            text={text.templateAttributes.designation.text}
            x={25}
            y={6}
            align="top"
            fontSize={text.templateAttributes.designation.fontSize}
            fill={"#000000"}
            width={100}
            height={10}
            fontStyle={text.templateAttributes.designation.fontStyle}
            textDecoration={text.templateAttributes.designation.textDecoration}
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

        <Konva.Group x={25} y={195}>
          <CustomImage x={0} y={0} svgString={middleHalf} />
        </Konva.Group>

        <Konva.Group x={25} y={240}>
          <CustomImage x={0} y={0} svgString={phoneSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            x={14}
            y={2}
            align="top"
            fontSize={text.templateAttributes.phone.fontSize}
            fill={"#000000"}
            width={70}
            height={10}
            fontStyle={text.templateAttributes.phone.fontStyle}
            textDecoration={text.templateAttributes.phone.textDecoration}
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

        <Konva.Group x={25} y={260}>
          <CustomImage x={0} y={0} svgString={emailSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={text.templateAttributes.email.text}
            x={14}
            y={2}
            align="top"
            fontSize={text.templateAttributes.email.fontSize}
            fill={"#000000"}
            width={70}
            height={10}
            fontStyle={text.templateAttributes.email.fontStyle}
            textDecoration={text.templateAttributes.email.textDecoration}
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
        <Konva.Group x={25} y={280}>
          <CustomImage x={0} y={0} svgString={websiteSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={text.templateAttributes.website.text}
            x={14}
            y={2}
            align="top"
            fontSize={text.templateAttributes.website.fontSize}
            fill={"#000000"}
            width={70}
            height={10}
            fontStyle={text.templateAttributes.website.fontStyle}
            textDecoration={text.templateAttributes.website.textDecoration}
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
        <Konva.Group x={25} y={300}>
          <CustomImage x={0} y={0} svgString={locationSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.address = ref)
                : undefined
            }
            text={text.templateAttributes.address.text}
            x={14}
            y={2}
            align="top"
            fontSize={text.templateAttributes.address.fontSize}
            fill={"#000000"}
            width={70}
            height={10}
            fontStyle={text.templateAttributes.address.fontStyle}
            textDecoration={text.templateAttributes.address.textDecoration}
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
