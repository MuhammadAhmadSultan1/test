import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerEightByThreeOne(props: TCanvasCardProps) {
  const { editable, secondary, primary, text } = props;

  const {
    primaryRight,
    primaryBottom,
    secondaryLeft,
    secondaryBottom,
    phoneSvg,
    emailSvg,
    websiteSvg,
    locationSvg,
  } = useGetCardSvgs({
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
        <CustomImage x={333} y={0} svgString={primaryRight} />
        <CustomImage x={561} y={276} svgString={primaryBottom} />
        <CustomImage x={251} y={0} svgString={secondaryLeft} />
        <CustomImage x={331} y={213} svgString={secondaryBottom} />
        <CustomImage
          height={54}
          width={97}
          x={12}
          y={27}
          url={text.templateAttributes.logo.url}
        />
        <Konva.Group x={11} y={102}>
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
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            // fontSize={32}
            fill={"#323232"}
            width={text.templateAttributes.name.width}
            height={text.templateAttributes.name.height}
            // width={258}
            // height={76}
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
            // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be."
            x={0}
            y={84}
            align="top"
            // fontSize={16}
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#323232"}
            width={text.templateAttributes.description.width}
            height={text.templateAttributes.description.height}
            // width={303}
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

        <Konva.Group x={535.5} y={73}>
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

          <Konva.Group x={0} y={25}>
            <CustomImage x={0} y={0} svgString={emailSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.email = ref)
                  : undefined
              }
              text={text.templateAttributes.email.text}
              x={24}
              y={2.5}
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

          <Konva.Group x={0} y={54}>
            <CustomImage x={0} y={0} svgString={websiteSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.website = ref)
                  : undefined
              }
              text={text.templateAttributes.website.text}
              x={24}
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

          <Konva.Group x={0} y={90}>
            <CustomImage x={0} y={0} svgString={locationSvg} />
            <Konva.Text
              ref={
                props.editable
                  ? (ref) => (props.textRef.current.address = ref)
                  : undefined
              }
              text={text.templateAttributes.address.text}
              // text="X park view, DHA Phase Lahore Pakistan"
              x={24}
              y={0}
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
          </Konva.Group>
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
