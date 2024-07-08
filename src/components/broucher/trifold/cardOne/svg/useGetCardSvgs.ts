import { IColorVariation } from "../../../../../types/common";

export const useGetCardSvgs = (props: IColorVariation) => {
  const { primary, secondary } = props;
  const primaryFront = `<svg width="293" height="619" viewBox="0 0 293 619" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="293" height="619" fill="${primary}"/>
    </svg>
    `;

  const primaryBack = `<svg width="272" height="619" viewBox="0 0 272 619" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="272" height="619" fill="${primary}"/>
    </svg>
    `;

  const whiteCircle = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="32" fill="white"/>
    </svg>
    `;

  const secondaryCircle = `<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="36" cy="36" r="36" fill="${secondary}"/>
    </svg>
    `;

  const secondaryRec = `<svg width="245" height="552" viewBox="0 0 245 552" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="245" height="552" fill="${secondary}"/>
    </svg>
    `;

  const secondaryCircleTopRightFront = `<svg width="63" height="58" viewBox="0 0 63 58" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="-6.5" cy="-11.5" r="54" stroke="${secondary}" stroke-opacity="0.64" stroke-width="30"/>
    </svg>
    `;

  const secondaryCircleRightFront = `<svg width="84" height="139" viewBox="0 0 84 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="69.5" cy="69.5" r="54" stroke="${secondary}" stroke-opacity="0.64" stroke-width="30"/>
    </svg>
    `;

  const secondaryCircleLeftBack = `<svg width="80" height="139" viewBox="0 0 80 139" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="11" cy="69.5" r="54" stroke="${secondary}" stroke-opacity="0.84" stroke-width="30"/>
    </svg>
    `;

  const phoneSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.1976 6.56385C8.58536 6.56385 7.98422 6.4681 7.41456 6.27984C7.13542 6.18464 6.79227 6.27198 6.6219 6.44695L5.4975 7.29576C4.19352 6.59969 3.39029 5.79672 2.70372 4.50253L3.52755 3.40742C3.74159 3.19367 3.81836 2.88143 3.72638 2.58846C3.53732 2.01581 3.44128 1.41495 3.44128 0.802448C3.4413 0.359974 3.08133 0 2.63888 0H0.802422C0.359974 0 0 0.359974 0 0.802422C0 5.87404 4.12599 10 9.1976 10C9.64005 10 10 9.64003 10 9.19758V7.36625C10 6.92383 9.64003 6.56385 9.1976 6.56385Z" fill="black"/>
    </svg>
    `;

  const emailSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.4791 5.41504L5.64158 6.25539C5.30195 6.59621 4.70438 6.60355 4.3574 6.25539L3.51984 5.41504L0.511719 8.43293C0.623691 8.48471 0.747148 8.51561 0.878398 8.51561H9.12059C9.25184 8.51561 9.37525 8.48475 9.48719 8.43295L6.4791 5.41504Z" fill="black"/>
    <path d="M9.12055 1.48438H0.878359C0.747109 1.48438 0.623652 1.51527 0.511719 1.56705L3.72611 4.79211C3.72633 4.79232 3.72658 4.79236 3.7268 4.79258C3.72701 4.79279 3.72705 4.79309 3.72705 4.79309L4.77223 5.84172C4.88324 5.95273 5.1157 5.95273 5.22672 5.84172L6.27168 4.79326C6.27168 4.79326 6.27193 4.79279 6.27215 4.79258C6.27215 4.79258 6.27262 4.79232 6.27283 4.79211L9.48715 1.56703C9.37521 1.51523 9.2518 1.48438 9.12055 1.48438Z" fill="black"/>
    <path d="M0.0934766 1.97681C0.0355469 2.09396 0 2.22399 0 2.36329V7.63673C0 7.77603 0.0355078 7.90606 0.093457 8.02321L3.1068 5.00011L0.0934766 1.97681Z" fill="black"/>
    <path d="M9.90588 1.97681L6.89258 5.00015L9.90588 8.02329C9.96381 7.90614 9.99936 7.7761 9.99936 7.63677V2.36333C9.99936 2.22399 9.96381 2.09396 9.90588 1.97681Z" fill="black"/>
    </svg>
    `;

  const websiteSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_799_354)">
    <path d="M6.68266 3.125C6.35297 1.59375 5.64984 0.625 4.99953 0.625C4.34922 0.625 3.64609 1.59375 3.31641 3.125H6.68266Z" fill="black"/>
    <path d="M3.125 5C3.12492 5.41806 3.1528 5.83566 3.20844 6.25H6.79156C6.8472 5.83566 6.87508 5.41806 6.875 5C6.87508 4.58194 6.8472 4.16434 6.79156 3.75H3.20844C3.1528 4.16434 3.12492 4.58194 3.125 5Z" fill="black"/>
    <path d="M3.31641 6.875C3.64609 8.40625 4.34922 9.375 4.99953 9.375C5.64984 9.375 6.35297 8.40625 6.68266 6.875H3.31641Z" fill="black"/>
    <path d="M7.32391 3.12495H9.29266C8.99685 2.45175 8.54738 1.85724 7.98032 1.38911C7.41326 0.920987 6.74439 0.592267 6.02734 0.429321C6.62016 0.950884 7.08516 1.91526 7.32391 3.12495Z" fill="black"/>
    <path d="M9.51594 3.75H7.42219C7.47374 4.16467 7.49952 4.58214 7.49937 5C7.49941 5.41787 7.47353 5.83534 7.42188 6.25H9.51562C9.74352 5.43225 9.74383 4.56775 9.51594 3.75Z" fill="black"/>
    <path d="M6.02734 9.57062C6.7445 9.40777 7.4135 9.07909 7.98068 8.61096C8.54785 8.14282 8.99741 7.54827 9.29328 6.875H7.32453C7.08516 8.08469 6.62016 9.04906 6.02734 9.57062Z" fill="black"/>
    <path d="M2.67773 6.875H0.708984C1.00486 7.54827 1.45441 8.14282 2.02159 8.61096C2.58876 9.07909 3.25777 9.40777 3.97492 9.57062C3.38148 9.04906 2.91648 8.08469 2.67773 6.875Z" fill="black"/>
    <path d="M3.97297 0.429321C3.25581 0.592178 2.58681 0.920858 2.01964 1.38899C1.45246 1.85712 1.0029 2.45167 0.707031 3.12495H2.67578C2.91516 1.91526 3.38016 0.950884 3.97297 0.429321Z" fill="black"/>
    <path d="M2.49967 5C2.49963 4.58213 2.52552 4.16466 2.57717 3.75H0.483422C0.255526 4.56775 0.255526 5.43225 0.483422 6.25H2.57717C2.52552 5.83534 2.49963 5.41787 2.49967 5Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_799_354">
    <rect width="10" height="10" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;

  const locationSvg = `<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_799_367)">
    <path d="M5 0C2.9325 0 1.25 1.69417 1.25 3.77708C1.25 6.73667 4.6475 9.7925 4.79208 9.92083C4.85167 9.97375 4.92583 10 5 10C5.07417 10 5.14833 9.97375 5.20792 9.92125C5.3525 9.7925 8.75 6.73667 8.75 3.77708C8.75 1.69417 7.0675 0 5 0ZM5 5.83333C3.85125 5.83333 2.91667 4.89875 2.91667 3.75C2.91667 2.60125 3.85125 1.66667 5 1.66667C6.14875 1.66667 7.08333 2.60125 7.08333 3.75C7.08333 4.89875 6.14875 5.83333 5 5.83333Z" fill="black"/>
    </g>
    <defs>
    <clipPath id="clip0_799_367">
    <rect width="10" height="10" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    `;

  const bulletPoint = `<svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.5" y="5.5" width="5" height="5" transform="rotate(180 5.5 5.5)" fill="#D9D9D9"/>
    </svg>
    `;

  const bulletPointBack = `<svg width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="5.5" width="5" height="5" transform="rotate(180 5 5.5)" fill="#323232"/>
    </svg>
    `;

  return {
    primaryFront,
    primaryBack,
    secondaryCircle,
    whiteCircle,
    secondaryRec,
    secondaryCircleTopRightFront,
    secondaryCircleRightFront,
    secondaryCircleLeftBack,
    phoneSvg,
    emailSvg,
    websiteSvg,
    locationSvg,
    bulletPoint,
    bulletPointBack,
  };
};
