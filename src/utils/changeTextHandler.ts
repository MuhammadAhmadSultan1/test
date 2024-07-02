import { IChangeTextHanlerProps } from "../types/changeTextHandler";

export const onTextDblClick = (props: IChangeTextHanlerProps) => {
  const {
    currentText,
    areaPosition,
    container,
    fieldName,
    textRef,
    stageScale,
    index,
    onEnter,
    onEscape,
    // onChange,
    onClick,
  } = props;

  // console.log("areaPosition", areaPosition);

  const lineHeight = textRef?.lineHeight().toString();
  const fontFamily = textRef?.fontFamily();
  const fontSize = textRef?.fontSize();
  const fillColor = textRef?.getAttr("fill");
  const width = textRef?.getAttr("width");
  const height = textRef?.getAttr("height");
  let fontStyle: string = textRef?.getAttr("fontStyle");
  let fontWeight: string = "normal";
  const textDecoration = textRef?.getAttr("textDecoration");
  const textAlign = textRef?.getAttr("align");

  const splitedFontStyle = fontStyle?.split(" ");
  if (splitedFontStyle.length) {
    fontWeight = splitedFontStyle[0];
    if (splitedFontStyle.length > 1) fontStyle = splitedFontStyle[1];
  }

  const textarea = document.createElement("textarea");
  textarea.id = fieldName;
  textarea.style.position = "absolute";
  textarea.style.top = areaPosition.y + "px";
  textarea.style.left = areaPosition.x + "px";
  textarea.style.scale = `${stageScale}`;
  textarea.style.transformOrigin = "top left";
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
  textarea.style.fontWeight = fontWeight;
  textarea.style.fontStyle = fontStyle;
  textarea.style.textAlign = textAlign;
  textarea.style.textDecoration = textDecoration;
  textarea.style.lineHeight = `${lineHeight}`;
  textarea.style.fontFamily = `${fontFamily}`;
  textarea.style.width = `${Math.round(width)}px`;
  textarea.style.border = `1px solid ${fillColor}`;
  textarea.value = currentText;
  textarea.addEventListener("keydown", (e) => {
    if (e.code === "Enter" && !e.shiftKey) {
      onEnter(textarea.value, textarea, fieldName, index);
    }
    if (e.code === "Escape") {
      onEscape(textarea, fieldName, index);
    }
  });
  // textarea.addEventListener("change", () => {
  //   onChange(textarea.value, fieldName);
  // });

  textarea.addEventListener("click", () => {
    onClick(fieldName, index);
  });

  document.getElementById(container)?.append(textarea);
  textarea.focus();
};
