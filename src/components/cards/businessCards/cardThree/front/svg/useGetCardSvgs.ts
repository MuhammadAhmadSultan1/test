import { IColorVariation } from "../../../../../../types/common";

export const useGetCardSvgs = ({ primary }: IColorVariation) => {
  const tileSvg = `<svg width="2" height="47" viewBox="0 0 2 47" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="2" width="47" height="2" transform="rotate(90 2 0)" fill="${
    primary || "#0A3047"
  }"/>
  </svg>
  
    `;

  return { tileSvg };
};
