import { Stepper } from "react-form-stepper";

export default function CustomStepper(props: { activeStep: number }) {
  const { activeStep } = props;

  return (
    <Stepper
      className="stepper"
      steps={[
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
        { label: "" },
      ]}
      activeStep={activeStep}
      connectorStateColors={true}
      connectorStyleConfig={{
        completedColor: "#0162DD",
        activeColor: "#0162DD",
        disabledColor: "#eee",
        size: 6,
        style: "",
      }}
      styleConfig={{
        activeBgColor: "#0162DD",
        activeTextColor: "#fff",
        completedBgColor: "#0162DD",
        inactiveBgColor: "#eee",
        completedTextColor: "#fff",
        inactiveTextColor: "#444",
        size: 44,
        circleFontSize: 18,
        labelFontSize: 0,
        borderRadius: 22,
        fontWeight: "",
      }}
    />
  );
}
