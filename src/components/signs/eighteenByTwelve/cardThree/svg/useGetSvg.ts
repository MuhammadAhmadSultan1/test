import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const signSvg = `<svg width="1715" height="1152" viewBox="0 0 1715 1152" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 48C0 21.4904 21.4903 0 48 0L1246.53 0C1261.24 0 1275.13 6.74162 1284.23 18.293L1704.37 551.508C1718.2 569.064 1718.09 593.845 1704.09 611.271L1284.23 1134.06C1275.12 1145.4 1261.36 1152 1246.81 1152L48 1152C21.4903 1152 0 1130.51 0 1104L0 48Z" fill="${primary}"/>
  </svg>
  `;

  const innerWhiteSvg = `<svg width="1619" height="1075" viewBox="0 0 1619 1075" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M2.5 41.3889C2.5 19.9112 19.9112 2.5 41.3889 2.5L1177.86 2.5C1189.7 2.5 1200.9 7.89674 1208.28 17.1606L1607.31 518.157C1618.69 532.441 1618.59 552.718 1607.08 566.896L1208.29 1058.12C1200.9 1067.22 1189.81 1072.5 1178.1 1072.5L41.389 1072.5C19.9112 1072.5 2.5 1055.09 2.5 1033.61L2.5 41.3889Z" stroke="white" stroke-width="5"/>
  </svg>
  `;

  const whiteRecSvg = `<svg width="1133" height="201" viewBox="0 0 1133 201" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1099.36 0H33.4561C14.9788 0 0 12.9661 0 28.9605V171.504C0 187.498 14.9788 200.464 33.4561 200.464H1099.36C1117.84 200.464 1132.82 187.498 1132.82 171.504V28.9605C1132.82 12.9661 1117.84 0 1099.36 0Z" fill="white"/>
  </svg>   
  `;

  const phoneSvg = `<svg width="107" height="120" viewBox="0 0 107 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50.5308 28.2399L30.5401 0.152344L14.4646 8.72758C0.228016 16.3271 -4.1616 32.4505 4.55834 44.7741L48.9291 107.06C57.7084 119.383 76.3347 123.183 90.5713 115.635L106.647 107.06L86.6562 78.9721L76.394 84.4664C73.1908 86.1609 68.9197 85.3393 66.9622 82.5151L38.0144 41.8986C36.0569 39.1258 37.0059 35.4287 40.2685 33.7342L50.5308 28.2399Z" fill="${primary}"/>
  </svg>  
  `;

  return { signSvg, innerWhiteSvg, whiteRecSvg, phoneSvg };
};
