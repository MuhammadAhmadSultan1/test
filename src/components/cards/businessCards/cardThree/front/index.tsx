import { useRef, useState } from "react";

import * as Konva from "react-konva";
import { Stage } from "konva/lib/Stage";

import { useGetCardSvgs } from "./svg/useGetCardSvgs";

import CustomImage from "../../../../customImage";

import { ICanvasCardProps } from "../../../../../types/card";

import { onTextDblClick } from "../../../../../utils/changeTextHandler";

// import LOGO from "../../../../../assets/logo.png";
import { IRef, TFieldName } from "../../../../../types/common";

export default function CardThree(props: ICanvasCardProps) {
  const { editable, primary } = props;
  const [text, setText] = useState<ICanvasCardProps>(props);

  // const colorScheme = {
  //   primary: "#004CE0",
  //   secondary: "#323232",
  //   text: "#FFFFFF",
  // };

  const { tileSvg } = useGetCardSvgs({ primary });

  const textReff = useRef<IRef>({
    name: null,
    designation: null,
    email: null,
    address: null,
    phone: null,
    website: null,
  });
  const stageRef = useRef<Stage>(null);

  //   const onChange = (value: string, fieldName: TFieldName) => {
  //     setText((prev) => ({
  //       ...prev,
  //       [fieldName]: { ...prev[fieldName], text: value },
  //     }));
  //   };

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
      setText((prev) => ({
        ...prev,
        [fieldName]: { ...prev[fieldName], text: value },
      }));
    }
    removeTextarea(textarea, fieldName);
  };

  const dblClickHandler = (fieldName: TFieldName) => {
    const textPosition = textReff.current[fieldName]?.absolutePosition();
    if (stageRef.current && textPosition) {
      const areaPosition = {
        x: stageRef.current.container().offsetLeft + textPosition.x,
        y: stageRef.current.container().offsetTop + textPosition.y,
      };
      onTextDblClick({
        textRef: textReff,
        currentText: text[fieldName].text,
        fieldName: fieldName,
        areaPosition: areaPosition,
        container: "canvas",
        // onChange: onChange,
        onEnter: onEnter,
        onEscape: removeTextarea,
      });
    }
  };

  return (
    <Konva.Stage
      ref={stageRef}
      width={336}
      height={192}
      style={{ backgroundColor: "#ffffff" }}
      id="canvas"
    >
      <Konva.Layer imageSmoothingEnabled>
        <CustomImage x={310} y={75} svgString={tileSvg} />
        <Konva.Group x={15} y={20}>
          <Konva.Text
            ref={(ref) => (textReff.current.name = ref)}
            text={text.name.text}
            x={15}
            y={7}
            align="top"
            fontSize={text.name.fontSize}
            fill={"#000000"}
            width={122}
            height={19}
            onDblClick={() => {
              if (textReff.current && textReff.current.name && editable) {
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
            fill={"#000000"}
            width={78}
            height={12}
            // fontStyle={designation.fontStyle}
            // onClick={() => onClickTextItem("designation")}
            onDblClick={() => {
              if (
                textReff.current &&
                textReff.current.designation &&
                editable
              ) {
                textReff.current.designation.hide();
                dblClickHandler("designation");
              }
            }}
          />
          <Konva.Group y={80}>
            <Konva.Text
              ref={(ref) => (textReff.current.phone = ref)}
              text={text.phone.text}
              x={15}
              y={7}
              align="top"
              fontSize={text.phone.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              onDblClick={() => {
                if (textReff.current && textReff.current.phone && editable) {
                  textReff.current.phone.hide();
                  dblClickHandler("phone");
                }
              }}
            />
            <Konva.Text
              ref={(ref) => (textReff.current.website = ref)}
              text={text.website.text}
              x={15}
              y={20}
              align="top"
              fontSize={text.website.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              // fontStyle={.website.fontStyle}
              // onClick={() => onClickTextItem(".website")}
              onDblClick={() => {
                if (textReff.current && textReff.current.website && editable) {
                  textReff.current.website.hide();
                  dblClickHandler("website");
                }
              }}
            />
            <Konva.Text
              ref={(ref) => (textReff.current.email = ref)}
              text={text.email.text}
              x={15}
              y={33}
              align="top"
              fontSize={text.email.fontSize}
              fill={"#000000"}
              width={70}
              height={10}
              onDblClick={() => {
                if (textReff.current && textReff.current.email && editable) {
                  textReff.current.email.hide();
                  dblClickHandler("email");
                }
              }}
            />
            <Konva.Text
              ref={(ref) => (textReff.current.address = ref)}
              text={text.address.text}
              x={15}
              y={46}
              width={98}
              height={20}
              align="top"
              fontSize={text.address.fontSize}
              fill={"#000000"}
              onDblClick={() => {
                if (textReff.current && textReff.current.address && editable) {
                  textReff.current.address.hide();
                  dblClickHandler("address");
                }
              }}
            />
          </Konva.Group>
        </Konva.Group>
      </Konva.Layer>
    </Konva.Stage>
  );
}
