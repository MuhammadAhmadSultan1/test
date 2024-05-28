import * as Konva from "react-konva";
import useImage from 'use-image';

export default function CustomImage(props: { url: any, width: number, height: number, x: number, y: number }) {
    const { url, width, height, x, y } = props
    const [image] = useImage(url);

    return (
        <Konva.Image image={image} width={width} height={height} x={x} y={y} />
    )

};

