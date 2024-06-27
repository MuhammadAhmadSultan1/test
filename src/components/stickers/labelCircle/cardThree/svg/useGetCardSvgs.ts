import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary } = props;

  const outerSquareSvg = `<svg width="480" height="192" viewBox="0 0 480 192" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="5" y="5" width="470" height="182" rx="5" fill="white" stroke="${
    primary || "#590595"
  }" stroke-width="10"/>
  </svg>
  `;

  const innerSquareSvg = `<svg width="426" height="141" viewBox="0 0 426 141" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.5" y="1.5" width="423" height="138" stroke="${
    primary || "#590595"
  }" stroke-width="3"/>
  </svg>
  `;

  return { outerSquareSvg, innerSquareSvg };
};
