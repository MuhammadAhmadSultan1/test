import { Suspense, lazy, useMemo } from "react";
import { useAppSelector } from "../../redux/hooks";
import { ICanvasCardProps } from "../../types/card";

export const CustomizeTemplate = () => {
  const selectedCard = useAppSelector((state) => state.selectedCard);
  const selectedColorVariation = useAppSelector(
    (state) => state.selectedColorVariation
  );

  const testCardData: ICanvasCardProps = {
    logo: {
      url: "",
      width: 20,
      height: 10,
    },
    name: {
      text: "Jamie Maclaren",
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    designation: {
      text: "Project Manager",
      color: "#ffffff",
      fontSize: 10,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    phone: {
      text: "+92 123 456 7890",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    website: {
      text: "www.website.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    email: {
      text: "test@gmail.com",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    address: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    description: {
      text: "X park view, DHA Phase 8 Lahore Pakistan",
      color: "#ffffff",
      fontSize: 8,
      fontWeight: 400,
      lineHeight: 0.8,
    },
    selected: false,
  };

  const SelectedTemplate = useMemo(
    () => lazy(() => import(`../../${selectedCard.path}`)),
    [selectedCard.path]
  );
  return (
    <div className="relative p-8 bg-slate-300">
      <Suspense>
        <SelectedTemplate
          {...testCardData}
          editable={true}
          primary={selectedColorVariation.primary}
          secondary={selectedColorVariation.secondary}
        />
      </Suspense>
    </div>
  );
};
