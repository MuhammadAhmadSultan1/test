import { useEffect } from "react";

import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetSvg } from "./svg/useGetSvg";
import watermarkSvg from "../../../../assets/watermark.svg";

export default function SignThree(props: TCanvasCardProps) {
  const { editable, primary, text } = props;

  const { signSvg, innerWhiteSvg, phoneSvg, whiteRecSvg } = useGetSvg({
    primary: primary || text.primaryColor,
  });

  useEffect(() => {
    if (editable && props.stageRef.current) {
      props.stageRef.current.setAttr("scale", { x: 0.7, y: 0.7 });
    }
  }, [editable]);

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={1209.6}
      height={806.4}
      style={{
        backgroundColor: "#F2F2F2",
      }}
      scale={editable ? props.stageRef.current?.scale() : { x: 0.7, y: 0.7 }}
      id="canvas"
      // className="rounded-[10px]"
    >
      <Konva.Layer width={1728} height={1152}>
        {/* <Konva.Circle
          x={144}
          y={144}
          radius={140}
          fill={primary || text.primaryColor}
          stroke={"white"}
          strokeWidth={6}
        /> */}
        <CustomImage x={0} y={0} svgString={signSvg} />
        <CustomImage x={40} y={39} svgString={innerWhiteSvg} />
        {/* <CustomImage x={1073.84} y={424.29} svgString={arrowSvg} /> */}

        <Konva.Group x={0} y={0}>
          <CustomImage x={89} y={781} svgString={whiteRecSvg} />
          <CustomImage x={123.08} y={822.15} svgString={phoneSvg} />

          <Konva.Text
            ref={
              props.editable
                ? (ref) => (props.textRef.current.phone = ref)
                : undefined
            }
            text={text.templateAttributes.phone.text}
            width={text.templateAttributes.phone.width}
            height={text.templateAttributes.phone.height}
            y={text.templateAttributes.phone.y}
            x={text.templateAttributes.phone.x}
            // align="center"
            fontStyle={text.templateAttributes.phone.fontStyle}
            fontFamily="Roboto"
            lineHeight={text.templateAttributes.phone.lineHeight}
            fontSize={text.templateAttributes.phone.fontSize}
            fill={primary || text.primaryColor}
            textDecoration={text.templateAttributes.phone.textDecoration}
            onDblClick={() => {
              if (
                props.editable &&
                props.textRef.current &&
                props.textRef.current.phone &&
                editable
              ) {
                props.textRef.current.phone?.hide();
                props.dblClickHandler(`phone`);
              }
            }}
          />
        </Konva.Group>

        <CustomImage
          x={500}
          y={400}
          url={watermarkSvg}
          width={700}
          height={400}
        />

        {/* <CustomImage
          width={205}
          height={112}
          x={43}
          y={80}
          url={text.templateAttributes.logo.url}
        /> */}

        <Konva.Text
          ref={
            props.editable
              ? (ref) => (props.textRef.current.name = ref)
              : undefined
          }
          text={text.templateAttributes.name.text}
          width={text.templateAttributes.name.width}
          height={text.templateAttributes.name.height}
          y={text.templateAttributes.name.y}
          x={text.templateAttributes.name.x}
          // align="center"
          fontStyle={text.templateAttributes.name.fontStyle}
          fontFamily="Roboto"
          lineHeight={text.templateAttributes.name.lineHeight}
          fontSize={text.templateAttributes.name.fontSize}
          fill="#FFFFFF"
          textDecoration={text.templateAttributes.name.textDecoration}
          onDblClick={() => {
            if (
              props.editable &&
              props.textRef.current &&
              props.textRef.current.name &&
              editable
            ) {
              props.textRef.current.name?.hide();
              props.dblClickHandler(`name`);
            }
          }}
        />
      </Konva.Layer>
    </Konva.Stage>
  );
}
