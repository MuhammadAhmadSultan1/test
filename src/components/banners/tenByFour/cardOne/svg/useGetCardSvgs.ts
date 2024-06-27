import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;

  const secondaryRight = `<svg width="225" height="384" viewBox="0 0 225 384" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.643925 -0.847707L10.64 -0.56743L224.291 389.573L214.02 389.285L0.643925 -0.847707Z" fill="${
    secondary || "#D95E00"
  }" fill-opacity="0.8"/>
  </svg>  
  `;

  const logoContainer = `<svg width="246" height="76" viewBox="0 0 246 76" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.8" d="M0 0.522278L205 0.522293L246 76H0V0.522278Z" fill="#F99221"/>
  </svg>
  `;

  const primaryBottom = `<svg width="960" height="72" viewBox="0 0 960 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="960" height="72" fill="${primary || "#3E2002"}"/>
  </svg>
  `;

  const rectangle = `<svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.600706 -0.00793127L29.4763 -1.05954e-05L67.4763 72L38.4766 72L0.600706 -0.00793127Z" fill="#FFFFFF"/>
  </svg>
  `;

  const secondaryLeft = `<svg width="315" height="384" viewBox="0 0 315 384" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.220509 -0.283574L102.741 -0.247899L314.919 384.052L210.398 384.016L0.220509 -0.283574Z" fill="${
    secondary || "#D95E00"
  }" fill-opacity="0.8"/>
  </svg>
  
  `;

  return {
    secondaryRight,
    secondaryLeft,
    logoContainer,
    primaryBottom,
    rectangle,
  };
};
