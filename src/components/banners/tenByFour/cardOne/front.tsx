import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerTenByFourOne(props: TCanvasCardProps) {
  const { editable, secondary, primary, text } = props;

  const {
    primaryBottom,
    secondaryLeft,
    secondaryRight,
    logoContainer,
    rectangle,
  } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={960}
      height={384}
      style={{ backgroundColor: "#FFFFFF" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={0} y={0} svgString={secondaryLeft} />
        <CustomImage x={0} y={236} svgString={logoContainer} />

        <CustomImage x={119} y={0} svgString={secondaryRight} />
        <CustomImage x={0} y={312} svgString={primaryBottom} />
        <CustomImage x={673} y={312} svgString={rectangle} />
        <CustomImage x={620} y={312} svgString={rectangle} />
        <CustomImage x={564} y={312} svgString={rectangle} />
        <CustomImage
          height={54}
          width={97}
          x={33}
          y={249}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Group x={310} y={109}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            // text="Lorem ipsum is placeholder"
            x={0}
            y={0}
            // align="top"
            fontSize={text.templateAttributes.name.fontSize}
            // fontSize={32}
            fill={"#21272F"}
            width={text.templateAttributes.name.width}
            height={text.templateAttributes.name.height}
            // width={480}
            // height={38}
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
            x={0}
            y={49}
            // align="top"
            // fontSize={16}
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#21272F"}
            width={text.templateAttributes.description.width}
            height={text.templateAttributes.description.height}
            // width={599}
            // height={76}
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
        </Konva.Group>

        {/* <Konva.Group x={25} y={250}>
          <CustomImage x={0} y={0} svgString={phoneSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            x={15}
            y={1}
            align="top"
            fontSize={text.templateAttributes.phone.fontSize}
            fill={"#323232"}
            width={text.templateAttributes.phone.width}
            height={text.templateAttributes.phone.height}
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

        <Konva.Group x={120} y={250}>
          <CustomImage x={0} y={0} svgString={emailSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={text.templateAttributes.email.text}
            x={15}
            y={1}
            align="top"
            fontSize={text.templateAttributes.email.fontSize}
            fill={"#323232"}
            width={text.templateAttributes.email.width}
            height={text.templateAttributes.email.height}
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

        <Konva.Group x={210} y={250}>
          <CustomImage x={0} y={0} svgString={websiteSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={text.templateAttributes.website.text}
            x={15}
            y={1}
            align="top"
            fontSize={text.templateAttributes.website.fontSize}
            fill={"#323232"}
            width={text.templateAttributes.website.width}
            height={text.templateAttributes.website.height}
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

        <Konva.Group x={320} y={250}>
          <CustomImage x={0} y={0} svgString={locationSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.address = ref)
                : undefined
            }
            text={text.templateAttributes.address.text}
            x={15}
            y={1}
            align="top"
            fontSize={text.templateAttributes.address.fontSize}
            fill={"#323232"}
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
        </Konva.Group> */}
      </Konva.Layer>
    </Konva.Stage>
  );
}
