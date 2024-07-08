import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const houseSvg = `<svg width="1728" height="1152" viewBox="0 0 1728 1152" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M525.127 187.688L863.96 0L1728 478.569H1504V1152H226V478.569H0L365.129 276.315V63H525.127V187.688Z" fill="${primary}"/>
    </svg>
    `;

  const arrowSvg = `<svg width="1082" height="259" viewBox="0 0 1082 259" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M823.834 195V259L1081.22 129.455L823.834 0V65H-0.00976562V195H823.834Z" fill="white"/>
    </svg>
    `;

  return { houseSvg, arrowSvg };
};
