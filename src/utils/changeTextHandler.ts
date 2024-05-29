import { IChangeTextHanlerProps } from "../types/changeTextHandler";

export const onTextDblClick = (props: IChangeTextHanlerProps) => {
  const {
    currentText,
    areaPosition,
    lineHeight,
    fontFamily,
    container,
    fieldName,
    fontSize,
    onEnter,
    onEscape,
    onChange,
  } = props;
  const textarea = document.createElement("textarea");
  textarea.style.position = "absolute";
  textarea.style.top = areaPosition.y + "px";
  textarea.style.left = areaPosition.x + "px";
  textarea.style.color = "white";
  textarea.style.background = "none";
  textarea.style.outline = "none";
  textarea.style.resize = "none";
  textarea.style.border = "none";
  textarea.style.padding = "0px";
  textarea.style.margin = "0px";
  textarea.style.overflow = "hidden";
  textarea.style.height = `${fontSize}px`;
  textarea.style.fontSize = `${fontSize}px`;
  textarea.style.lineHeight = lineHeight;
  textarea.style.fontFamily = fontFamily;
  textarea.value = currentText;
  textarea.addEventListener("keydown", (e) => {
    textarea.style.height = `${fontSize}px`;
    if (e.code === "Enter" && !e.shiftKey) {
      onEnter(textarea.value, textarea, fieldName);
    }
    if (e.code === "Escape") {
      onEscape(textarea, fieldName);
    }
  });
  textarea.addEventListener("change", () => {
    onChange(textarea.value, fieldName);
  });

  document.getElementById(container)?.append(textarea);
};
