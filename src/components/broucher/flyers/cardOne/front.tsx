import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function FlyerOne(props: TCanvasCardProps) {
  const { editable, secondary, primary, text } = props;

  const {
    primaryTop,
    primaryBottom,
    secondaryTopRight,
    secondaryTopLeft,
    secondaryBottom,
    whiteSvgBottom,
    phone,
    email,
    webSite,
  } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={595}
      height={842}
      style={{ backgroundColor: "#FFFFFF" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={0} y={0} svgString={primaryTop} />

        <CustomImage x={456} y={326} svgString={secondaryTopRight} />
        <CustomImage x={0} y={346} svgString={primaryBottom} />
        <CustomImage x={0} y={327} svgString={secondaryTopLeft} />
        <CustomImage x={0} y={635} svgString={whiteSvgBottom} />
        <CustomImage x={183} y={634} svgString={secondaryBottom} />
        <CustomImage
          height={text.templateAttributes.logo.height}
          width={text.templateAttributes.logo.width}
          x={text.templateAttributes.logo.x}
          y={text.templateAttributes.logo.y}
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
          x={text.templateAttributes.name.x}
          y={text.templateAttributes.name.y}
          align="center"
          // fontSize={text.templateAttributes.name.fontSize}
          fontSize={text.templateAttributes.name.fontSize}
          fill={primary || text.primaryColor}
          // width={text.templateAttributes.name.width}
          // height={text.templateAttributes.name.height}
          width={text.templateAttributes.name.width}
          height={text.templateAttributes.name.height}
          fontFamily="Roboto"
          // lineHeight={text.templateAttributes.name.lineHeight}
          // fontStyle={text.templateAttributes.name.fontStyle}
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
          text="About Company"
          fontSize={40}
          x={118}
          y={426}
          width={330}
          height={46}
          fontFamily="Roboto"
          fill="#FFFFFF"
          align="right"
          fontStyle="600"
        />

        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.description = ref)
              : undefined
          }
          text={text.templateAttributes.description.text}
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          x={text.templateAttributes.description.x}
          y={text.templateAttributes.description.y}
          align="center"
          fontSize={text.templateAttributes.description.fontSize}
          // fontSize={text.templateAttributes.description.fontSize}
          fill={"#FFFFFF"}
          // width={text.templateAttributes.description.width}
          // height={text.templateAttributes.description.height}
          width={text.templateAttributes.description.width}
          height={text.templateAttributes.description.height}
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

        <Konva.Text
          text="01"
          fontSize={24}
          x={31}
          y={720}
          // width={29}
          // height={28}
          fontFamily="Inter"
          fill="#323232"
          // align="right"
          fontStyle="700"
        />

        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.problem = ref)
              : undefined
          }
          text={text.templateAttributes.problem.text}
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          x={text.templateAttributes.problem.x}
          y={text.templateAttributes.problem.y}
          // align="center"
          fontSize={text.templateAttributes.problem.fontSize}
          // fontSize={text.templateAttributes.description.fontSize}
          fill={"#323232"}
          // width={text.templateAttributes.description.width}
          // height={text.templateAttributes.description.height}
          width={text.templateAttributes.problem.width}
          height={text.templateAttributes.problem.height}
          fontFamily="Inter"
          // lineHeight={1.1}
          lineHeight={text.templateAttributes.problem.lineHeight}
          fontStyle={text.templateAttributes.problem.fontStyle}
          textDecoration={text.templateAttributes.problem.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.problem &&
              editable
            ) {
              props.textRef.current.problem.hide();
              props.dblClickHandler("problem");
            }
          }}
        />

        <Konva.Text
          text="02"
          fontSize={24}
          x={217}
          y={720}
          // width={29}
          // height={28}
          fontFamily="Inter"
          fill="#323232"
          // align="right"
          fontStyle="700"
        />
        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.solution = ref)
              : undefined
          }
          text={text.templateAttributes.solution.text}
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          x={text.templateAttributes.solution.x}
          y={text.templateAttributes.solution.y}
          // align="center"
          fontSize={text.templateAttributes.solution.fontSize}
          // fontSize={text.templateAttributes.description.fontSize}
          fill={"#323232"}
          // width={text.templateAttributes.description.width}
          // height={text.templateAttributes.description.height}
          width={text.templateAttributes.solution.width}
          height={text.templateAttributes.solution.height}
          fontFamily="Inter"
          // lineHeight={1.1}
          lineHeight={text.templateAttributes.solution.lineHeight}
          fontStyle={text.templateAttributes.solution.fontStyle}
          textDecoration={text.templateAttributes.solution.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.solution &&
              editable
            ) {
              props.textRef.current.solution.hide();
              props.dblClickHandler("solution");
            }
          }}
        />
        <Konva.Text
          text="03"
          fontSize={24}
          x={403}
          y={720}
          // width={29}
          // height={28}
          fontFamily="Inter"
          fill="#323232"
          // align="right"
          fontStyle="700"
        />

        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.callToAction = ref)
              : undefined
          }
          text={text.templateAttributes.callToAction.text}
          // text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          x={text.templateAttributes.callToAction.x}
          y={text.templateAttributes.callToAction.y}
          // align="center"
          fontSize={text.templateAttributes.callToAction.fontSize}
          // fontSize={text.templateAttributes.description.fontSize}
          fill={"#323232"}
          // width={text.templateAttributes.description.width}
          // height={text.templateAttributes.description.height}
          width={text.templateAttributes.callToAction.width}
          height={text.templateAttributes.callToAction.height}
          fontFamily="Inter"
          // lineHeight={1.1}
          lineHeight={text.templateAttributes.callToAction.lineHeight}
          fontStyle={text.templateAttributes.callToAction.fontStyle}
          textDecoration={text.templateAttributes.callToAction.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.callToAction &&
              editable
            ) {
              props.textRef.current.callToAction.hide();
              props.dblClickHandler("callToAction");
            }
          }}
        />

        <Konva.Group x={0} y={0}>
          <CustomImage x={92} y={808} svgString={phone} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            x={text.templateAttributes.phone.x}
            y={text.templateAttributes.phone.y}
            // align="top"
            // fontSize={text.templateAttributes.phone.fontSize}
            fontSize={text.templateAttributes.phone.fontSize}
            fill={"#323232"}
            // width={text.templateAttributes.phone.width}
            // height={text.templateAttributes.phone.height}
            width={text.templateAttributes.phone.width}
            height={text.templateAttributes.phone.height}
            fontFamily="Inter"
            lineHeight={text.templateAttributes.phone.lineHeight}
            // lineHeight={1}
            fontStyle={text.templateAttributes.phone.fontStyle}
            // fontStyle="normal"
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

        <Konva.Group x={0} y={0}>
          <CustomImage x={221.93} y={808} svgString={email} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.email = ref)
                : undefined
            }
            text={text.templateAttributes.email.text}
            x={text.templateAttributes.email.x}
            y={text.templateAttributes.email.y}
            // align="top"
            fontSize={text.templateAttributes.email.fontSize}
            // fontSize={10}
            fill={"#323232"}
            width={text.templateAttributes.email.width}
            height={text.templateAttributes.email.height}
            // width={88}
            // height={12}
            fontFamily="Inter"
            lineHeight={text.templateAttributes.email.lineHeight}
            // lineHeight={1}
            fontStyle={text.templateAttributes.email.fontStyle}
            // fontStyle="normal"
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

        <Konva.Group x={0} y={0}>
          <CustomImage x={398.18} y={808} svgString={webSite} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.website = ref)
                : undefined
            }
            text={text.templateAttributes.website.text}
            x={text.templateAttributes.website.x}
            y={text.templateAttributes.website.y}
            // align="top"
            fontSize={text.templateAttributes.website.fontSize}
            // fontSize={10}
            fill={"#323232"}
            width={text.templateAttributes.website.width}
            height={text.templateAttributes.website.height}
            // width={88}
            // height={12}
            fontFamily="Inter"
            lineHeight={text.templateAttributes.website.lineHeight}
            // lineHeight={1}
            fontStyle={text.templateAttributes.website.fontStyle}
            // fontStyle="normal"
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
      </Konva.Layer>
    </Konva.Stage>
  );
}
