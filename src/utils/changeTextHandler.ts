import { IChangeTextHanlerProps } from "../types/changeTextHandler";

export const onTextDblClick = (props: IChangeTextHanlerProps) => {
  const {
    currentText,
    areaPosition,
    container,
    fieldName,
    textRef,
    onEnter,
    onEscape,
    // onChange,
  } = props;

  const lineHeight = textRef.current[fieldName]?.lineHeight().toString();
  const fontFamily = textRef.current[fieldName]?.fontFamily();
  const fontSize = textRef.current[fieldName]?.fontSize();
  const fillColor = textRef.current[fieldName]?.getAttr("fill");
  const width = textRef.current[fieldName]?.getAttr("width");
  const height = textRef.current[fieldName]?.getAttr("height");

  const textarea = document.createElement("textarea");
  textarea.style.position = "absolute";
  textarea.style.top = areaPosition.y + "px";
  textarea.style.left = areaPosition.x + "px";
  textarea.style.color = fillColor;
  textarea.style.background = "none";
  textarea.style.outline = "none";
  textarea.style.resize = "none";
  textarea.style.border = "none";
  textarea.style.padding = "0px";
  textarea.style.margin = "0px";
  textarea.style.overflow = "hidden";
  textarea.style.height = `${height}px`;
  textarea.style.fontSize = `${fontSize}px`;
  textarea.style.lineHeight = `${lineHeight}`;
  textarea.style.fontFamily = `${fontFamily}`;
  textarea.style.width = `${Math.round(width)}px`;
  textarea.style.border = `1px solid ${fillColor}`;
  textarea.value = currentText;
  textarea.addEventListener("keydown", (e) => {
    if (e.code === "Enter" && !e.shiftKey) {
      onEnter(textarea.value, textarea, fieldName);
    }
    if (e.code === "Escape") {
      onEscape(textarea, fieldName);
    }
  });
  // textarea.addEventListener("change", () => {
  //   onChange(textarea.value, fieldName);
  // });

  document.getElementById(container)?.append(textarea);
  textarea.focus();
};
