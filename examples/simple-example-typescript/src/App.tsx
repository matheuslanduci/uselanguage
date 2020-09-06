import * as React from 'react';
import Routes from "./routes";
import lang from "./languages.json";
import { LanguageProvider } from "uselanguage";

const App: React.FC = () => {  
  const defaultLanguage = lang.languages[0];

  return (
    <LanguageProvider defaultValue={defaultLanguage}>
      <Routes />
    </LanguageProvider>
  )
}

export default App;
