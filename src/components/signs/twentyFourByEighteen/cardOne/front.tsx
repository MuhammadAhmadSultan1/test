import { useEffect } from "react";

import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetSvg } from "./svg/useGetSvg";
import watermarkSvg from "../../../../assets/watermark.svg";

export default function SignOne(props: TCanvasCardProps) {
  const { editable, primary, text } = props;

  const { houseWhiteSvg, roofSvg, arrowSvg } = useGetSvg({
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
      <Konva.Layer width={2304} height={1728}>
        {/* <Konva.Circle
          x={144}
          y={144}
          radius={140}
          fill={primary || text.primaryColor}
          stroke={"white"}
          strokeWidth={6}
        /> */}
        <CustomImage x={0} y={0} svgString={houseWhiteSvg} />
        <CustomImage x={0} y={0} svgString={roofSvg} />
        <CustomImage x={417} y={1321.86} svgString={arrowSvg} />
        <CustomImage
          x={text.templateAttributes.logo.x}
          y={text.templateAttributes.logo.y}
          url={text.templateAttributes.logo.url}
          width={text.templateAttributes.logo.width}
          height={text.templateAttributes.logo.height}
        />
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
          fill={primary || text.primaryColor}
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
