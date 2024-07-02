import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { secondary } = props;

  const innerSecondary = `<svg width="446" height="161" viewBox="0 0 446 161" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="1.5" y="1.5" width="443" height="158" stroke="${secondary}" stroke-width="3"/>
  </svg>
  `;

  return { innerSecondary };
};
