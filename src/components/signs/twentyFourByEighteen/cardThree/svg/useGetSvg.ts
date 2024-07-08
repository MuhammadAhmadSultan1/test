import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const primaryRec = `<svg width="2304" height="1728" viewBox="0 0 2304 1728" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="2304" height="1728" rx="20" fill="${primary}"/>
    </svg>
    `;

  const roofSvg = `<svg width="1650" height="415" viewBox="0 0 1650 415" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1621.3 337.893L847.403 29.1047C833.049 23.4223 816.07 23.4223 801.716 29.1047L510.433 145.385V18.2944C510.433 8.17696 500.106 0 487.327 0H390.699C377.921 0 367.593 8.17696 367.593 18.2944V202.487L27.997 337.893C2.96494 347.872 -7.18755 372.126 5.41601 391.945C18.0196 411.764 48.4781 419.664 73.6852 409.824L824.647 110.183L1575.61 409.824C1582.96 412.734 1590.66 414.12 1598.37 414.12C1616.92 414.12 1634.78 406.082 1643.7 391.945C1656.31 372.126 1646.33 347.872 1621.12 337.893H1621.3Z" fill="white"/>
    </svg>
    `;

  const whiteRecSvg = `<svg width="1974" height="307" viewBox="0 0 1974 307" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1913.64 0.253906H59.6919C26.725 0.253906 0 21.4133 0 47.5147V258.871C0 284.973 26.725 306.132 59.6919 306.132H1913.64C1946.61 306.132 1973.33 284.973 1973.33 258.871V47.5147C1973.33 21.4133 1946.61 0.253906 1913.64 0.253906Z" fill="white"/>
    </svg>
    `;

  return { primaryRec, roofSvg, whiteRecSvg };
};
