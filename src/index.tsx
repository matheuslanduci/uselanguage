import * as React from "react";
import { usePersistedState } from "./utils";

export interface ILanguageObject {
  title: string;
  description: string;
  value: string;
  words?: {
    pages?: any;
    components?: any;
  };
}

export interface ILanguageOptions {
  defaultValue: ILanguageObject;
  persisted?: boolean;
}

export interface ILanguageContext {
  language: ILanguageObject;
  setLanguage: React.Dispatch<React.SetStateAction<ILanguageObject>>;
}

export const LanguageContext = React.createContext<ILanguageContext>(
  {} as ILanguageContext
);

export const LanguageProvider: React.FC<ILanguageOptions> = ({
  defaultValue,
  persisted,
  children
}) => {
  if (persisted) {
    const [language, setLanguage] = usePersistedState<ILanguageObject>(
      "language",
      defaultValue
    );

    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  } else {
    const [language, setLanguage] = React.useState<ILanguageObject>(
      defaultValue
    );

    return (
      <LanguageContext.Provider value={{ language, setLanguage }}>
        {children}
      </LanguageContext.Provider>
    );
  }
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);

  return context;
};
