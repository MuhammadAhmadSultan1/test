import { useState, useRef } from "react";
import * as Konva from "react-konva";
import { Stage } from "konva/lib/Stage";

import CustomImage from "../../../customImage";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import { IRef, TFieldName, TTextField } from "../../../../types/common";
import { onTextDblClick } from "../../../../utils/changeTextHandler";

import LOGO from "../../../../assets/logo.png";

export const FrontOne = () => {
  const [text, setText] = useState<TTextField>({
    name: {
      text: "My Print Source",
      fontSize: 16,
    },
    designation: {
      text: "Project Manager",
      fontSize: 10,
    },
    email: {
      text: "test@gmail.com",
      fontSize: 8,
    },
    phone: {
      text: "+92 123 456 7890",
      fontSize: 8,
    },
    website: {
      text: "www.website.com",
      fontSize: 8,
    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      fontSize: 8,
    },
  });

  const colorScheme = {
    primary: "#004CE0",
    secondary: "#323232",
    text: "#FFFFFF",
  };

  const { svg1, svg2, phoneSvg, websiteSvg, emailSvg, addressSvg } =
    useGetCardSvgs(colorScheme);

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
        currentText: text[fieldName].text,
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
            <Konva.Group y={67}>
              <CustomImage x={0} y={0} svgString={svg1} />
              <Konva.Text
                ref={(ref) => (textReff.current.name = ref)}
                text={text.name.text}
                x={15}
                y={7}
                align="top"
                fontSize={text.name.fontSize}
                fill={colorScheme.text}
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
                fill={colorScheme.text}
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
                    fill={colorScheme.text}
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
                    fill={colorScheme.text}
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
                    fill={colorScheme.text}
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
                    fill={colorScheme.text}
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
