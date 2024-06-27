import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const secondaryLarge = `<svg width="461" height="384" viewBox="0 0 461 384" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="168.705" y="-123.268" width="593.684" height="198.591" transform="rotate(58.1219 168.705 -123.268)" fill="${
    secondary || "#BBBBBB"
  }"/>
  </svg>
  `;

  const secondarySmall = `<svg width="197" height="124" viewBox="0 0 197 124" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="168.638" width="53.6049" height="198.591" transform="rotate(58.1219 168.638 0)" fill="${
    secondary || "#BBBBBB"
  }"/>
  </svg>
  `;

  const primaryTop = `<svg width="88" height="60" viewBox="0 0 88 60" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M47.2124 59.9609L0.33327 -12.9747L87.2425 -16.9471L47.2124 59.9609Z" fill="${
    primary || "#590595"
  }"/>
  </svg>
  `;

  const primaryBottom = `<svg width="190" height="104" viewBox="0 0 190 104" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M95 1.66103e-05L190 109L-1.90582e-05 109L95 1.66103e-05Z" fill="${
    primary || "#590595"
  }"/>
  </svg>
  `;

  const primaryCenter = `<svg width="29" height="50" viewBox="0 0 29 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29 25L-2.18557e-06 50L0 -1.26763e-06L29 25Z" fill="${
    primary || "#590595"
  }"/>
  </svg>
  `;

  const darkRight = `<svg width="124" height="267" viewBox="0 0 124 267" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.165039" y="153.644" width="204.549" height="170.645" transform="rotate(-48.3799 0.165039 153.644)" fill="#23252A"/>
  </svg>
  `;

  return {
    secondaryLarge,
    secondarySmall,
    primaryTop,
    primaryBottom,
    primaryCenter,
    darkRight,
  };
};
