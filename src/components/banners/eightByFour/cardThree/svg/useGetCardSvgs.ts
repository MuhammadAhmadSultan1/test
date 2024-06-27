import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const secondaryCircle = `<svg width="389" height="174" viewBox="0 0 389 174" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g style="mix-blend-mode:hard-light">
  <ellipse cx="229.5" cy="-49" rx="229.5" ry="223" fill="${
    secondary || "#1EAFCF"
  }"/>
  </g>
  </svg>
  `;

  const primaryCircle = `<svg width="277" height="346" viewBox="0 0 277 346" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g style="mix-blend-mode:hard-light">
  <circle cx="192" cy="192" r="192" fill="${primary || "#590595"}"/>
  </g>
  </svg>
  `;

  const violetRect = `<svg width="377" height="384" viewBox="0 0 377 384" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 384C100 262.4 81.6667 77.3333 60 0H377.5V384H0Z" fill="#7B98FF"/>
  </svg>
  `;

  const primaryTile = `<svg width="92" height="7" viewBox="0 0 92 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="92" height="7" fill="${primary || "#590595"}"/>
  </svg>
  `;

  return {
    secondaryCircle,
    primaryCircle,
    violetRect,
    primaryTile,
  };
};
