import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

export default function CardComponent(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { svg1, svg2, phoneSvg, websiteSvg, emailSvg, addressSvg } =
    useGetCardSvgs({
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
        <CustomImage
          height={49}
          width={89}
          x={227}
          y={20}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Group y={67}>
          <CustomImage x={0} y={0} svgString={svg1} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            x={14}
            y={3}
            // align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#ffffff"}
            width={text.templateAttributes.name.width}
            height={text.templateAttributes.name.height}
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
            x={14}
            y={22}
            // align="top"
            fontSize={text.templateAttributes.designation.fontSize}
            fill={"#ffffff"}
            width={text.templateAttributes.designation.width}
            height={text.templateAttributes.designation.height}
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
        <Konva.Group y={102}>
          <CustomImage x={0} y={0} svgString={svg2} />
          <Konva.Group y={20}>
            <Konva.Group y={0} x={15}>
              <CustomImage x={0} y={0} svgString={phoneSvg} />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.phone = ref)
                    : undefined
                }
                text={text.templateAttributes.phone.text}
                x={25}
                y={6}
                // align="top"
                fontSize={text.templateAttributes.phone.fontSize}
                fill={"#ffffff"}
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
            <Konva.Group y={0} x={176}>
              <CustomImage x={0} y={0} svgString={websiteSvg} />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.website = ref)
                    : undefined
                }
                text={text.templateAttributes.website.text}
                x={25}
                y={6}
                // align="top"
                fontSize={text.templateAttributes.website.fontSize}
                fill={"#ffffff"}
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
            <Konva.Group y={30} x={15}>
              <CustomImage x={0} y={0} svgString={emailSvg} />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.email = ref)
                    : undefined
                }
                text={text.templateAttributes.email.text}
                x={25}
                y={6}
                // align="top"
                fontSize={text.templateAttributes.email.fontSize}
                fill={"#ffffff"}
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
            <Konva.Group y={30} x={176}>
              <CustomImage x={0} y={0} svgString={addressSvg} />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.address = ref)
                    : undefined
                }
                text={text.templateAttributes.address.text}
                width={text.templateAttributes.address.width}
                height={text.templateAttributes.address.height}
                lineHeight={1.2}
                x={25}
                y={5}
                // align="top"
                fontSize={text.templateAttributes.address.fontSize}
                fill={"#ffffff"}
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
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
