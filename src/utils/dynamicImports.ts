import { ICanvasCardProps } from "../types/card";

export const importModule = async (
  moduleName: string
): Promise<React.ReactElement<(props: ICanvasCardProps) => JSX.Element>> => {
  const importedModule = await import(moduleName);
  console.log("imported module", importedModule);
  return importedModule;
};
