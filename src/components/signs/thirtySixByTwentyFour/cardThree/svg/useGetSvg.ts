import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const primarySvg = `<svg width="3456" height="2304" viewBox="0 0 3456 2304" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2611.76 0.183983H0V2304H2611.76C2691.69 2304 2767.25 2257.61 2816.6 2178.27L3456 1152L2816.6 125.729C2767.1 46.389 2691.69 0 2611.76 0V0.183983Z" fill="${primary}"/>
  </svg>  
  `;

  const arrowHeadSvg = `<svg width="739" height="1490" viewBox="0 0 739 1490" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0V1489.46L738.71 750.75L0 0Z" fill="#ECEFF1"/>
  </svg>
  `;

  return { primarySvg, arrowHeadSvg };
};
