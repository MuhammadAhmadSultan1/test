import { IColorVariation } from "../../../../../types/common";

export const useGetSvg = (props: IColorVariation) => {
  const { primary } = props;

  const houseSvg = `<svg width="1650" height="1152" viewBox="0 0 1650 1152" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1179.87 161.837C1175.95 160.05 1173.44 156.137 1173.44 151.829V11C1173.44 4.92487 1168.51 0 1162.44 0H1089.45C1083.37 0 1078.45 4.92487 1078.45 11V98.4792C1078.45 106.485 1070.17 111.81 1062.88 108.488L829.564 2.08146C826.665 0.75931 823.335 0.759246 820.436 2.08127L7.0711 372.978C-3.68585 377.883 -0.187553 393.986 11.635 393.986H124.534C130.609 393.986 135.534 398.911 135.534 404.986V1141C135.534 1147.08 140.459 1152 146.534 1152H1503.47C1509.54 1152 1514.47 1147.08 1514.47 1141V404.986C1514.47 398.911 1519.39 393.986 1525.47 393.986H1638.36C1650.18 393.986 1653.68 377.883 1642.93 372.978L1179.87 161.837Z" fill="${primary}"/>
  </svg>
  
    `;

  const arrowSvg = `<svg width="384" height="313" viewBox="0 0 384 313" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_261_88)">
  <path d="M383.987 155.33L238.232 0.291016V47.977H0.84375V262.731H238.232V310.417L383.987 155.33Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_d_261_88" x="0.84375" y="0.291016" width="383.143" height="311.953" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="1.82729"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.121569 0 0 0 0 0.0784314 0 0 0 0 0.0588235 0 0 0 0.4 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_88"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_88" result="shape"/>
  </filter>
  </defs>
  </svg>
    `;

  const windowSvg = `<svg width="159" height="141" viewBox="0 0 159 141" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M70.1453 0.804688H0.785156V61.8571H70.1453V0.804688Z" fill="white"/>
    <path d="M158.379 0.804688H89.0195V61.8571H158.379V0.804688Z" fill="white"/>
    <path d="M70.1453 79.2998H0.785156V140.352H70.1453V79.2998Z" fill="white"/>
    <path d="M158.379 79.2998H89.0195V140.352H158.379V79.2998Z" fill="white"/>
    </svg>
    `;

  const whiteRecSvg = `<svg width="1139" height="206" viewBox="0 0 1139 206" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1105.35 0.904297H34.5207C15.9581 0.904297 0.910156 14.1499 0.910156 30.4892V176.105C0.910156 192.445 15.9581 205.69 34.5207 205.69H1105.35C1123.91 205.69 1138.96 192.445 1138.96 176.105V30.4892C1138.96 14.1499 1123.91 0.904297 1105.35 0.904297Z" fill="white"/>
  </svg>  
  `;

  const phoneSvg = `<svg width="118" height="130" viewBox="0 0 118 130" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M50.8321 36.6364L30.7491 7.94336L14.5994 16.7035C0.297059 24.4669 -4.11282 40.9378 4.64737 53.5271L49.223 117.155C58.0428 129.745 76.7551 133.626 91.0574 125.916L107.207 117.155L87.1243 88.4623L76.8147 94.0751C73.5966 95.8061 69.3059 94.9668 67.3393 92.0818L38.2579 50.5896C36.2913 47.757 37.2448 43.9802 40.5224 42.2492L50.8321 36.6364Z" fill="${primary}"/>
  <path d="M35.0998 0.572011L25.665 5.69308C25.1888 5.95158 25.0408 6.50102 25.3345 6.92022L49.3255 41.1658C49.6192 41.585 50.2434 41.7153 50.7196 41.4568L60.1544 36.3358C60.6306 36.0773 60.7786 35.5278 60.4849 35.1086L36.4939 0.863051C36.2002 0.443851 35.576 0.313512 35.0998 0.572011Z" fill="${primary}"/>
  <path d="M91.3763 81.3304L81.9405 86.4501C81.4642 86.7085 81.3161 87.2578 81.6097 87.677L105.594 121.926C105.888 122.346 106.512 122.476 106.988 122.218L116.424 117.098C116.9 116.839 117.048 116.29 116.755 115.871L92.7702 81.6215C92.4766 81.2023 91.8526 81.072 91.3763 81.3304Z" fill="${primary}"/>
  </svg>
  `;

  return { houseSvg, arrowSvg, windowSvg, whiteRecSvg, phoneSvg };
};
