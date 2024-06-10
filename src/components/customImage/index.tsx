import { useEffect, useState } from "react";

import * as Konva from "react-konva";
import useImage from "use-image";
// import { svgToDataUrl } from "../../utils/svgToUrl";

export default function CustomImage(props: {
  url?: string;
  svgString?: string;
  width?: number;
  height?: number;
  color?: string;
  x: number;
  y: number;
}) {
  const { url, svgString, width, height, x, y } = props;

  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (svgString) {
      const encodedSvg = encodeURIComponent(svgString);
      const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedSvg}`;
      setImageUrl(dataUrl);
    }
  }, [svgString]);

  const [image] = useImage(url || imageUrl);

  return (
    <Konva.Image
      image={image}
      width={width}
      height={height}
      x={x}
      y={y}
      // draggable
    />
  );
}
