import { useState, useRef } from "react";
import * as Konva from "react-konva";
import { Stage } from "konva/lib/Stage";
// import type { Text } from "konva/lib/shapes/Text.ts";
// import { Html } from "react-konva-utils";

import CustomImage from "../../../customImage";
// import { UnionSvg } from "./svg/customSvg";
// import { IRef } from "../../../../types/card1";

import LOGO from "../../../../assets/logo.png";
import card1Front from "../../../../assets/card1Front.svg";
import blackRec from "../../../../assets/blackRec.svg";
import { IRef, TFieldName, TTextField } from "../../../../types/common";
import { onTextDblClick } from "../../../../utils/changeTextHandler";

// interface IRef {
//   name: Text | null;
// }

export default function FrontOne() {
  const [text, setText] = useState<TTextField>({
    name: "My Print Source",
    designation: "Project Manager",
  });
  // const [desp, setDesp] = useState("It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).");

  const textReff = useRef<IRef>({
    name: null,
    designation: null,
  });
  const stageRef = useRef<Stage>(null);

  const onChange = (value: string, fieldName: TFieldName) => {
    setText((prev) => ({ ...prev, [fieldName]: value }));
  };

  const removeTextarea = (
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName
  ) => {
    window.removeEventListener("click", () => {});
    textarea.parentNode?.removeChild(textarea);
    textReff.current[fieldName]?.show();
  };

  const onEnter = (
    value: string,
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName
  ) => {
    setText((prev) => ({ ...prev, [fieldName]: value }));
    removeTextarea(textarea, fieldName);
  };

  // const onTextDblClick = () => {
  //   if (textReff.current && textReff.current.name && stageRef.current) {
  //     const textPosition = textReff.current.name.absolutePosition();
  //     // so position of textarea will be the sum of positions above:
  //     const areaPosition = {
  //       x: stageRef.current.container().offsetLeft + textPosition.x,
  //       y: stageRef.current.container().offsetTop + textPosition.y,
  //     };
  //     const textarea = document.createElement("textarea");
  //     textarea.style.position = "absolute";
  //     textarea.style.top = areaPosition.y + "px";
  //     textarea.style.left = areaPosition.x + "px";
  //     textarea.style.color = "white";
  //     textarea.style.background = "none";
  //     textarea.style.outline = "none";
  //     textarea.style.resize = "none";
  //     textarea.style.border = "none";
  //     textarea.style.padding = "0px";
  //     textarea.style.margin = "0px";
  //     textarea.style.overflow = "hidden";
  //     textarea.style.height = "auto";
  //     textarea.style.lineHeight = textReff.current.name
  //       .lineHeight()
  //       .toString();
  //     textarea.style.fontFamily = textReff.current.name.fontFamily();
  //     textarea.value = text;
  //     textarea.addEventListener("keydown", (e) => {
  //       textarea.style.height = "auto";
  //       if (e.code === "Enter" && !e.shiftKey) {
  //         setText(textarea.value);
  //         removeTextarea(textarea);
  //       }
  //       // on esc do not set value back to node
  //       if (e.code === "Escape") {
  //         removeTextarea(textarea);
  //       }
  //     });
  //     textarea.addEventListener("change", () => {
  //       onChange(textarea.value);
  //     });

  //     document.getElementById("test")?.append(textarea);
  //   }
  // };

  const dblClickHandler = (fieldName: TFieldName) => {
    const textPosition = textReff.current[fieldName]?.absolutePosition();
    const lineHeight = textReff.current[fieldName]?.lineHeight().toString();
    const fontFamily = textReff.current[fieldName]?.fontFamily();
    const fontSize = textReff.current[fieldName]?.fontSize();
    if (
      stageRef.current &&
      textPosition &&
      lineHeight &&
      fontFamily &&
      fontSize
    ) {
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      onTextDblClick({
        currentText: text[fieldName],
        fieldName: fieldName,
        areaPosition: areaPosition,
        container: "test",
        lineHeight: lineHeight,
        fontFamily: fontFamily,
        fontSize: fontSize,
        onChange: onChange,
        onEnter: onEnter,
        onEscape: removeTextarea,
      });
    }
  };

  return (
    <div id="test" className="flex w-full justify-center">
      <div className="flex justify-center items-center min-w-96 min-h-96 bg-slate-300">
        <Konva.Stage
          ref={stageRef}
          width={336}
          height={192}
          style={{ backgroundColor: "#ffff" }}
        >
          <Konva.Layer>
            <CustomImage height={49} width={89} x={225} y={30} url={LOGO} />
            <Konva.Group y={65}>
              <CustomImage x={0} y={0} url={card1Front} />
              <Konva.Text
                ref={(ref) => (textReff.current.name = ref)}
                text={text.name}
                x={15}
                y={7}
                align="top"
                // height={90}
                // width={296}
                fontSize={16}
                fill="white"
                // style={{ zIndex: "100" }}
                //   draggable
                // getStrokeScaleEnabled
                // _useBufferCanvas
                onDblClick={() => {
                  if (textReff.current && textReff.current.name) {
                    textReff.current.name.hide();
                    // inputRef.current.parentNode?.removeChild(inputRef.current);
                    // onTextDblClick();
                    dblClickHandler("name");
                  }
                }}
              />
              <Konva.Text
                ref={(ref) => (textReff.current.designation = ref)}
                text={text.designation}
                x={15}
                y={24}
                align="top"
                // height={50}
                // width={296}
                fontSize={10}
                fill="white"
                // style={{ zIndex: "100" }}
                //   draggable
                // getStrokeScaleEnabled
                // _useBufferCanvas
                onDblClick={() => {
                  if (textReff.current && textReff.current.designation) {
                    textReff.current.designation.hide();
                    // inputRef.current.parentNode?.removeChild(inputRef.current);
                    dblClickHandler("designation");
                  }
                }}
              />
            </Konva.Group>

            <Konva.Group y={105}>
              <CustomImage x={0} y={0} url={blackRec} />
            </Konva.Group>
          </Konva.Layer>

          {/* <Konva.Layer y={105}></Konva.Layer> */}

          {/* <Konva.Layer y={144}>
          
        </Konva.Layer> */}
        </Konva.Stage>
      </div>
    </div>
  );
}
