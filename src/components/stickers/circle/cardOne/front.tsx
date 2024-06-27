import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function CircleOne(props: TCanvasCardProps) {
  const { primary, text } = props;
  return (
    <Konva.Stage
      width={288}
      height={288}
      style={{
        backgroundColor: "white",
      }}
      id="canvas"
      className="rounded-[10px]"
    >
      <Konva.Layer>
        <Konva.Circle
          x={144}
          y={144}
          radius={140}
          fill={primary || text.primaryColor}
          stroke={"white"}
          strokeWidth={6}
        />

        <CustomImage
          width={205}
          height={112}
          x={43}
          y={80}
          url={text.templateAttributes.logo.url}
        />
      </Konva.Layer>
    </Konva.Stage>
  );
}
