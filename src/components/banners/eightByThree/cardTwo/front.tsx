import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerEightByThreeTwo(props: TCanvasCardProps) {
  const { editable, secondary, primary, text } = props;

  const { primarySvg, secondarySvg } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={768}
      height={288}
      style={{ backgroundColor: "#D9D9D9" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={0} y={75} svgString={primarySvg} />
        <CustomImage x={0} y={0} svgString={secondarySvg} />
        <CustomImage
          height={42}
          width={77}
          x={30}
          y={20}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.name = ref)
              : undefined
          }
          text={text.templateAttributes.name.text}
          // text="Lorem ipsum is placeholder"
          x={354}
          y={72}
          align="right"
          fontSize={text.templateAttributes.name.fontSize}
          // fontSize={48}
          fill={"#323232"}
          width={text.templateAttributes.name.width}
          height={text.templateAttributes.name.height}
          // width={387}
          // height={112}
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
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that"
          x={19}
          y={190}
          align="top"
          // fontSize={16}
          fontSize={text.templateAttributes.description.fontSize}
          fill={"#ffff"}
          width={text.templateAttributes.description.width}
          height={text.templateAttributes.description.height}
          // width={283}
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
            fill={"#FFF"}
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
            fill={"#FFF"}
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
            fill={"#FFF"}
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
            fill={"#FFF"}
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
