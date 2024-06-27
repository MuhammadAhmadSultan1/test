import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary } = props;

  const squareSvg = `<svg width="456" height="164" viewBox="0 0 456 164" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2.5" y="2.5" width="451" height="159" stroke="${
    primary || "#590595"
  }" stroke-width="5"/>
  </svg>
  `;

  return { squareSvg };
};
