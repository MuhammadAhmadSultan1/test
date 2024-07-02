import * as Konva from "react-konva";

import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";
import { useGetSvg } from "./svg/useGetSvg";

export default function OvalThree(props: TCanvasCardProps) {
  const { primary, text } = props;

  const { stickerOval } = useGetSvg({
    primary: primary || text.primaryColor,
  });
  return (
    <Konva.Stage
      width={555}
      height={384}
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
        <CustomImage x={0} y={0} svgString={stickerOval} />

        <CustomImage
          width={392}
          height={218}
          x={81}
          y={83}
          url={text.templateAttributes.logo.url}
        />
      </Konva.Layer>
    </Konva.Stage>
  );
}
