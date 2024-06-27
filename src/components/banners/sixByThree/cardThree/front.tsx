import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import BannerIcon from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function BannerSixByThreeLast(props: TCanvasCardProps) {
  const { editable, primary, secondary, text } = props;

  const { leftSvg, rightSvg } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
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
        <CustomImage
          height={55}
          width={99}
          x={453}
          y={16}
          url={text.templateAttributes.logo.url}
        />

        <Konva.Group x={41} y={33}>
          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.name = ref)
                : undefined
            }
            text={text.templateAttributes.name.text}
            // text="LOREM IPSUM IS PLACEHOLDER"
            x={0}
            y={0}
            align="top"
            fontSize={text.templateAttributes.name.fontSize}
            // fontSize={40}
            fill={"#323232"}
            width={323}
            height={94}
            fontFamily="Roboto"
            lineHeight={text.templateAttributes.name.lineHeight}
            fontStyle={text.templateAttributes.name.fontStyle}
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
        </Konva.Group>

        <Konva.Group x={0} y={105}>
          <CustomImage x={60} y={0} svgString={rightSvg} />

          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.description = ref)
                : undefined
            }
            text={text.templateAttributes.description.text}
            // text={
            //   "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.It is a long established fact that a reader will be distracted by the"
            // }
            x={236}
            y={117}
            align="center"
            // fontSize={10}
            fontSize={text.templateAttributes.description.fontSize}
            fill={"#fff"}
            width={text.templateAttributes.description.width}
            // lineHeight={1.2}
            lineHeight={text.templateAttributes.description.lineHeight}
            height={text.templateAttributes.description.height}
            fontFamily="Roboto"
            // fontVariant="condenced"
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

        <Konva.Group x={0} y={180}>
          <CustomImage x={0} y={0} svgString={leftSvg} />
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
