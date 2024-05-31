import { ICardProps } from "../../../../../types/card";

export const Card2 = (props: ICardProps) => {
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
      <div className="w-[336px] h-[192px] cursor-pointer bg-white">
        <div className="flex justify-between w-full h-full pl-8 pr-3 py-6 border-y-4 border-t-primary border-b-[#2B2B2B]">
          <div className="flex justify-center items-center">
            <img src={logoUrl} alt="logo" className="max-w-[90px] max-h-12" />
          </div>
          <div className="flex h-full items-center">
            <div className="h-3/4 border-l border-primary"></div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-base leading-5 font-semibold">{name}</span>
              <span className="text-[10px] leading-3">{designation}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[8px]">{phoneNumber}</span>
              <span className="text-[8px]">{website}</span>
              <span className="text-[8px]">{email}</span>
              <span className="text-[8px] max-w-32">{address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
