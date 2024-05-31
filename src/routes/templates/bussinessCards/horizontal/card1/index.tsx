import { ICardProps } from "../../../../../types/card";

export const Card1 = (props: ICardProps) => {
  const {
    logoUrl,
    name,
    website,
    email,
    designation,
    phoneNumber,
    address,
    selected,
  } = props;

  return (
    <div
      className={`w-fit transition-all border-4 ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      <div className="relative w-[336px] h-[192px] cursor-pointer box-border bg-white">
        <img
          src={logoUrl}
          alt="logo"
          className="absolute right-5 top-7 max-w-[90px] max-h-12"
        />
        <div className="absolute top-[66px]">
          <div className="relative">
            <span>
              <svg
                width="336"
                height="40"
                viewBox="0 0 336 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M149 0H0V36V40H336V36H166L149 0Z"
                  fill="#004CE0"
                />
              </svg>
            </span>
            <span className="absolute text-base font-semibold top-1 left-2 text-white">
              {name}
            </span>
            <span className="absolute text-[10px] bottom-1 left-2 text-white">
              {designation}
            </span>
          </div>
        </div>
        <div className="absolute bottom-0">
          <div className="relative">
            <span>
              <svg
                width="336"
                height="86"
                viewBox="0 0 336 86"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="336" height="86" fill="#323232" />
              </svg>
            </span>
            <span className="absolute top-4 left-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="17"
                  rx="1.5"
                  stroke="#004CE0"
                />
                <g clipPath="url(#clip0_5_124)">
                  <path
                    d="M13.1976 10.5639C12.5854 10.5639 11.9842 10.4681 11.4146 10.2798C11.1354 10.1846 10.7923 10.272 10.6219 10.447L9.4975 11.2958C8.19352 10.5997 7.39029 9.79672 6.70372 8.50253L7.52755 7.40742C7.74159 7.19367 7.81836 6.88143 7.72638 6.58846C7.53732 6.01581 7.44128 5.41495 7.44128 4.80245C7.4413 4.35997 7.08133 4 6.63888 4H4.80242C4.35997 4 4 4.35997 4 4.80242C4 9.87404 8.12599 14 13.1976 14C13.6401 14 14 13.64 14 13.1976V11.3663C14 10.9238 13.64 10.5639 13.1976 10.5639Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_124">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="absolute top-[18px] left-10 text-[8px] text-white">
              {phoneNumber}
            </span>
            <span className="absolute top-4 left-32">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="17"
                  rx="1.5"
                  stroke="#004CE0"
                />
                <g clipPath="url(#clip0_5_132)">
                  <path
                    d="M10.6831 7.125C10.3534 5.59375 9.65031 4.625 9 4.625C8.34969 4.625 7.64656 5.59375 7.31688 7.125H10.6831Z"
                    fill="white"
                  />
                  <path
                    d="M7.125 9C7.12492 9.41806 7.1528 9.83566 7.20844 10.25H10.7916C10.8472 9.83566 10.8751 9.41806 10.875 9C10.8751 8.58194 10.8472 8.16434 10.7916 7.75H7.20844C7.1528 8.16434 7.12492 8.58194 7.125 9Z"
                    fill="white"
                  />
                  <path
                    d="M7.31688 10.875C7.64656 12.4062 8.34969 13.375 9 13.375C9.65031 13.375 10.3534 12.4062 10.6831 10.875H7.31688Z"
                    fill="white"
                  />
                  <path
                    d="M11.3231 7.12501H13.2919C12.9961 6.45181 12.5466 5.8573 11.9795 5.38918C11.4125 4.92105 10.7436 4.59233 10.0266 4.42938C10.6194 4.95094 11.0844 5.91532 11.3231 7.12501Z"
                    fill="white"
                  />
                  <path
                    d="M13.5166 7.75H11.4228C11.4744 8.16467 11.5001 8.58214 11.5 9C11.5 9.41787 11.4742 9.83534 11.4225 10.25H13.5163C13.7441 9.43225 13.7445 8.56775 13.5166 7.75Z"
                    fill="white"
                  />
                  <path
                    d="M10.0266 13.5706C10.7437 13.4078 11.4127 13.0791 11.9799 12.611C12.5471 12.1428 12.9966 11.5483 13.2925 10.875H11.3237C11.0844 12.0847 10.6194 13.0491 10.0266 13.5706Z"
                    fill="white"
                  />
                  <path
                    d="M6.67688 10.875H4.70813C5.004 11.5483 5.45356 12.1428 6.02073 12.611C6.58791 13.0791 7.25691 13.4078 7.97406 13.5706C7.38063 13.0491 6.91563 12.0847 6.67688 10.875Z"
                    fill="white"
                  />
                  <path
                    d="M7.97344 4.42938C7.25628 4.59224 6.58728 4.92092 6.02011 5.38905C5.45293 5.85718 5.00337 6.45174 4.7075 7.12501H6.67625C6.91563 5.91532 7.38063 4.95094 7.97344 4.42938Z"
                    fill="white"
                  />
                  <path
                    d="M6.5 9C6.49996 8.58213 6.52584 8.16466 6.5775 7.75H4.48375C4.25585 8.56775 4.25585 9.43225 4.48375 10.25H6.5775C6.52584 9.83534 6.49996 9.41787 6.5 9Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_132">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="absolute top-[18px] right-[120px] text-[8px] text-white">
              {website}
            </span>
            <span className="absolute bottom-5 left-4">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="17"
                  rx="1.5"
                  stroke="#004CE0"
                />
                <path
                  d="M10.4796 9.41507L9.64209 10.2554C9.30246 10.5962 8.70488 10.6036 8.35791 10.2554L7.52035 9.41507L4.51222 12.433C4.62419 12.4847 4.74765 12.5156 4.8789 12.5156H13.1211C13.2523 12.5156 13.3758 12.4848 13.4877 12.433L10.4796 9.41507Z"
                  fill="white"
                />
                <path
                  d="M13.1211 5.48438H4.87891C4.74766 5.48438 4.6242 5.51527 4.51227 5.56705L7.72666 8.79211C7.72688 8.79232 7.72713 8.79236 7.72735 8.79258C7.72756 8.79279 7.7276 8.79309 7.7276 8.79309L8.77278 9.84172C8.88379 9.95273 9.11625 9.95273 9.22727 9.84172L10.2722 8.79326C10.2722 8.79326 10.2725 8.79279 10.2727 8.79258C10.2727 8.79258 10.2732 8.79232 10.2734 8.79211L13.4877 5.56703C13.3758 5.51523 13.2523 5.48438 13.1211 5.48438Z"
                  fill="white"
                />
                <path
                  d="M4.09348 5.97681C4.03555 6.09396 4 6.22399 4 6.36329V11.6367C4 11.776 4.03551 11.9061 4.09346 12.0232L7.1068 9.00011L4.09348 5.97681Z"
                  fill="white"
                />
                <path
                  d="M13.9065 5.97675L10.8932 9.00009L13.9065 12.0232C13.9644 11.9061 14 11.776 14 11.6367V6.36327C14 6.22393 13.9644 6.09389 13.9065 5.97675Z"
                  fill="white"
                />
              </svg>
            </span>
            <span className="absolute bottom-6 left-10 text-[8px] text-white">
              {email}
            </span>
            <span className="absolute bottom-5 left-32">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="17"
                  height="17"
                  rx="1.5"
                  stroke="#004CE0"
                />
                <g clipPath="url(#clip0_5_164)">
                  <path
                    d="M9 4C6.9325 4 5.25 5.69417 5.25 7.77708C5.25 10.7367 8.6475 13.7925 8.79208 13.9208C8.85167 13.9737 8.92583 14 9 14C9.07417 14 9.14833 13.9738 9.20792 13.9213C9.3525 13.7925 12.75 10.7367 12.75 7.77708C12.75 5.69417 11.0675 4 9 4ZM9 9.83333C7.85125 9.83333 6.91667 8.89875 6.91667 7.75C6.91667 6.60125 7.85125 5.66667 9 5.66667C10.1487 5.66667 11.0833 6.60125 11.0833 7.75C11.0833 8.89875 10.1487 9.83333 9 9.83333Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5_164">
                    <rect
                      width="10"
                      height="10"
                      fill="white"
                      transform="translate(4 4)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="absolute max-w-32 bottom-3 right-[54px] text-[8px] text-white">
              {address}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
