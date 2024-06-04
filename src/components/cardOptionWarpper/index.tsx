export const CardOptionWrapper = (
  props: React.PropsWithChildren<{ selected?: boolean }>
) => {
  const { selected, children } = props;
  return (
    <div
      className={`w-fit transition-all border-4 cursor-pointer ${
        selected ? " border-primary" : "border-lightOutline"
      }`}
    >
      {children}
    </div>
  );
};
