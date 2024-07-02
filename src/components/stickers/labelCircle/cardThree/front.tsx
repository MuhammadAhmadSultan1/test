import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import logo from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function LabelCircleThree(props: TCanvasCardProps) {
  const { primary, secondary, text } = props;

  const { innerSecondary } = useGetCardSvgs({
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={480}
      height={192}
      style={{ backgroundColor: primary || text.primaryColor }}
      id="canvas"
      className="rounded-2xl"
    >
      <Konva.Layer imageSmoothingEnabled>
        <Konva.Group x={13} y={15}>
          <CustomImage x={0} y={0} svgString={innerSecondary} />
          <CustomImage
            width={215}
            height={120}
            x={130}
            y={20}
            url={text.templateAttributes.logo.url}
          />
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
