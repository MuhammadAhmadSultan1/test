import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const primaryRight = `<svg width="463" height="384" viewBox="0 0 463 384" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M256.5 0H463V384H0.5L256.5 0Z" fill="${primary || "#21272F"}"/>
  </svg>
  `;
  const secondaryRight = `<svg width="403" height="139" viewBox="0 0 403 139" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="17.6947" y="237.897" width="265" height="265" transform="rotate(-56.1966 17.6947 237.897)" stroke="${
    secondary || "#CDFF05"
  }" stroke-width="25"/>
  </svg>
  `;

  const primaryLeft = `<svg width="107" height="62" viewBox="0 0 107 62" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M23.2778 -75L106.5 -54L55.5 61.5L-52 58L23.2778 -75Z" fill="${
    primary || "#21272F"
  }"/>
  </svg>
  `;

  const secondaryLeft = `<svg width="202" height="93" viewBox="0 0 202 93" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="-183.69" y="-72.6115" width="265" height="265" transform="rotate(-56.1484 -183.69 -72.6115)" stroke="${
    secondary || "#CDFF05"
  }" stroke-width="25"/>
  </svg>
  `;

  return {
    primaryRight,
    secondaryRight,
    primaryLeft,
    secondaryLeft,
  };
};
