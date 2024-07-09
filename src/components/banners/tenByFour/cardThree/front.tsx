import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerTenByFourThree(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const {
    secondarySvgTop,
    secondarySvgBottom,
    emailSvg,
    phoneSvg,
    websiteSvg,
    address,
  } = useGetCardSvgs({
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={960}
      height={384}
      style={{ backgroundColor: primary || text.primaryColor }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={33} y={97} svgString={secondarySvgTop} />

        <CustomImage x={35} y={286} svgString={secondarySvgBottom} />
        <CustomImage
          height={54}
          width={97}
          x={33}
          y={22}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.name = ref)
              : undefined
          }
          text={text.templateAttributes.name.text}
          // text="LOREM IPSUM IS PLACEHOLDER"
          x={121}
          y={125}
          align="center"
          fontSize={text.templateAttributes.name.fontSize}
          // fontSize={48}
          fill={"#FFFFFF"}
          width={text.templateAttributes.name.width}
          height={text.templateAttributes.name.height}
          // width={719}
          // height={56}
          fontFamily="Roboto"
          lineHeight={text.templateAttributes.name.lineHeight}
          fontStyle={text.templateAttributes.name.fontStyle}
          // lineHeight={1.1}
          // fontStyle="900"
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
              ? (ref) => (props.textRef.current.description = ref)
              : undefined
          }
          text={text.templateAttributes.description.text}
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          x={39}
          y={200}
          align="center"
          // fontSize={16}
          fontSize={text.templateAttributes.description.fontSize}
          fill={"#FFFFFF"}
          width={text.templateAttributes.description.width}
          height={text.templateAttributes.description.height}
          // width={883}
          // height={57}
          fontFamily="Roboto"
          // lineHeight={1.1}
          lineHeight={text.templateAttributes.description.lineHeight}
          fontStyle={text.templateAttributes.description.fontStyle}
          textDecoration={text.templateAttributes.description.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.description &&
              editable
            ) {
              props.textRef.current.description.hide();
              props.dblClickHandler("description");
            }
          }}
        />
        {/* <CustomImage x={591} y={236} svgString={primaryTile} /> */}

        <Konva.Group x={207} y={345}>
          <Konva.Group x={0} y={0}>
            <CustomImage x={0} y={0} svgString={phoneSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.phone = ref)
                  : undefined
              }
              text={text.templateAttributes.phone.text}
              x={24}
              y={3}
              // align="right"
              fontSize={text.templateAttributes.phone.fontSize}
              // fontSize={8}
              fill={"#FFFFFF"}
              width={text.templateAttributes.phone.width}
              height={text.templateAttributes.phone.height}
              // width={70}
              // height={10}
              fontFamily="Roboto"
              lineHeight={text.templateAttributes.phone.lineHeight}
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

          <Konva.Group x={139} y={0}>
            <CustomImage x={0} y={0} svgString={emailSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.email = ref)
                  : undefined
              }
              text={text.templateAttributes.email.text}
              x={26}
              y={6}
              // align="right"
              fontSize={text.templateAttributes.email.fontSize}
              // fontSize={8}
              fill={"#FFFFFF"}
              width={text.templateAttributes.email.width}
              height={text.templateAttributes.email.height}
              // width={70}
              // height={10}
              fontFamily="Roboto"
              lineHeight={text.templateAttributes.email.lineHeight}
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

          <Konva.Group x={304} y={0}>
            <CustomImage x={0} y={0} svgString={websiteSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.website = ref)
                  : undefined
              }
              text={text.templateAttributes.website.text}
              // text="https://www.google.com"
              x={26}
              y={3}
              // align="right"
              fontSize={text.templateAttributes.website.fontSize}
              // fontSize={8}
              fill={"#FFFFFF"}
              width={text.templateAttributes.website.width}
              height={text.templateAttributes.website.height}
              // width={100}
              // height={10}
              fontFamily="Roboto"
              lineHeight={text.templateAttributes.website.lineHeight}
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
          <Konva.Group x={430} y={0}>
            <CustomImage x={0} y={0} svgString={address} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.address = ref)
                  : undefined
              }
              text={text.templateAttributes.address.text}
              x={26}
              y={4}
              // align="top"
              fontSize={text.templateAttributes.address.fontSize}
              fill={"#FFFFFF"}
              width={text.templateAttributes.address.width}
              height={text.templateAttributes.address.height}
              fontFamily="Roboto"
              lineHeight={text.templateAttributes.address.lineHeight}
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
      </Konva.Layer>
    </Konva.Stage>
  );
}
