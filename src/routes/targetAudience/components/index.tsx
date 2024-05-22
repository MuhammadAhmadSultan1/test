export const ServicesButton = ({ name }: { name: string }) => {
    return (
        <div className="">
            <div className="bg-white border border-[#CCCCCC] text-black py-2 px-4 rounded-3xl">
                {name}
            </div>
        </div>
    );
};