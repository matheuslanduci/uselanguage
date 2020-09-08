import * as React from "react";
import Routes from "./routes";
import languages from "./languages.json";
import { LanguageProvider } from "uselanguage";

const App: React.FC = () => {
  const defaultLanguage = languages[0];

  return (
    <LanguageProvider
      defaultValue={defaultLanguage}
      persisted
      languages={languages}
    >
      <Routes />
    </LanguageProvider>
  );
};

export default App;
