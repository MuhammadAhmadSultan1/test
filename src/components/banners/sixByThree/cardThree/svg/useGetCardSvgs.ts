import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const leftSvg = `<svg width="259" height="110" viewBox="0 0 259 110" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0L259 110H0V0Z" fill="${primary || "#016016"}"/>
  </svg>
  `;
  const rightSvg = `<svg width="518" height="186" viewBox="0 0 518 186" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 164.67L518 0V186H85.6535L0 164.67Z" fill="${
    secondary || "#1EC041"
  }"/>
  </svg>
  `;

  // fill="${primary || "#1EC041"}"

  return { leftSvg, rightSvg };
};
