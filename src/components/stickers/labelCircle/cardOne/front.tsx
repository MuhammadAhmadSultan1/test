import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function LabelCircleOne(props: TCanvasCardProps) {
  const { primary, text } = props;

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={460}
      height={172}
      style={{
        backgroundColor: "white",
        borderColor: primary || text.primaryColor,
      }}
      id="canvas"
      className="rounded-[10px] border-[10px]"
    >
      <Konva.Layer imageSmoothingEnabled>
        {/* <CustomImage x={0} y={0} svgString={squareSvg} /> */}
        <CustomImage
          width={195}
          height={100}
          x={140}
          y={30}
          url={text.templateAttributes.logo.url}
        />
      </Konva.Layer>
    </Konva.Stage>
  );
}
