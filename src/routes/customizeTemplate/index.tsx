import { Suspense, lazy, useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
// import { ICanvasCardProps } from "../../types/card";
import { CustomToolbar } from "../../components/customToolbar";
import { FONT_STYLE, IRef, TFieldName } from "../../types/common";
import { Stage } from "konva/lib/Stage";
import { onTextDblClick } from "../../utils/changeTextHandler";

import logo from "../../assets/dummylogo.png";
import { Button } from "../../components/button";
import { useCraeteVariantMutation } from "../../services/checkout";
// import { setTemplateData } from "../../redux/slices/templateData";
import {
  resetSelectedTemplateData,
  setSelectedTemplateData,
} from "../../redux/slices/selectedTemplate";
import {
  resetTemplatesData,
  // setTemplateData,
} from "../../redux/slices/templateData";
import { resetSelectedCard } from "../../redux/slices/selectedCard";
import { resetSelectedColorVariation } from "../../redux/slices/selectedColorVariation";
import { clearUserCardInfo } from "../../redux/slices/userInfo";
import { useUndoRedo } from "./hooks/useUndoRedo";
import { TFontStyle, TTextDecoration } from "../../types/card";
// import { Text } from "konva/lib/shapes/Text";
// import { setZoom } from "../../utils/zoom";

export const CustomizeTemplate = ({ onClickBack }: ICommonProps) => {
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const templateData = useAppSelector((state) => state.selectedTemplateData);
  // const allTemplatesData = useAppSelector((state) => state.templateData);

  const dispatch = useAppDispatch();

  // const [text, setText] = useState<ICanvasCardProps>(templateData);
  const [currentZoom, setCurrentZoom] = useState(0);
  const [actualSize, setActualSize] = useState({ width: 0, height: 0 });
  const [isPreviewEnabled, setIsPreviewEnabled] = useState(false);
  const [selectedField, setSelectedField] = useState<{
    fieldName: TFieldName;
    index?: number;
  }>();

  const textReff = useRef<IRef>({
    name: null,
    designation: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    description: null,
    callToAction: null,
    problem: null,
    services: [],
    solution: null,
  });
  const stageRef = useRef<Stage>(null);

  const [createVarient] = useCraeteVariantMutation();

  const {
    currentState,
    currentStep,
    stateHistoryLength,
    onRedo,
    onUndo,
    onStateChange,
  } = useUndoRedo(templateData);

  useEffect(() => {
    if (stageRef && stageRef.current)
      setActualSize({
        width: stageRef.current.width() - stageRef.current.width() * 0.1,
        height: stageRef.current.height() - stageRef.current.height() * 0.1,
      });
  }, [stageRef, stageRef.current]);

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

  // const onChangeStateHistory = () => {
  //   setStateHistory(prev => )
  // }

  const removeTextarea = (
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName,
    index?: number
  ) => {
    textarea.parentNode?.removeChild(textarea);
    fieldName === "services"
      ? textReff.current.services[index ?? 0]?.show()
      : textReff.current[fieldName]?.show();
  };

  const removeAllActiveTextAreas = () => {
    if (!selectedField?.fieldName) return;

    const activeTextArea = document.querySelector<HTMLTextAreaElement>(
      `#${selectedField.fieldName}`
    );
    if (activeTextArea) {
      onEnter(
        activeTextArea.value,
        activeTextArea,
        selectedField.fieldName,
        selectedField.index
      );
    }
  };

  const onEnter = (
    value: string,
    textarea: HTMLTextAreaElement,
    fieldName: TFieldName,
    index?: number
  ) => {
    if (value) {
      // setText((prev) => ({
      //   ...prev,
      //   templateAttributes: {
      //     ...prev.templateAttributes,
      //     [fieldName]: { ...prev.templateAttributes[fieldName], text: value },
      //   },
      // }));
      if (
        fieldName === "services"
          ? currentState.templateAttributes.services[index ?? 0].text !== value
          : currentState.templateAttributes[fieldName].text !== value
      )
        onStateChange(
          fieldName,
          {
            text: value,
          },
          index
        );
    }
    removeTextarea(textarea, fieldName, index);
  };

  const onClickTextArea = (fieldName: TFieldName, index?: number) => {
    setSelectedField(() => ({ fieldName: fieldName, index: index }));
  };

  const dblClickHandler = (fieldName: TFieldName, index?: number) => {
    const textPosition =
      fieldName === "services"
        ? textReff?.current.services
          ? textReff.current.services[index ?? 0]?.absolutePosition()
          : { x: 0, y: 0 }
        : textReff?.current[fieldName]?.absolutePosition();
    if (textReff && stageRef && stageRef.current && textPosition) {
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      setSelectedField(() => ({ fieldName: fieldName, index: index }));

      removeAllActiveTextAreas();

      onTextDblClick({
        textRef:
          fieldName === "services"
            ? textReff.current.services[index ?? 0]
            : textReff.current[fieldName],
        currentText:
          fieldName === "services"
            ? index !== undefined
              ? currentState.templateAttributes[fieldName][index].text
              : ""
            : currentState.templateAttributes[fieldName].text,
        fieldName: fieldName,
        areaPosition: areaPosition,
        container: "canvas",
        stageScale: stageRef.current.scaleX(),
        index: index,
        // onChange: onChange,
        onEnter: onEnter,
        onEscape: removeTextarea,
        onClick: onClickTextArea,
      });
    }
  };

  const onClickBold = () => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField.fieldName);
    if (textarea) {
      if (textarea.style.fontWeight === FONT_STYLE.BOLD) {
        textarea.style.fontWeight = FONT_STYLE.NORMAL;
        // setText((prev) => ({
        //   ...prev,
        //   templateAttributes: {
        //     ...prev.templateAttributes,
        //     [selectedField]: {
        //       ...prev.templateAttributes[selectedField],
        //       fontStyle: textarea.style.fontStyle,
        //     },
        //   },
        // }));
        onStateChange(selectedField.fieldName, {
          fontStyle: textarea.style.fontStyle as TFontStyle,
        });
      } else {
        textarea.style.fontWeight = FONT_STYLE.BOLD;
        // setText((prev) => ({
        //   ...prev,
        //   templateAttributes: {
        //     ...prev.templateAttributes,
        //     [selectedField]: {
        //       ...prev.templateAttributes[selectedField],
        //       fontStyle:
        //         textarea.style.fontStyle === FONT_STYLE.ITALIC
        //           ? `${textarea.style.fontWeight} ${textarea.style.fontStyle}`
        //           : textarea.style.fontWeight,
        //     },
        //   },
        // }));

        onStateChange(selectedField.fieldName, {
          fontStyle:
            textarea.style.fontStyle === FONT_STYLE.ITALIC
              ? (`${textarea.style.fontWeight} ${textarea.style.fontStyle}` as TFontStyle)
              : (textarea.style.fontWeight as TFontStyle),
        });
      }
      textarea.focus();
    }
  };

  const onClickItalic = () => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField.fieldName);
    if (textarea) {
      if (
        textarea.style.fontStyle === FONT_STYLE.NORMAL ||
        textarea.style.fontStyle === ""
      ) {
        textarea.style.fontStyle = FONT_STYLE.ITALIC;
        // setText((prev) => ({
        //   ...prev,
        //   templateAttributes: {
        //     ...prev.templateAttributes,
        //     [selectedField]: {
        //       ...prev.templateAttributes[selectedField],
        //       fontStyle:
        //         textarea.style.fontWeight === FONT_STYLE.BOLD
        //           ? `${textarea.style.fontWeight} ${textarea.style.fontStyle}`
        //           : textarea.style.fontStyle,
        //     },
        //   },
        // }));

        onStateChange(
          selectedField.fieldName,
          {
            fontStyle:
              textarea.style.fontWeight === FONT_STYLE.BOLD
                ? (`${textarea.style.fontWeight} ${textarea.style.fontStyle}` as TFontStyle)
                : (textarea.style.fontStyle as TFontStyle),
          },
          selectedField.index
        );
      } else {
        textarea.style.fontStyle = FONT_STYLE.NORMAL;
        // setText((prev) => ({
        //   ...prev,
        //   templateAttributes: {
        //     ...prev.templateAttributes,
        //     [selectedField]: {
        //       ...prev.templateAttributes[selectedField],
        //       fontStyle: textarea.style.fontWeight,
        //     },
        //   },
        // }));
        onStateChange(
          selectedField.fieldName,
          {
            fontStyle: textarea.style.fontWeight as TFontStyle,
          },
          selectedField.index
        );
      }
      textarea.focus();
    }
  };

  const onChangeTextSize = (fontSize: number) => {
    if (!selectedField) return;
    const textarea = document.getElementById(selectedField.fieldName);
    if (textarea) {
      textarea.style.fontSize = `${fontSize}px`;
      textarea.focus();
      // setText((prev) => ({
      //   ...prev,
      //   templateAttributes: {
      //     ...prev.templateAttributes,
      //     [selectedField]: {
      //       ...prev.templateAttributes[selectedField],
      //       fontSize: fontSize,
      //     },
      //   },
      // }));

      onStateChange(selectedField.fieldName, {
        fontSize: fontSize,
      });
    }
  };

  const onClickUnderline = () => {
    if (!selectedField) return;

    const textarea = document.getElementById(selectedField.fieldName);
    if (textarea) {
      if (textarea.style.textDecoration !== "underline") {
        textarea.style.textDecoration = "underline";
      } else {
        textarea.style.textDecoration = "none";
      }
      textarea.focus();
      // setText((prev) => ({
      //   ...prev,
      //   templateAttributes: {
      //     ...prev.templateAttributes,
      //     [selectedField]: {
      //       ...prev.templateAttributes[selectedField],
      //       textDecoration: textarea.style.textDecoration,
      //     },
      //   },
      // }));
      onStateChange(selectedField.fieldName, {
        textDecoration: textarea.style.textDecoration as TTextDecoration,
      });
    }
  };

  // const onZoom = (event: "in" | "out") => {
  //   const editor = document.getElementById("editor");
  //   if (editor) {
  //     if (event === "in" && currentZoom < 30) {
  //       setZoom(currentZoom + 2, editor);
  //       setCurrentZoom((prev) => prev + 2);
  //     } else if (event === "out" && currentZoom > 0) {
  //       setZoom(currentZoom - 2, editor);
  //       setCurrentZoom((prev) => prev - 2);
  //     }

  //     editor.offsetHeight;
  //   }
  // };

  const zoom = (event: "in" | "out") => {
    if (stageRef.current) {
      const scale = stageRef.current.scale();

      if (selectedField?.fieldName) {
        removeAllActiveTextAreas();
      }

      if (scale && scale.x && scale.y) {
        if (event === "in" && currentZoom < 2) {
          stageRef.current.setAttr(
            "width",
            (actualSize.width || stageRef.current.width()) * 0.1 +
              stageRef.current.width()
          );
          stageRef.current.setAttr(
            "height",
            (actualSize.height || stageRef.current.height()) * 0.1 +
              stageRef.current.height()
          );
          stageRef.current.setAttr("scale", {
            x: scale.x + 0.1,
            y: scale.y + 0.1,
          });
          setCurrentZoom((prev) => prev + 0.1);
          // Object.keys(currentState.templateAttributes).forEach((key) => {
          //   const textarea = document.getElementById(key);
          //   const textPosition =
          //     key === "services"
          //       ? textReff?.current.services[
          //           selectedField?.index ?? 0
          //         ]?.absolutePosition()
          //       : (
          //           textReff?.current[key as keyof IRef] as Text
          //         )?.absolutePosition();

          //   if (textarea && textPosition) {
          //     textarea.style.top = textPosition.y + "px";
          //     textarea.style.left = textPosition.x + "px";
          //     textarea.style.scale = `${Number(textarea.style.scale) + 0.1}`;
          //   }
          // });
        } else if (event === "out" && currentZoom >= 0.1) {
          stageRef.current.setAttr(
            "width",
            stageRef.current.width() - actualSize.width * 0.1
          );
          stageRef.current.setAttr(
            "height",
            stageRef.current.height() - actualSize.height * 0.1
          );
          stageRef.current.setAttr("scale", {
            x: scale.x - 0.1,
            y: scale.y - 0.1,
          });
          setCurrentZoom((prev) => prev - 0.1);
          // Object.keys(currentState.templateAttributes).forEach((key) => {
          //   const textarea = document.getElementById(key);
          //   const textPosition =
          //     textReff?.current[key as keyof IRef]?.absolutePosition();
          //   if (textarea && textPosition) {
          //     textarea.style.top = textPosition.y + "px";
          //     textarea.style.left = textPosition.x + "px";
          //     textarea.style.scale = `${Number(textarea.style.scale) - 0.1}`;
          //   }
          // });
        }
      }
    }
  };

  const onCheckout = async () => {
    try {
      const response = await createVarient({
        ...templateData,
        templateAttributes: { ...currentState.templateAttributes },
      }).unwrap();
      if (window.opener) {
        window.opener.postMessage(
          {
            action: "fetch_and_add_to_cart",
            variantId: templateData.variantId,
            productId: response.content.productId,
            SKU: templateData.sku,
            sessionId: response.content.sessionId,
            processedImageUrl: response.content.processedImageUrl,
            fileName: response.content.fileName,
            processedImageSvgUrl: response.content.processedImageSvgUrl,
          },
          "https://myprintsource.com"
        );
        dispatch(resetSelectedCard());
        dispatch(resetSelectedColorVariation());
        dispatch(resetTemplatesData());
        dispatch(resetSelectedTemplateData());
        dispatch(clearUserCardInfo());
        setTimeout(() => window.close(), 200);
      } else {
        console.log("Unable to communicate with the parent window.");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onGoBack = () => {
    dispatch(
      setSelectedTemplateData({
        ...templateData,
        templateAttributes: { ...currentState.templateAttributes },
      })
    );
    // allTemplatesData.forEach((template) => {
    //   dispatch(
    //     setTemplateData({
    //       ...template,
    //       templateAttributes: { ...template.templateAttributes },
    //     })
    //   );
    // });
    onClickBack?.();
  };

  return (
    <div className="flex w-full h-full flex-col items-center ">
      {!isPreviewEnabled && (
        <div className="flex w-full items-center justify-center h-24 border-b border-b-lightOutline">
          <div className="container flex items-center justify-between">
            <div className="">
              <img src={logo} alt="logo" className="w-28 h-14" />
            </div>
            <div className="flex gap-x-4">
              <Button
                label="Go Back"
                varient="outlined"
                attributes={{ onClick: onGoBack }}
              />
              <Button
                label="Approve and Continue"
                varient="primary"
                attributes={{ onClick: onCheckout }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="h-5/6 container ">
        {!isPreviewEnabled && (
          <CustomToolbar
            onClickBold={onClickBold}
            onClickItalic={onClickItalic}
            onRedo={onRedo}
            onUndo={onUndo}
            currentStep={currentStep}
            stateHistoryLength={stateHistoryLength}
            onClickUnderline={onClickUnderline}
            onChangeTextSize={onChangeTextSize}
            setIsPreviewEnabled={setIsPreviewEnabled}
            selectedStyles={
              selectedField &&
              (selectedField.fieldName === "services"
                ? currentState.templateAttributes[selectedField.fieldName][
                    selectedField.index ?? 0
                  ]
                : currentState.templateAttributes[selectedField.fieldName])
            }
          />
        )}

        <div className="relative w-full h-full">
          {isPreviewEnabled && (
            <div className="absolute top-6 right-4 z-50">
              <Button
                label="Exit"
                varient="primary"
                attributes={{
                  className: "!bg-opacity-20 !text-primary !py-2 !px-5",
                  onClick: () => {
                    setIsPreviewEnabled(false);
                  },
                }}
              />
            </div>
          )}
          <div className="absolute bottom-8 right-4 z-50">
            <div className="flex justify-between items-center gap-5 px-6 py-2 rounded-md bg-white">
              <span
                onClick={() => {
                  zoom("out");
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
                {Math.round((currentZoom / 2) * 100)} %
              </span>
              <span
                onClick={() => {
                  zoom("in");
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
          <div className="flex w-full h-full justify-center items-center bg-[#F2F2F2] overflow-auto">
            <div id="template" className="relative w-fit max-h-full">
              <Suspense>
                <SelectedTemplate
                  textRef={textReff}
                  stageRef={stageRef}
                  text={currentState}
                  dblClickHandler={dblClickHandler}
                  // {...testCardData}
                  editable={!isPreviewEnabled}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
