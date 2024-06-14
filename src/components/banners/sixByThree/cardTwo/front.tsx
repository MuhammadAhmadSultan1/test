import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerSixByThreeTwo(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const {
    // phoneSvg,
    // emailSvg,
    // websiteSvg,
    // locationSvg,
    mainLastSvg,
    secondSvg,
    rightLastSvg,
  } = useGetCardSvgs({
    primary,
    secondary,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={576}
      height={288}
      style={{ backgroundColor: "white" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <Konva.Group x={25} y={25}>
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
            fill={"#323232"}
            width={195}
            height={76}
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

          <CustomImage height={55} width={99} x={430} y={0} url={BannerIcon} />
        </Konva.Group>

        <Konva.Group x={25} y={110}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.description = ref)
                : undefined
            }
            text={text.templateAttributes.description.text}
            x={0}
            y={0}
            align="top"
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#323232"}
            width={358}
            height={76}
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

        {/* <Konva.Group x={430} y={140}>
        <Konva.Group x={0} y={0}>
          <CustomImage x={0} y={0} svgString={phoneSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={"+92 123 456 7890"}
            x={15}
            y={1}
            align="top"
            fontSize={8}
            fill={"#000"}
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

        <Konva.Group x={0} y={20}>
          <CustomImage x={0} y={0} svgString={emailSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={"email@gmail.com"}
            x={15}
            y={1}
            align="top"
            fontSize={8}
            fill={"#000"}
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

        <Konva.Group x={0} y={40}>
          <CustomImage x={0} y={0} svgString={websiteSvg} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={"www.website.com"}
            x={15}
            y={1}
            align="top"
            fontSize={8}
            fill={"#000"}
            width={70}
            height={10}
            fontStyle={text.templateAttributes.website.fontStyle}
            textDecoration={
              text.templateAttributes.website.textDecoration
            }
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

        <Konva.Group x={0} y={60}>
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
            fill={"#000"}
            width={90}
            lineHeight={1.4}
            // height={10}
            fontStyle={text.templateAttributes.address.fontStyle}
            textDecoration={
              text.templateAttributes.address.textDecoration
            }
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
      </Konva.Group> */}

        <CustomImage x={0} y={220} svgString={mainLastSvg} />
        <CustomImage x={0} y={250} svgString={secondSvg} />
        <CustomImage x={450} y={215} svgString={rightLastSvg} />
      </Konva.Layer>
    </Konva.Stage>
  );
}
