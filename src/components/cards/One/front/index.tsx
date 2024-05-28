import { useRef } from "react";
import * as Konva from "react-konva";
import { Stage } from "konva/lib/Stage";
// import type { Text } from "konva/lib/shapes/Text.ts";
import { Html } from 'react-konva-utils';

import CustomImage from "../../../customImage";
import { RectangleBottomSvg, UnionSvg } from "./svg/customSvg";

import LOGO from "../../../../assets/logo.png";


export default function FrontOne() {

    // const [text, setText] = useState("My Print Source");
    // const [desp, setDesp] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");

    // const textReff = useRef<Text>(null);
    const stageRef = useRef<Stage>(null);

    // const onChange = (text: string) => {
    //     setText(text);
    // };

    // const removeTextarea = (textarea: HTMLTextAreaElement) => {
    //     window.removeEventListener("click", () => { });
    //     textarea.parentNode?.removeChild(textarea);
    //     textReff.current?.show();
    // };

    // const onTextDblClick = () => {
    //     if (textReff.current && stageRef.current) {
    //         const textPosition = textReff.current.absolutePosition();
    //         // so position of textarea will be the sum of positions above:
    //         const areaPosition = {
    //             x: stageRef.current.container().offsetLeft + textPosition.x,
    //             y: stageRef.current.container().offsetTop + textPosition.y,
    //         };
    //         const textarea = document.createElement("textarea");
    //         textarea.style.position = "absolute";
    //         textarea.style.top = areaPosition.y + "px";
    //         textarea.style.left = areaPosition.x + "px";
    //         textarea.style.background = "none";
    //         textarea.style.outline = "none";
    //         textarea.style.resize = "none";
    //         textarea.style.border = "none";
    //         textarea.style.padding = "0px";
    //         textarea.style.margin = "0px";
    //         textarea.style.overflow = "hidden";
    //         textarea.style.height = "auto";
    //         textarea.style.lineHeight = textReff.current.lineHeight().toString();
    //         textarea.style.fontFamily = textReff.current.fontFamily();
    //         textarea.value = text;
    //         textarea.addEventListener("keydown", (e) => {
    //             textarea.style.height = "auto";
    //             if (e.code === "Enter" && !e.shiftKey) {
    //                 setText(textarea.value);
    //                 removeTextarea(textarea);
    //             }
    //             // on esc do not set value back to node
    //             if (e.code === "Escape") {
    //                 removeTextarea(textarea);
    //             }
    //         });
    //         textarea.addEventListener("change", () => {
    //             onChange(textarea.value);
    //         });

    //         document.getElementById("test")?.append(textarea);

    //     }
    // };


    return (
        <div id="test" style={{ height: '192px', width: '336px', margin: '0 auto', marginTop: 20 }}>
            <Konva.Stage
                ref={stageRef}
                width={336}
                height={192}
                style={{ backgroundColor: "#d9d9d9" }}
            >
                <Konva.Layer  >
                    <CustomImage height={49} width={89} x={225} y={30} url={LOGO} />
                </Konva.Layer>


                <Konva.Layer y={105}>
                    <Html>
                        <UnionSvg title={"Mubashir"} color="#004CE0" subtitle={"Project Manager"} />
                    </Html>
                    {/* <Konva.Text
                        
                        ref={textReff}
                        text={text}
                        x={30}
                        y={155}
                        height={90}
                        width={296}
                        fontSize={20}
                        fill='#590695'
                        // draggable
                        // getStrokeScaleEnabled
                        // _useBufferCanvas
                        onDblClick={() => {
                            if (textReff.current) {
                                textReff.current.hide();
                                // inputRef.current.parentNode?.removeChild(inputRef.current);
                                onTextDblClick();
                            }
                        }}
                    /> */}
                </Konva.Layer>

                <Konva.Layer y={144} >
                    <Html>
                        <RectangleBottomSvg />
                    </Html>
                </Konva.Layer>

            </Konva.Stage>


        </div>
    )
}
