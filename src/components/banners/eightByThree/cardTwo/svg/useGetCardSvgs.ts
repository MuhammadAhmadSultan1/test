import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const primarySvg = `<svg width="611" height="213" viewBox="0 0 611 213" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 0L611 213H0V0Z" fill="${primary || "#065172"}"/>
  </svg>
  
  `;

  const secondarySvg = `<svg width="243" height="202" viewBox="0 0 243 202" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-183 -9.76754L-21.2865 201.907L243 -3.29183e-05L-183 -9.76754Z" fill="${
    secondary || "#056A95"
  }"/>
  </svg>  
  `;

  return {
    primarySvg,
    secondarySvg,
  };
};
