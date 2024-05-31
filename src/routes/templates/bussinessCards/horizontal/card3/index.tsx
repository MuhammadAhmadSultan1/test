import { ICardProps } from "../../../../../types/card";

export const Card3 = (props: ICardProps) => {
  const { name, website, email, designation, phoneNumber, address, selected } =
    props;

  return (
    <div
      className={`w-fit rounded-md transition-all border-4 ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      <div className="w-[336px] h-[192px] cursor-pointer rounded-md bg-white">
        <div className="flex w-full h-full justify-between px-8 py-8">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-base leading-5 font-semibold">{name}</span>
              <span className="text-[10px] leading-3">{designation}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[8px]">{phoneNumber}</span>
              <span className="text-[8px]">{website}</span>
              <span className="text-[8px]">{email}</span>
              <span className="text-[8px] max-w-32">{address}</span>
            </div>
          </div>
          <div className="flex h-full items-center">
            <div className="h-1/3 border border-[#0A3047]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
