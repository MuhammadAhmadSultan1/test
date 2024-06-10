import { Suspense, lazy, useMemo, useRef, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ICanvasCardProps } from "../../types/card";
import { CustomToolbar } from "../../components/customToolbar";
import { FONT_STYLE, IRef, TFieldName } from "../../types/common";
import { Stage } from "konva/lib/Stage";
import { onTextDblClick } from "../../utils/changeTextHandler";

import logo from "../../assets/dummylogo.png";
import { Button } from "../../components/button";
import { setZoom } from "../../utils/zoom";

export const CustomizeTemplate = () => {
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const templateData = useAppSelector((state) => state.templateData);
  const selectedColorVariation = useAppSelector(
    (state) => state.selectedColorVariation
  );
  const [text, setText] = useState<ICanvasCardProps>(templateData);
  const [currentZoom, setCurrentZoom] = useState(10);

  const [selectedField, setSelectedField] = useState<TFieldName>();

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

  const SelectedTemplate = useMemo(() => {
    //Make sure the path must be 5 sized and end with the file name
    const splitedPath = selectedCard.path.split("/");
    return lazy(
      () =>
        import(
          `../../${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}/${splitedPath[3]}/${splitedPath[4]}.tsx`
        )
    );
  }, [selectedCard.path]);

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

  const onZoom = (event: "in" | "out") => {
    const editor = document.getElementById("editor");
    if (editor) {
      if (event === "in" && currentZoom < 30) {
        setZoom(currentZoom + 2, editor);
        setCurrentZoom((prev) => prev + 2);
      } else if (event === "out" && currentZoom > 0) {
        setZoom(currentZoom - 2, editor);
        setCurrentZoom((prev) => prev - 2);
      }

      editor.offsetHeight;
    }
  };

  return (
    <div className="flex w-full h-full flex-col items-center ">
      <div className="flex w-full items-center justify-center h-24 border-b border-b-lightOutline">
        <div className="container flex items-center justify-between">
          <div className="">
            <img src={logo} alt="logo" className="w-28 h-14" />
          </div>
          <div className="flex gap-x-4">
            <Button label="Go Back" varient="outlined" />
            <Button label="Approve and Continue" varient="primary" />
          </div>
        </div>
      </div>
      <div className="relative h-3/4 container ">
        <CustomToolbar
          onClickBold={onClickBold}
          onClickItalic={onClickItalic}
          onClickUnderline={onClickUnderline}
          onChangeTextSize={onChangeTextSize}
          selectedStyles={selectedField && text[selectedField]}
        />
        <div className="absolute -bottom-8 right-4 z-50">
          <div className="flex justify-between items-center gap-5 px-6 py-2 rounded-md bg-white">
            <span
              onClick={() => {
                onZoom("out");
              }}
              className="block cursor-pointer"
            >
              <svg
                width="14"
                height="2"
                viewBox="0 0 14 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="14" height="2" fill="#D9D9D9" />
              </svg>
            </span>
            <span className="select-none text-sm font-semibold text-darkOutline">
              {Math.round((currentZoom / 30) * 100)} %
            </span>
            <span
              onClick={() => {
                onZoom("in");
              }}
              className="cursor-pointer"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="6.74792"
                  width="14.2893"
                  height="1.50413"
                  fill="#D9D9D9"
                />
                <rect
                  x="6.39258"
                  y="14.6446"
                  width="14.2893"
                  height="1.50413"
                  transform="rotate(-90 6.39258 14.6446)"
                  fill="#D9D9D9"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="w-full h-full overflow-auto">
          <div className="flex w-full h-full justify-center items-center bg-[#F2F2F2]">
            <div id="editor" className="relative w-fit">
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
      </div>
    </div>
  );
};
