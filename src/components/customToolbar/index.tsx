import { FONT_STYLE, ITextProperties } from "../../types/common";

import bold from "../../assets/bold.png";
import italic from "../../assets/italic.png";
import colorPicker from "../../assets/colorPicker.png";
import { useRef } from "react";


interface ICustomToolbarProps {
    onChangeTextSize: (event: any) => void,
    onClickBold: () => void,
    onClickItalic: () => void,
    onChangeTextColor: (event: any) => void,
    selectedStyles: ITextProperties | undefined
}

const selectedStyleClasses: string = ' !bg-sky-100';

export const CustomToolbar = ({ onChangeTextSize, onClickBold, onClickItalic, onChangeTextColor, selectedStyles }: ICustomToolbarProps) => {
    const colorInputRef = useRef<HTMLInputElement>(null);

    const isFontBold: boolean = selectedStyles?.fontStyle === FONT_STYLE.BOLD || selectedStyles?.fontStyle === FONT_STYLE.BOLD_ITALIC;
    const isFontItalic: boolean = selectedStyles?.fontStyle === FONT_STYLE.ITALIC || selectedStyles?.fontStyle === FONT_STYLE.BOLD_ITALIC;

    const handleColorIconClick = () => {
        if (colorInputRef.current) {
            colorInputRef.current.click();
        }
    };

    console.log({ selectedStyles });


    return (
        <div className="flex justify-center items-center border border-solid border-[#808080] w-full p-2">
            <select
                value={selectedStyles?.fontSize}
                onChange={onChangeTextSize}
                style={{ outline: 'none', borderRadius: '5px' }}
                className="w-20 h-6 text-sm text-black border border-solid border-[#707070] mr-5">

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

            <button onClick={onClickBold} style={{ outline: 'none' }} className={`w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm ${isFontBold ? selectedStyleClasses : ''}`}>
                <img
                    className="object-contain"
                    src={bold}
                    style={{ width: '20px', height: '20px', marginTop: 0, }}
                />
            </button>

            <button onClick={onClickItalic} style={{ outline: 'none' }} className={`w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm ${isFontItalic ? selectedStyleClasses : ''}`}>
                <img
                    className="object-contain"
                    src={italic}
                    style={{ width: '20px', height: '20px', marginTop: 0, }}
                />
            </button>

            {/* <input type="color" id="favcolor" name="favcolor" value={selectedStyles?.fill} onChange={onChangeTextColor} /> */}
            <div className="relative">
                <input
                    type="color"
                    id="favcolor"
                    name="favcolor"
                    value={selectedStyles?.fill}
                    onChange={onChangeTextColor}
                    ref={colorInputRef}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <button
                    type="button"
                    onClick={handleColorIconClick}
                    className="w-6 h-6 bg-transparent text-base leading-4 text-black p-0 ring-0 mr-5 rounded-sm flex items-center justify-center"
                >
                    <img
                        className="object-contain"
                        src={colorPicker}
                        style={{ width: '20px', height: '20px', marginTop: 0, }}
                    />
                </button>
            </div>
        </div>
    );
}