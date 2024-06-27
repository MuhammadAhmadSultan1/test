import * as Konva from "react-konva";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

// import logo from "../../../../assets/logo.png";
import { TCanvasCardProps } from "../../../../types/card";
import CustomImage from "../../../customImage";

export default function LabelCircleThree(props: TCanvasCardProps) {
  const { primary, secondary, text } = props;

  const { innerSquareSvg } = useGetCardSvgs({
    primary: primary || text.primaryColor,
    secondary: secondary || text.secondaryColor,
  });

  return (
    <Konva.Stage
      ref={props.editable ? props.stageRef : undefined}
      width={460}
      height={172}
      style={{ backgroundColor: "white", borderColor: primary || "#590595" }}
      id="canvas"
      className="rounded-[10px] border-[10px]"
    >
      <Konva.Layer imageSmoothingEnabled>
        <Konva.Group x={0} y={0}>
          {/* <CustomImage x={0} y={0} svgString={outerSquareSvg} /> */}
          <CustomImage x={17} y={15} svgString={innerSquareSvg} />
          <CustomImage
            width={195}
            height={100}
            x={130}
            y={35}
            url={text.templateAttributes.logo.url}
          />
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
