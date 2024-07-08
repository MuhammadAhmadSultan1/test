import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function FlyerThree(props: TCanvasCardProps) {
  const { editable, secondary, primary, text } = props;

  const {
    primaryTop,
    primaryBottom,
    primaryTopLeft,
    secondaryTopRight,
    primaryTileBottom,
    phone,
    email,
    webSite,
    address,
  } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  // const testMetaDataFlyers = {
  //   templateAttributes: {
  //     logo: {
  //       url: "",
  //       width: 106,
  //       height: 58,
  //       x: 245,
  //       y: 13,
  //     },
  //     name: {
  //       text: "PUSH BRANDS",
  //       width: 382,
  //       height: 168,
  //       x: 107,
  //       y: 155,
  //       fontSize: 72,
  //       fontStyle: "900",
  //       lineHeight: 1.1,
  //       textDecoration: "empty string",
  //     },
  //     description: {
  //       text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be.",
  //       width: 486,
  //       height: 93,
  //       x: 54,
  //       y: 485,
  //       fontSize: 16,
  //       fontStyle: "normal",
  //       lineHeight: 1.1,
  //       textDecoration: "empty string",
  //     },
  //     problem: {
  //       text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //       width: 125,
  //       height: 58,
  //       x: 55,
  //       y: 568,
  //       fontSize: 10,
  //       fontStyle: "normal",
  //       lineHeight: 1,
  //       textDecoration: "empty string",
  //     },
  //     solution: {
  //       text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //       width: 125,
  //       height: 58,
  //       x: 242,
  //       y: 568,
  //       fontSize: 10,
  //       fontStyle: "normal",
  //       lineHeight: 1,
  //       textDecoration: "empty string",
  //     },
  //     callToAction: {
  //       text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  //       width: 125,
  //       height: 58,
  //       x: 429,
  //       y: 568,
  //       fontSize: 10,
  //       fontStyle: "normal",
  //       lineHeight: 1,
  //       textDecoration: "empty string",
  //     },
  //   },
  // };

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={595}
      height={842}
      style={{ backgroundColor: "#FFFFFF" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={0} y={0} svgString={primaryTopLeft} />
        <CustomImage x={0} y={29} svgString={secondaryTopRight} />
        <CustomImage x={0} y={0} svgString={primaryTop} />

        <CustomImage x={0} y={791} svgString={primaryBottom} />
        <CustomImage x={130} y={697} svgString={primaryTileBottom} />

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
          // align="center"
          // fontSize={text.templateAttributes.name.fontSize}
          fontSize={text.templateAttributes.name.fontSize}
          fill={"#323232"}
          // width={text.templateAttributes.name.width}
          // height={text.templateAttributes.name.height}
          width={text.templateAttributes.name.width}
          height={text.templateAttributes.name.height}
          fontFamily="Inter"
          lineHeight={text.templateAttributes.name.lineHeight}
          fontStyle={text.templateAttributes.name.fontStyle}
          // lineHeight={1.1}
          // fontStyle="bold"
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

        {/* <Konva.Text
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
        /> */}

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
          // align="center"
          fontSize={text.templateAttributes.description.fontSize}
          // fontSize={text.templateAttributes.description.fontSize}
          fill={"#323232"}
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
          text="Problem"
          fontSize={16}
          x={84}
          y={541}
          width={65}
          height={19}
          fontFamily="Inter"
          fill="#000000"
          // align="right"
          fontStyle="600"
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
          align="center"
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
          text="Solution"
          fontSize={16}
          x={272}
          y={541}
          width={65}
          height={19}
          fontFamily="Inter"
          fill="#000000"
          // align="right"
          fontStyle="600"
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
          align="center"
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
          text="Act"
          fontSize={16}
          x={477}
          y={541}
          width={27}
          height={19}
          fontFamily="Inter"
          fill="#000000"
          // align="right"
          fontStyle="600"
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
          align="center"
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
          <CustomImage x={41} y={814} svgString={phone} />
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
            fill={"#FFFFFF"}
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
          <CustomImage x={156} y={814} svgString={email} />
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
            // fontSize={text.templateAttributes.email.fontSize}
            fontSize={text.templateAttributes.email.fontSize}
            fill={"#FFFFFF"}
            // width={text.templateAttributes.email.width}
            // height={text.templateAttributes.email.height}
            width={text.templateAttributes.email.width}
            height={text.templateAttributes.email.height}
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
          <CustomImage x={337} y={814} svgString={webSite} />
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
            // fontSize={text.templateAttributes.website.fontSize}
            fontSize={text.templateAttributes.website.fontSize}
            fill={"#FFFFFF"}
            // width={text.templateAttributes.website.width}
            // height={text.templateAttributes.website.height}
            width={text.templateAttributes.website.width}
            height={text.templateAttributes.website.height}
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

        <Konva.Group x={0} y={0}>
          <CustomImage x={452} y={814} svgString={address} />
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.address = ref)
                : undefined
            }
            text={text.templateAttributes.address.text}
            x={text.templateAttributes.address.x}
            y={text.templateAttributes.address.y}
            // align="top"
            fontSize={text.templateAttributes.address.fontSize}
            fill={"#FFFFFF"}
            width={text.templateAttributes.address.width}
            height={text.templateAttributes.address.height}
            fontFamily="Inter"
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
            fill={"#FFFFFF"}
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
