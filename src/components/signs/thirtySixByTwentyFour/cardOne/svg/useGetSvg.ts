import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const houseSvg = `<svg width="3456" height="2304" viewBox="0 0 3456 2304" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1728 0L0 966.013L1.10169 2304H3456V964.894L2926.64 660.603V87.8194H2463.38V411.129L1728 0Z" fill="${primary}"/>
  </svg>
  `;

  return { houseSvg };
};
