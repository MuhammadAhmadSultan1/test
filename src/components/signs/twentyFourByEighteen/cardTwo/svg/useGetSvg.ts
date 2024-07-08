import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const signSvg = `<svg width="2304" height="1728" viewBox="0 0 2304 1728" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1151.89 0L0 515.655V1629.46C0 1683.9 65.885 1728 147.234 1728H2156.76C2238.11 1728 2304 1683.9 2304 1629.46V515.655L1152.11 0H1151.89Z" fill="${primary}"/>
    </svg>
    `;

  return { signSvg };
};
