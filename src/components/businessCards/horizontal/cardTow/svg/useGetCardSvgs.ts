import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;
  const headerSvg = `<svg width="336" height="4" viewBox="0 0 336 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="336" height="4" fill="${primary || "#590595"}"/>
    </svg>
    `;
  const footerSvg = `<svg width="336" height="4" viewBox="0 0 336 4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="336" height="4" fill="${secondary || "#2B2B2B"}"/>
    </svg>
    `;

  const centerSvg = `<svg width="1" height="105" viewBox="0 0 1 105" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1" width="105" height="0.999995" transform="rotate(90 1 0)" fill="${
    primary || "#590595"
  }"/>
  </svg>
  
    `;

  return { headerSvg, footerSvg, centerSvg };
};
