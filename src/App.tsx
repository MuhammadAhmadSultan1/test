import { useState, useRef } from "react";

import * as Konva from "react-konva";

import { Stage } from "konva/lib/Stage";
import type { Text } from "konva/lib/shapes/Text.ts";

function App() {
  const [text, setText] = useState("Dummy Text");

  const textReff = useRef<Text>(null);
  const stageRef = useRef<Stage>(null);

  const onChange = (text: string) => {
    setText(text);
  };

  const removeTextarea = (textarea: HTMLTextAreaElement) => {
    window.removeEventListener("click", () => {});

    textarea.parentNode?.removeChild(textarea);

    textReff.current?.show();
  };

  const onTextDblClick = () => {
    if (textReff.current && stageRef.current) {
      const textPosition = textReff.current.absolutePosition();
      // so position of textarea will be the sum of positions above:
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      const textarea = document.createElement("textarea");
      textarea.style.position = "absolute";
      textarea.style.top = areaPosition.y + "px";
      textarea.style.left = areaPosition.x + "px";
      textarea.style.background = "none";
      textarea.style.outline = "none";
      textarea.style.resize = "none";
      textarea.style.border = "none";
      textarea.style.padding = "0px";
      textarea.style.margin = "0px";
      textarea.style.overflow = "hidden";
      textarea.style.height = "auto";
      textarea.style.lineHeight = textReff.current.lineHeight().toString();
      textarea.style.fontFamily = textReff.current.fontFamily();
      textarea.value = text;
      textarea.addEventListener("keydown", (e) => {
        textarea.style.height = "auto";
        if (e.code === "Enter" && !e.shiftKey) {
          setText(textarea.value);
          removeTextarea(textarea);
        }
        // on esc do not set value back to node
        if (e.code === "Escape") {
          removeTextarea(textarea);
        }
      });
      textarea.addEventListener("change", () => {
        onChange(textarea.value);
      });

      document.getElementById("test")?.append(textarea);
    }
  };

  return (
    <div id="test">
      <Konva.Stage
        ref={stageRef}
        width={400}
        height={200}
        style={{ backgroundColor: "gray" }}
      >
        <Konva.Layer>
          <Konva.Text
            ref={textReff}
            text={text}
            x={30}
            y={40}
            height={20}
            // width={70}
            fontSize={20}
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
          />
        </Konva.Layer>
      </Konva.Stage>
    </div>
  );
}

export default App;
