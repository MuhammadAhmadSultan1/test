import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import BannerIcon from "../../../../assets/logo.png";
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
        <CustomImage height={42} width={77} x={470} y={20} url={BannerIcon} />
        <Konva.Group x={25} y={80}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            x={0}
            y={0}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            fill={"#ffff"}
            width={250}
            height={141}
            lineHeight={text.templateAttributes.name.lineHeight}
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
                ? (ref) => (props.textRef.current.description = ref)
                : undefined
            }
            text={text.templateAttributes.description.text}
            x={290}
            y={20}
            align="top"
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#ffff"}
            width={239}
            height={95}
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
            text={"X park view, DHA Phase 8 Lahore Pakistan"}
            x={15}
            y={1}
            align="top"
            fontSize={8}
            fill={"#FFF"}
            width={150}
            height={20}
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
