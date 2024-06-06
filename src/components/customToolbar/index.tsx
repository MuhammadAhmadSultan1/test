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
interface ICustomToolbarProps {
  //   fieldName: TFieldName;
  onChangeTextSize: (fontSize: number) => void;
  onClickBold: () => void;
  onClickItalic: () => void;
  onClickUnderline: () => void;
  selectedStyles: IAttribute | undefined;
}

const selectedStyleClasses: string = " !bg-sky-100";

export const CustomToolbar = ({
  onChangeTextSize,
  onClickBold,
  onClickItalic,
  onClickUnderline,
  selectedStyles,
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
    <div className="flex justify-center items-center border border-solid border-[#808080] w-full p-2">
      <select
        value={selectedStyles?.fontSize}
        disabled={!selectedStyles}
        onChange={(event) => {
          onChangeTextSize(Number(event.target.value));
        }}
        style={{ outline: "none", borderRadius: "5px" }}
        className="w-20 h-6 text-sm text-black border border-solid border-[#707070] mr-5"
      >
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
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
  );
};
