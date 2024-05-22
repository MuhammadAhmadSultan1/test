import dummyLogo from "../../assets/dummylogo.png";

export const HeaderLogo = () => {
  return (
    <div className="">
      <img
          className="object-contain"
          src={dummyLogo}
          alt="Upload Icon"
          style={{ width: '200px', height: '200px', marginTop: 0, }}
        />
    </div>
  );
};
