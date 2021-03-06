import * as React from "react";
import languages from "../languages.json";
import { useLanguage } from "uselanguage";

const MainPage: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const filteredLanguage = languages.filter(
      lang => lang.value === e.target.value
    );

    setLanguage(filteredLanguage[0]);
  };

  return (
    <div className="main">
      <h1>{language.words?.pages.main.title}</h1>
      <select onChange={handleChangeLanguage}>
        {languages.map(lang => (
          <option
            value={lang.value}
            selected={lang.value === language.value}
            key={lang.value}
          >
            {lang.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MainPage;
