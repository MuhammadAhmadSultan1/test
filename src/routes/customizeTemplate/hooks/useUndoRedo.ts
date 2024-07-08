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
    properties: Partial<IAttribute>,
    index?: number
  ) => {
    setStateHistory((prev) => {
      const stringyfy = JSON.stringify(prev);
      const previousState = JSON.parse(stringyfy);
      if (currentStep < stateHistory.length - 1) {
        previousState.splice(currentStep + 1);
      }

      const field =
        previousState[previousState.length - 1].templateAttributes[fieldName];

      if (Array.isArray(field)) {
        field[index ?? 0] = {
          ...field[index ?? 0],
          ...properties,
        };
      }

      console.log("previous", previousState, prev);

      return Array.isArray(field)
        ? [...prev, previousState[previousState.length - 1]]
        : [
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

  // console.log("current state history", stateHistory);

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
