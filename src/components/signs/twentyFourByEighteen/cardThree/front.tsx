import { useEffect } from "react";

import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetSvg } from "./svg/useGetSvg";
import watermarkSvg from "../../../../assets/watermark.svg";

export default function SignThree(props: TCanvasCardProps) {
  const { editable, primary, text } = props;

  const { primaryRec, roofSvg, whiteRecSvg } = useGetSvg({
    primary: primary || text.primaryColor,
  });

  useEffect(() => {
    if (editable && props.stageRef.current) {
      props.stageRef.current.setAttr("scale", { x: 0.4, y: 0.4 });
    }
  }, [editable]);

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={921.6}
      height={691.2}
      style={{
        backgroundColor: "#F2F2F2",
      }}
      scale={editable ? props.stageRef.current?.scale() : { x: 0.4, y: 0.4 }}
      id="canvas"
      // className="rounded-[10px]"
    >
      <Konva.Layer>
        {/* <Konva.Circle
          x={144}
          y={144}
          radius={140}
          fill={primary || text.primaryColor}
          stroke={"white"}
          strokeWidth={6}
        /> */}
        <CustomImage x={0} y={0} svgString={primaryRec} />
        <CustomImage x={344} y={211} svgString={roofSvg} />

        {/* <CustomImage
          x={878}
          y={390}
          url={text.templateAttributes.logo.url}
          width={548}
          height={306.64}
        /> */}

        <Konva.Group>
          <CustomImage x={199} y={1272.25} svgString={whiteRecSvg} />
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
            fontSize={text.templateAttributes.phone.fontSize}
            lineHeight={text.templateAttributes.phone.lineHeight}
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
          x={700}
          y={700}
          url={watermarkSvg}
          width={900}
          height={600}
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
          fontSize={text.templateAttributes.name.fontSize}
          lineHeight={text.templateAttributes.name.lineHeight}
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
