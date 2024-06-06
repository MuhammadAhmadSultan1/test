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
    onClick,
  } = props;

  const lineHeight = textRef.current[fieldName]?.lineHeight().toString();
  const fontFamily = textRef.current[fieldName]?.fontFamily();
  const fontSize = textRef.current[fieldName]?.fontSize();
  const fillColor = textRef.current[fieldName]?.getAttr("fill");
  const width = textRef.current[fieldName]?.getAttr("width");
  const height = textRef.current[fieldName]?.getAttr("height");
  let fontStyle: string = textRef.current[fieldName]?.getAttr("fontStyle");
  let fontWeight: string = "normal";
  const textDecoration = textRef.current[fieldName]?.getAttr("textDecoration");

  const splitedFontStyle = fontStyle.split(" ");
  if (splitedFontStyle.length) {
    fontWeight = splitedFontStyle[0];
    if (splitedFontStyle.length > 1) fontStyle = splitedFontStyle[1];
  }

  const textarea = document.createElement("textarea");
  textarea.id = fieldName;
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
  textarea.style.fontWeight = fontWeight;
  textarea.style.fontStyle = fontStyle;
  textarea.style.textDecoration = textDecoration;
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

  textarea.addEventListener("click", () => {
    onClick(fieldName);
  });

  document.getElementById(container)?.append(textarea);
  textarea.focus();
};
