import { Suspense, lazy, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ICanvasCardProps } from "../../types/card";
import { CustomToolbar } from "../../components/customToolbar";
import { FONT_STYLE, IRef, TFieldName } from "../../types/common";
import { Stage } from "konva/lib/Stage";
import { onTextDblClick } from "../../utils/changeTextHandler";

export const CustomizeTemplate = () => {
  const [text, setText] = useState<ICanvasCardProps>({
    logo: {
      url: "",
      width: 20,
      height: 10,
    },
    name: {
      text: "Jamie Maclaren",
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.2,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    designation: {
      text: "Project Manager",
      color: "#ffffff",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    phone: {
      text: "+92 123 456 7890",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    website: {
      text: "www.website.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    email: {
      text: "test@gmail.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    description: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
      fontStyle: "normal",
      textDecoration: "empty string",
    },
    selected: false,
  });

  const [selectedField, setSelectedField] = useState<TFieldName>();

  const selectedCard = useAppSelector((state) => state.selectedCard);
  const selectedColorVariation = useAppSelector(
    (state) => state.selectedColorVariation
  );

  const textReff = useRef<IRef>({
    name: null,
    designation: null,
    email: null,
    address: null,
    phone: null,
    website: null,
  });
  const stageRef = useRef<Stage>(null);

  // const testCardData: ICanvasCardProps = {
  //   logo: {
  //     url: "",
  //     width: 20,
  //     height: 10,
  //   },
  //   name: {
  //     text: "Jamie Maclaren",
  //     color: "#ffffff",
  //     fontSize: 16,
  //     fontWeight: 600,
  //     lineHeight: 1.2,
  //     fontStyle: "normal",
  //   },
  //   designation: {
  //     text: "Project Manager",
  //     color: "#ffffff",
  //     fontSize: 10,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   phone: {
  //     text: "+92 123 456 7890",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   website: {
  //     text: "www.website.com",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   email: {
  //     text: "test@gmail.com",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   address: {
  //     text: "X park view, DHA Phase 8 Lahore Pakistan",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   description: {
  //     text: "X park view, DHA Phase 8 Lahore Pakistan",
  //     color: "#ffffff",
  //     fontSize: 8,
  //     fontWeight: 400,
  //     lineHeight: 0.8,
  //     fontStyle: "normal",
  //   },
  //   selected: false,
  // };

  const SelectedTemplate = useMemo(
    () => lazy(() => import(`../../${selectedCard.path}`)),
    [selectedCard.path]
  );

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
    if (value) {
      console.log("text =====", text);
      setText((prev) => ({
        ...prev,
        [fieldName]: { ...prev[fieldName], text: value },
      }));
    }
    removeTextarea(textarea, fieldName);
    setSelectedField(undefined);
  };

  const onClickTextArea = (fieldName: TFieldName) => {
    setSelectedField(fieldName);
  };

  const dblClickHandler = (fieldName: TFieldName) => {
    const textPosition = textReff?.current[fieldName]?.absolutePosition();
    if (textReff && stageRef && stageRef.current && textPosition) {
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      setSelectedField(fieldName);
      onTextDblClick({
        textRef: textReff,
        currentText: text[fieldName].text,
        fieldName: fieldName,
        areaPosition: areaPosition,
        container: "canvas",
        // onChange: onChange,
        onEnter: onEnter,
        onEscape: removeTextarea,
        onClick: onClickTextArea,
      });
    }
  };

  const onClickBold = () => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField);
    if (textarea) {
      if (textarea.style.fontWeight === FONT_STYLE.BOLD) {
        textarea.style.fontWeight = FONT_STYLE.NORMAL;
        setText((prev) => ({
          ...prev,
          [selectedField]: {
            ...prev[selectedField],
            fontStyle: textarea.style.fontStyle,
          },
        }));
      } else {
        textarea.style.fontWeight = FONT_STYLE.BOLD;
        setText((prev) => ({
          ...prev,
          [selectedField]: {
            ...prev[selectedField],
            fontStyle:
              textarea.style.fontStyle === FONT_STYLE.ITALIC
                ? `${textarea.style.fontWeight} ${textarea.style.fontStyle}`
                : textarea.style.fontWeight,
          },
        }));
      }
      textarea.focus();
    }
  };

  const onClickItalic = () => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField);
    if (textarea) {
      if (
        textarea.style.fontStyle === FONT_STYLE.NORMAL ||
        textarea.style.fontStyle === ""
      ) {
        textarea.style.fontStyle = FONT_STYLE.ITALIC;
        setText((prev) => ({
          ...prev,
          [selectedField]: {
            ...prev[selectedField],
            fontStyle:
              textarea.style.fontWeight === FONT_STYLE.BOLD
                ? `${textarea.style.fontWeight} ${textarea.style.fontStyle}`
                : textarea.style.fontStyle,
          },
        }));
      } else {
        textarea.style.fontStyle = FONT_STYLE.NORMAL;
        setText((prev) => ({
          ...prev,
          [selectedField]: {
            ...prev[selectedField],
            fontStyle: textarea.style.fontWeight,
          },
        }));
      }
      textarea.focus();
    }
  };

  const onChangeTextSize = (fontSize: number) => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField);
    if (textarea) {
      textarea.style.fontSize = `${fontSize}px`;
      textarea.focus();
      setText((prev) => ({
        ...prev,
        [selectedField]: {
          ...prev[selectedField],
          fontSize: fontSize,
        },
      }));
    }
  };

  const onClickUnderline = () => {
    if (!selectedField) return;

    const textarea = document.getElementById(selectedField);
    if (textarea) {
      if (textarea.style.textDecoration !== "underline") {
        textarea.style.textDecoration = "underline";
      } else {
        textarea.style.textDecoration = "none";
      }
      textarea.focus();
      setText((prev) => ({
        ...prev,
        [selectedField]: {
          ...prev[selectedField],
          textDecoration: textarea.style.textDecoration,
        },
      }));
    }
  };

  return (
    <div className="container">
      <CustomToolbar
        onClickBold={onClickBold}
        onClickItalic={onClickItalic}
        onClickUnderline={onClickUnderline}
        onChangeTextSize={onChangeTextSize}
        selectedStyles={selectedField && text[selectedField]}
      />
      <div className="flex w-full h-full justify-center items-center  bg-[#F2F2F2]">
        <div className="relative w-fit">
          <Suspense>
            <SelectedTemplate
              textRef={textReff}
              stageRef={stageRef}
              text={text}
              dblClickHandler={dblClickHandler}
              // {...testCardData}
              editable={true}
              primary={selectedColorVariation.primary}
              secondary={selectedColorVariation.secondary}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
