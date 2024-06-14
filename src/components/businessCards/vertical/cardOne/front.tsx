import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../customImage";

import { TCanvasCardProps } from "../../../../types/card";

export default function VerticalCardOne(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const {
    middleLeftSvg,
    middleRightSvg,
    phoneSvg,
    emailSvg,
    websiteSvg,
    locationSvg,
    footerSvg,
  } = useGetCardSvgs({
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
      //   scale={{ x: 1.2, y: 1.2 }}
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage
          height={44}
          width={73}
          x={60}
          y={20}
          url={text.templateAttributes.logo.url}
        />

        <Konva.Group x={0} y={90}>
          <CustomImage x={0} y={0} svgString={middleLeftSvg} />
          <CustomImage x={149} y={0} svgString={middleRightSvg} />

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
            fill={"#ffff"}
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
            fill={"#ffff"}
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

        <Konva.Group x={30} y={180}>
          <Konva.Group x={0} y={0}>
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

          <Konva.Group x={0} y={25}>
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

          <Konva.Group x={0} y={50}>
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

          <Konva.Group x={0} y={75}>
            <CustomImage x={0} y={0} svgString={locationSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.address = ref)
                  : undefined
              }
              text={text.templateAttributes.address.text}
              x={25}
              y={6}
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
        </Konva.Group>
        <CustomImage x={0} y={326} svgString={footerSvg} />
      </Konva.Layer>
    </Konva.Stage>
  );
}
