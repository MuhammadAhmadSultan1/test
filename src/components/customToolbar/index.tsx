import {
  FONT_STYLE,
  //   ITextProperties,
  TEXT_DECORATION,
  //   TFieldName,
} from "../../types/common";

import bold from "../../assets/bold.png";
import italic from "../../assets/italic.png";
import underLine from "../../assets/underLine.png";
import { IAttribute } from "../../types/card";
import { Button } from "../button";
interface ICustomToolbarProps {
  //   fieldName: TFieldName;
  onChangeTextSize: (fontSize: number) => void;
  onClickBold: () => void;
  onClickItalic: () => void;
  onClickUnderline: () => void;
  onUndo: () => void;
  onRedo: () => void;
  currentStep: number;
  stateHistoryLength: number;
  selectedStyles: IAttribute | undefined;
  setIsPreviewEnabled: React.Dispatch<React.SetStateAction<boolean>>;
}

const selectedStyleClasses: string = " !bg-sky-100";

export const CustomToolbar = ({
  onChangeTextSize,
  onClickBold,
  onClickItalic,
  onClickUnderline,
  setIsPreviewEnabled,
  onRedo,
  onUndo,
  selectedStyles,
  currentStep,
  stateHistoryLength,
}: ICustomToolbarProps) => {
  const isFontBold: boolean =
    selectedStyles?.fontStyle === FONT_STYLE.BOLD ||
    selectedStyles?.fontStyle === FONT_STYLE.BOLD_ITALIC;
  const isFontItalic: boolean =
    selectedStyles?.fontStyle === FONT_STYLE.ITALIC ||
    selectedStyles?.fontStyle === FONT_STYLE.BOLD_ITALIC;
  const isFontUnderline: boolean =
    selectedStyles?.textDecoration === TEXT_DECORATION.UNDERLINE;

  return (
    <div className="flex justify-between items-center border border-solid border-lightOutline w-full p-2">
      <div className="flex w-full items-center justify-center gap-8">
        <div className="flex items-center gap-6">
          <span className="p-1 cursor-pointer" onClick={onUndo}>
            <svg
              width="19"
              height="8"
              viewBox="0 0 19 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                currentStep === 0 ? "fill-lightOutline" : "fill-black"
              }`}
            >
              <path d="M7.4 1.4C5.7 1.7 4.2 2.3 2.8 3.4L0 0.5V7.5H7L4.3 4.8C8 2.2 13.1 3 15.8 6.7C16 7 16.2 7.2 16.3 7.5L18.1 6.6C15.9 2.8 11.7 0.7 7.4 1.4Z" />
            </svg>
          </span>
          <span className="p-1 cursor-pointer" onClick={onRedo}>
            <svg
              width="18"
              height="8"
              viewBox="0 0 18 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                currentStep === stateHistoryLength - 1
                  ? "fill-lightOutline"
                  : "fill-black"
              }`}
            >
              <path d="M10.6 1.4C12.3 1.7 13.8 2.3 15.2 3.4L18 0.5V7.5H11L13.7 4.8C10 2.1 4.9 3 2.3 6.7C2.1 7 1.9 7.2 1.8 7.5L0 6.6C2.1 2.8 6.3 0.7 10.6 1.4Z" />
            </svg>
          </span>
        </div>
        <div className="flex items-center">
          <select
            value={selectedStyles?.fontSize}
            disabled={!selectedStyles}
            onChange={(event) => {
              onChangeTextSize(Number(event.target.value));
            }}
            style={{ outline: "none", borderRadius: "5px" }}
            className="w-20 h-6 text-sm text-black border border-solid border-[#707070] mr-5 cursor-pointer"
          >
            {Array.from({ length: 61 }, (_, k) => k)
              .filter((i) => i >= 6)
              .map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
          </select>

          <button
            onClick={onClickBold}
            disabled={!selectedStyles}
            style={{ outline: "none" }}
            className={`w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm ${
              isFontBold && selectedStyles ? selectedStyleClasses : ""
            }`}
          >
            <img
              className="object-contain"
              src={bold}
              style={{ width: "20px", height: "20px", marginTop: 0 }}
            />
          </button>

          <button
            onClick={onClickItalic}
            disabled={!selectedStyles}
            style={{ outline: "none" }}
            className={`w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm ${
              isFontItalic && selectedStyles ? selectedStyleClasses : ""
            }`}
          >
            <img
              className="object-contain"
              src={italic}
              style={{ width: "20px", height: "20px", marginTop: 0 }}
            />
          </button>

          <button
            onClick={onClickUnderline}
            disabled={!selectedStyles}
            style={{ outline: "none" }}
            className={`w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm ${
              isFontUnderline && selectedStyles ? selectedStyleClasses : ""
            }`}
          >
            <img
              className="object-contain"
              src={underLine}
              style={{ width: "20px", height: "20px", marginTop: 0 }}
            />
          </button>
        </div>
      </div>
      <Button
        label="Preview"
        varient="primary"
        attributes={{
          className: "!bg-opacity-20 !text-primary !py-2 !px-5",
          onClick: () => {
            setIsPreviewEnabled(true);
          },
        }}
      />
    </div>
  );
};
