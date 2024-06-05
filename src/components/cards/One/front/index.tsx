import { useEffect, useRef, useState } from "react";
import * as Konva from "react-konva";
import { Stage } from "konva/lib/Stage";

import CustomImage from "../../../customImage";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import { FONT_STYLE, IRef, ITextProperties, TEXT_DECORATION, TFieldName, TTextField } from "../../../../types/common";
import { onTextDblClick } from "../../../../utils/changeTextHandler";

import LOGO from "../../../../assets/logo.png";
import { CustomToolbar } from "../../../customToolbar";

const colorScheme = {
  primary: "#004CE0",
  secondary: "#323232",
  text: "#FFFFFF",
};

export const FrontOne = () => {
  const [text, setText] = useState<TTextField>({
    name: {
      text: "My Print Source",
      fontSize: 16,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,
    },
    designation: {
      text: "Project Manager",
      fontSize: 10,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,

    },
    email: {
      text: "test@gmail.com",
      fontSize: 8,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,

    },
    phone: {
      text: "+92 123 456 7890",
      fontSize: 8,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,

    },
    website: {
      text: "www.website.com",
      fontSize: 8,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,

    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      fontSize: 8,
      fontStyle: FONT_STYLE.NORMAL,
      fill: colorScheme.text,
      textDecoration: TEXT_DECORATION?.EMPTY,

    },
  });

  const [selectedTextKey, setSelectedTextKey] = useState<TFieldName>("name");
  const [selectedTextItem, setSelectedTextItem] = useState<
    ITextProperties | undefined
  >(undefined);

  const { svg1, svg2, phoneSvg, websiteSvg, emailSvg, addressSvg } =
    useGetCardSvgs(colorScheme);

  useEffect(() => {
    setSelectedTextItem(text[selectedTextKey]);
  }, [text]);

  const textReff = useRef<IRef>({
    name: null,
    designation: null,
    email: null,
    address: null,
    phone: null,
    website: null,
  });
  const stageRef = useRef<Stage>(null);

  const onChange = (value: string, fieldName: TFieldName) => {
    setText((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], text: value },
    }));
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
    setText((prev) => ({
      ...prev,
      [fieldName]: { ...prev[fieldName], text: value },
    }));
    removeTextarea(textarea, fieldName);
  };

  const dblClickHandler = (fieldName: TFieldName) => {
    const textPosition = textReff.current[fieldName]?.absolutePosition();
    const lineHeight = textReff.current[fieldName]?.lineHeight().toString();
    const fontFamily = textReff.current[fieldName]?.fontFamily();
    const fontSize = textReff.current[fieldName]?.fontSize();

    const fillColor = textReff.current[fieldName]?.getAttr("fill");
    if (
      stageRef.current &&
      textPosition &&
      lineHeight &&
      fontFamily &&
      fontSize &&
      fillColor
    ) {
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      onTextDblClick({
        currentText: text[fieldName].text,
        fieldName: fieldName,
        areaPosition: areaPosition,
        container: "test",
        lineHeight: lineHeight,
        fontFamily: fontFamily,
        fontSize: fontSize,
        fillColor: fillColor,
        onChange: onChange,
        onEnter: onEnter,
        onEscape: removeTextarea,
      });
    }
  };

  const onClickBold = () => {
    if (!selectedTextKey) return;
    const possibleConditionValue = {
      [FONT_STYLE.BOLD]: FONT_STYLE.NORMAL,
      [FONT_STYLE.NORMAL]: FONT_STYLE.BOLD,
      [FONT_STYLE.ITALIC]: FONT_STYLE.BOLD_ITALIC,
      [FONT_STYLE.BOLD_ITALIC]: FONT_STYLE.ITALIC,
    };
    const textItem: ITextProperties = text[selectedTextKey];
    // @ts-ignore
    textItem.fontStyle = possibleConditionValue[textItem?.fontStyle];

    setText({
      ...text,
      [selectedTextKey]: {
        ...textItem,
      },
    });
  };

  const onClickItalic = () => {
    if (!selectedTextKey) return;
    const possibleConditionValue = {
      [FONT_STYLE.ITALIC]: FONT_STYLE.NORMAL,
      [FONT_STYLE.NORMAL]: FONT_STYLE.ITALIC,
      [FONT_STYLE.BOLD]: FONT_STYLE.BOLD_ITALIC,
      [FONT_STYLE.BOLD_ITALIC]: FONT_STYLE.BOLD,
    };
    const textItem: ITextProperties = text[selectedTextKey];
    // @ts-ignore
    textItem.fontStyle = possibleConditionValue[textItem?.fontStyle];

    setText({
      ...text,
      [selectedTextKey]: {
        ...textItem,
      },
    });
  }

  const onClickUnderline = () => {
    if (!selectedTextKey) return;
    const possibleConditionValue = {
      [TEXT_DECORATION.UNDERLINE]: TEXT_DECORATION?.EMPTY,
      [TEXT_DECORATION?.EMPTY]: TEXT_DECORATION.UNDERLINE,

      // [FONT_STYLE.NORMAL]: FONT_STYLE.UNDERLINE,

      // [FONT_STYLE.BOLD]: FONT_STYLE.BOLD_UNDERLINE,
      // [FONT_STYLE.ITALIC]: FONT_STYLE.ITALIC_UNDERLINE,

      // [FONT_STYLE.BOLD_UNDERLINE]: FONT_STYLE.BOLD,
      // [FONT_STYLE.ITALIC_UNDERLINE]: FONT_STYLE.ITALIC,

      // [FONT_STYLE.BOLD_ITALIC_UNDERLINE]: FONT_STYLE.BOLD_ITALIC,
      // [FONT_STYLE.BOLD_ITALIC]: FONT_STYLE.BOLD_ITALIC_UNDERLINE,

    };
    const textItem: ITextProperties = text[selectedTextKey];
    // @ts-ignore
    textItem.textDecoration = possibleConditionValue[textItem?.textDecoration];
    setText({
      ...text,
      [selectedTextKey]: {
        ...textItem,
      }
    });
  }

  const onChangeTextSize = (event: any) => {
    const selectedFontSize: number = +event?.target?.value;
    if (!selectedTextKey) return;

    const textItem: ITextProperties = text[selectedTextKey];
    textItem.fontSize = selectedFontSize;

    setText({
      ...text,
      [selectedTextKey]: {
        ...textItem,
      },
    });
  };

  // const onChangeTextColor = (event: any) => {
  //   const selectedFontColor: string = event?.target?.value;
  //   if (!selectedTextKey) return;

  //   const textItem: ITextProperties = text[selectedTextKey];
  //   textItem.fill = selectedFontColor;

  //   setText({
  //     ...text,
  //     [selectedTextKey]: {
  //       ...textItem,
  //     }
  //   });
  // }
  const onClickTextItem = (textKey: TFieldName) => {
    setSelectedTextKey(textKey);
    setSelectedTextItem(text[textKey]);
  };

  return (
    <div id="test" className="flex flex-col w-full justify-center">
      <CustomToolbar
        onClickBold={onClickBold}
        onClickItalic={onClickItalic}
        onClickUnderline={onClickUnderline}
        onChangeTextSize={onChangeTextSize}

        // onChangeTextColor={onChangeTextColor}
        selectedStyles={selectedTextItem}
      />

      <div className="flex justify-center items-center min-w-96 min-h-96  bg-[#F2F2F2]">
        <Konva.Stage
          ref={stageRef}
          width={336}
          height={192}
          style={{ backgroundColor: "#ffff" }}
        >
          <Konva.Layer>
            <CustomImage height={49} width={89} x={225} y={30} url={LOGO} />
            <Konva.Group y={67}>
              <CustomImage x={0} y={0} svgString={svg1} />
              <Konva.Text
                ref={(ref) => (textReff.current.name = ref)}
                text={text.name.text}
                x={15}
                y={7}
                align="top"
                fontSize={text.name.fontSize}
                fill={text.name.fill}
                fontStyle={text.name.fontStyle}
                textDecoration={text.name.textDecoration}
                onClick={() => onClickTextItem('name')}
                onDblClick={() => {
                  if (textReff.current && textReff.current.name) {
                    textReff.current.name.hide();
                    dblClickHandler("name");
                  }
                }}
              />
              <Konva.Text
                ref={(ref) => (textReff.current.designation = ref)}
                text={text.designation.text}
                x={15}
                y={24}
                align="top"
                fontSize={text.designation.fontSize}
                fill={text.designation.fill}
                fontStyle={text.designation.fontStyle}
                textDecoration={text.designation.textDecoration}
                onClick={() => onClickTextItem('designation')}
                onDblClick={() => {
                  if (textReff.current && textReff.current.designation) {
                    textReff.current.designation.hide();
                    dblClickHandler("designation");
                  }
                }}
              />
            </Konva.Group>

            <Konva.Group y={106}>
              <CustomImage x={0} y={0} svgString={svg2} />
              <Konva.Group y={20}>
                <Konva.Group y={0} x={15}>
                  <CustomImage x={0} y={0} svgString={phoneSvg} />
                  <Konva.Text
                    ref={(ref) => (textReff.current.phone = ref)}
                    text={text.phone.text}
                    x={25}
                    y={6}
                    align="top"
                    fontSize={text.phone.fontSize}
                    fill={text.phone.fill}
                    fontStyle={text.phone.fontStyle}
                    
                    onDblClick={() => {
                      if (textReff.current && textReff.current.phone) {
                        textReff.current.phone.hide();
                        dblClickHandler("phone");
                      }
                    }}
                  />
                </Konva.Group>
                <Konva.Group y={0} x={120}>
                  <CustomImage x={0} y={0} svgString={websiteSvg} />
                  <Konva.Text
                    ref={(ref) => (textReff.current.website = ref)}
                    text={text.website.text}
                    x={25}
                    y={6}
                    align="top"
                    fontSize={text.website.fontSize}
                    fill={text.website.fill}
                    fontStyle={text.website.fontStyle}
                    onDblClick={() => {
                      if (textReff.current && textReff.current.website) {
                        textReff.current.website.hide();
                        dblClickHandler("website");
                      }
                    }}
                  />
                </Konva.Group>
                <Konva.Group y={30} x={15}>
                  <CustomImage x={0} y={0} svgString={emailSvg} />
                  <Konva.Text
                    ref={(ref) => (textReff.current.email = ref)}
                    text={text.email.text}
                    x={25}
                    y={6}
                    align="top"
                    fontSize={text.email.fontSize}
                    fill={text.email.fill}
                    fontStyle={text.email.fontStyle}
                    onDblClick={() => {
                      if (textReff.current && textReff.current.email) {
                        textReff.current.email.hide();
                        dblClickHandler("email");
                      }
                    }}
                  />
                </Konva.Group>
                <Konva.Group y={30} x={120}>
                  <CustomImage x={0} y={0} svgString={addressSvg} />
                  <Konva.Text
                    ref={(ref) => (textReff.current.address = ref)}
                    text={text.address.text}
                    width={98}
                    lineHeight={1.2}
                    x={25}
                    y={5}
                    align="top"
                    fontSize={text.address.fontSize}
                    fill={text.address.fill}
                    fontStyle={text.address.fontStyle}
                    onDblClick={() => {
                      if (textReff.current && textReff.current.address) {
                        textReff.current.address.hide();
                        dblClickHandler("address");
                      }
                    }}
                  />
                </Konva.Group>
              </Konva.Group>
            </Konva.Group>
          </Konva.Layer>
        </Konva.Stage>
      </div>
    </div>
  );
};
