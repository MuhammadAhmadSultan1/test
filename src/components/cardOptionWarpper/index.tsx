export const CardOptionWrapper = (
  props: React.PropsWithChildren<{ selected?: boolean; rounded?: string }>
) => {
  const { selected, rounded = "", children } = props;
  return (
    <div
      className={`w-fit transition-all border-4 cursor-pointer ${
        selected ? " border-primary" : "border-lightOutline"
      } ${rounded}`}
    >
      {children}
    </div>
  );
};
