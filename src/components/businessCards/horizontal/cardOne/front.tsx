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
          x={225}
          y={30}
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
            x={15}
            y={5}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#ffffff"}
            width={122}
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
            fill={"#ffffff"}
            width={78}
            height={12}
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
        <Konva.Group y={106}>
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
                align="top"
                fontSize={text.templateAttributes.phone.fontSize}
                fill={"#ffffff"}
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
            <Konva.Group y={0} x={120}>
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
                align="top"
                fontSize={text.templateAttributes.website.fontSize}
                fill={"#ffffff"}
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
                align="top"
                fontSize={text.templateAttributes.email.fontSize}
                fill={"#ffffff"}
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
            <Konva.Group y={30} x={120}>
              <CustomImage x={0} y={0} svgString={addressSvg} />
              <Konva.Text
                ref={
                  props.editable
                    ? (ref) => (props.textRef.current.address = ref)
                    : undefined
                }
                text={text.templateAttributes.address.text}
                width={98}
                height={20}
                lineHeight={1.2}
                x={25}
                y={5}
                align="top"
                fontSize={text.templateAttributes.address.fontSize}
                fill={"#ffffff"}
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
          </Konva.Group>
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
