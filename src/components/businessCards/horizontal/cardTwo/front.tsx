import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

export default function CardTow(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { footerSvg, headerSvg, centerSvg } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
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
        <CustomImage
          height={49}
          width={89}
          x={30}
          y={70}
          url={text.templateAttributes.logo.url}
        />
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
            text={text.templateAttributes.name.text}
            x={15}
            y={7}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#000000"}
            width={122}
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
            width={70}
            height={10}
            fontStyle={text.templateAttributes.designation.fontStyle}
            textDecoration={text.templateAttributes.designation.textDecoration}
            fontFamily="Inter"
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
              text={text.templateAttributes.phone.text}
              x={15}
              y={7}
              align="top"
              fontSize={text.templateAttributes.phone.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
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
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.website = ref)
                  : undefined
              }
              text={text.templateAttributes.website.text}
              x={15}
              y={18}
              align="top"
              fontSize={text.templateAttributes.website.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              fontStyle={text.templateAttributes.website.fontStyle}
              textDecoration={text.templateAttributes.website.textDecoration}
              fontFamily="Inter"
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
              text={text.templateAttributes.email.text}
              x={15}
              y={29}
              align="top"
              fontSize={text.templateAttributes.email.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
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
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.address = ref)
                  : undefined
              }
              text={text.templateAttributes.address.text}
              x={15}
              y={40}
              width={98}
              height={20}
              align="top"
              fontSize={text.templateAttributes.address.fontSize}
              fill={"#000000"}
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
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
