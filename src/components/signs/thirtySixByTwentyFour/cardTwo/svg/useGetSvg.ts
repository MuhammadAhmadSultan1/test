import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const houseSvg = `<svg width="3425" height="2278" viewBox="0 0 3425 2278" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1712.25 0L0 954.764L1.09165 2277.17H3424.5V953.658L2899.97 652.91V86.7967H2440.93V406.341L1712.25 0Z" fill="${primary}"/>
  </svg>  
  `;

  return { houseSvg };
};
