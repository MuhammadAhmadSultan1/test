import { useState, useEffect } from "react";
import { IAttribute, ICanvasCardProps } from "../../../types/card";
import { TFieldName } from "../../../types/common";

export const useUndoRedo = (properties: ICanvasCardProps) => {
  const [stateHistory, setStateHistory] = useState<ICanvasCardProps[]>([
    properties,
  ]);
  const [currentState, setCurrentState] =
    useState<ICanvasCardProps>(properties);
  const [currentStep, setCurrentStep] = useState(0);
  //   const stateHistory: T[] = [properties];
  //   let currentStep = 0;

  useEffect(() => {
    setCurrentStep(stateHistory.length - 1);
  }, [stateHistory]);

  useEffect(() => {
    setCurrentState(stateHistory[currentStep]);
  }, [currentStep, stateHistory]);

  const onStateChange = (
    fieldName: TFieldName,
    properties: Partial<IAttribute>
  ) => {
    setStateHistory((prev) => {
      const previousState = [...prev];
      if (currentStep < stateHistory.length - 1) {
        previousState.splice(currentStep + 1);
      }

      return [
        ...previousState,
        {
          ...previousState[previousState.length - 1],
          templateAttributes: {
            ...previousState[previousState.length - 1].templateAttributes,
            [fieldName]: {
              ...previousState[previousState.length - 1].templateAttributes[
                fieldName
              ],
              ...properties,
            },
          },
        },
      ];
    });
    // if (currentStep < stateHistory.length - 1) {
    //   setStateHistory((prev) => {
    //     const previousState = [...prev];
    //     previousState.splice(currentStep + 1);

    //     return previousState;
    //   });
    // }
    // setStateHistory((prev) => [...prev, newChanges]);
  };

  const onUndo = () => {
    if (currentStep) setCurrentStep((prev) => prev - 1);
  };

  const onRedo = () => {
    if (currentStep < stateHistory.length - 1)
      setCurrentStep((prev) => prev + 1);
  };

  return {
    currentState: currentState,
    stateHistoryLength: stateHistory.length,
    currentStep: currentStep,
    onUndo: onUndo,
    onRedo: onRedo,
    onStateChange: onStateChange,
    setStateHistory: setStateHistory,
  };
};
