import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerSixByThreeOne(props: TCanvasCardProps) {
  const { editable, primary, text } = props;

  const { phoneSvg, emailSvg, websiteSvg, locationSvg } = useGetCardSvgs();

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={576}
      height={288}
      style={{ backgroundColor: primary || text.primaryColor }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage
          height={42}
          width={77}
          x={470}
          y={20}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Group x={25} y={70}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            // text="CREATIVE MARKETING AGENCY"
            x={0}
            y={0}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            // fontSize={40}
            fill={"#ffff"}
            width={230}
            height={145}
            fontFamily="Roboto"
            lineHeight={text.templateAttributes.name.lineHeight}
            fontStyle={text.templateAttributes.name.fontStyle}
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
            // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will,"
            x={290}
            y={30}
            align="top"
            // fontSize={16}
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#ffff"}
            width={239}
            height={95}
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

        <Konva.Group x={50} y={250}>
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
            width={70}
            height={10}
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

        <Konva.Group x={170} y={250}>
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
            width={70}
            height={10}
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

        <Konva.Group x={290} y={250}>
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
            width={70}
            height={10}
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

        <Konva.Group x={400} y={250}>
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
            width={91}
            height={20}
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
      </Konva.Layer>
    </Konva.Stage>
  );
}
