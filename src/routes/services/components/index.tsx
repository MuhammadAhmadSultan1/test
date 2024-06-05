import cross from "../../../assets/cross.png";


export const ServicesButton = ({ name, onClick }: { name: string, onClick: () => void }) => {
    return (
        // <div className="">
        //     <div className="bg-white border border-[#CCCCCC] text-black py-2 px-4 rounded-3xl">
        //         {name}
        //     </div>
        // </div>

        <div className="relative">
            <div className="bg-white border border-[#CCCCCC] text-black py-2 px-4 rounded-3xl">
                {name}
                <img
                    src={cross}
                    className="absolute top-0 right-0 w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                    alt="Close icon"
                    onClick={onClick}
                />
            </div>
        </div>
    );
};