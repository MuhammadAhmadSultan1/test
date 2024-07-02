import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetSvg } from "./svg/useGetSvg";

export default function CircleTwo(props: TCanvasCardProps) {
  const { primary, text } = props;

  const { stickerCircle } = useGetSvg({
    primary: primary || text.primaryColor,
  });
  return (
    <Konva.Stage
      width={288}
      height={288}
      style={{
        backgroundColor: "#F2F2F2",
      }}
      id="canvas"
      className="rounded-[10px]"
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
        <CustomImage x={0} y={0} svgString={stickerCircle} />

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
