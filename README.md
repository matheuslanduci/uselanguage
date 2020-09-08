# useLanguage

Welcome! UseLanguage is a custom hook to React using Context and State.
The goal is to change the react application's language without difficulties.

## Usage

### Languages and schema

You need to define the application's languages based on current schema:

```json
{
  "title": "Name of language in the language itself",
  "description": "Short description of the language",
  "value": "Cammel case value of the language (programming purpose)",
  "words": {
    "pages": {
      "your-page": {
        "title": "Title of your-page"
      }
    },
    "components": {
      "your-component": {
        "title": "Title of your-component"
      }
    }
  }
}
```

### Setting schema

Currently, you can set schema via JavaScript/TypeScript or JSON.

JavaScript:

```js
// languages.js
const languages = [
  {
    title: "English",
    description: "American English",
    value: "enUS",
    words: {
      pages: {
        main: {
          title: "Welcome!"
        }
      },
      components: {}
    }
  },
  {
    title: "Português",
    description: "Brazilian Portuguese",
    value: "ptBR",
    words: {
      pages: {
        main: {
          title: "Bem-vindo!"
        }
      },
      components: {}
    }
  }
];

export default languages;
```

JSON:

```json
// languages.json
[
  {
    "title": "English",
    "description": "American English.",
    "value": "enUS",
    "words": {
      "pages": {
        "main": {
          "title": "Welcome!"
        }
      },
      "components": {}
    }
  },
  {
    "title": "Português",
    "description": "Brazilian Portuguese.",
    "value": "ptBR",
    "words": {
      "pages": {
        "main": {
          "title": "Bem-vindo!"
        }
      },
      "components": {}
    }
  }
]
```

### LanguageProvider

Language Provider is the language's context provider on application.

Arguments

#### `"defaultValue: LanguageSchema"`

Specify language's default value.

#### `"persisted?: boolean"`

Specify if the state will be storaged on localStorage or not. Default value: false.

#### `"languages: LanguageSchema[]"`

Specify all languages used in application (only needed if persisted is true);

Javascript:

```jsx
// App.js
import React from "react";
import Routes from "./routes";
import lanuages from "./languages.json";
import { LanguageProvider } from "uselanguage";

const App = () => {
  const defaultLanguage = languages[0];
  return (
    <LanguageProvider defaultValue={defaultLanguage}>
      <Routes />
    </LanguageProvider>
  );
};
```

Typescript:

```jsx
// App.tsx
import React from "react";
import Routes from "./routes";
import languages from "./languages.json";
import { LanguageProvider } from "uselanguage";

const App: React.FC = () => {
  const defaultLanguage = languages[0];
  return (
    <LanguageProvider defaultValue={defaultLanguage}>
      <Routes />
    </LanguageProvider>
  );
};
```

Persisted language (Save the application language)

JavaScript:

```jsx
// App.js
import React from "react";
import Routes from "./routes";
import lanuages from "./languages.json";
import { LanguageProvider } from "uselanguage";

const App = () => {
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
```

Typescript:

```jsx
// App.tsx
import React from "react";
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
```

### useLanguage

The context hook! You can get and set the language.

#### Getting the current language

Javascript:

```jsx
// pages/Page.js
import React from "react";
import { useLanguage } from "uselanguage";

const Page = () => {
  const { language } = useLanguage();

  return (
    <div className="page">
      <h1>{language.words.pages.page.title}</h1>
    </div>
  );
};
```

Typescript:

```jsx
// pages/Page.js
import React from "react";
import { useLanguage } from "uselanguage";

const Page: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="page">
      <h1>{language.words.pages?.page.title}</h1>
    </div>
  );
};
```

#### Setting the current language

Javascript:

```jsx
// pages/Page.js
import React from "react";
import languages from "./languages.json";
import { useLanguage } from "uselanguage";

const Page = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = e => {
    const filteredLanguage = languages.filter(
      lang => lang.value === e.target.value
    );

    setLanguage(filteredLanguage[0]);
  };

  return (
    <div className="page">
      <h1>{language.words.pages.page.title}</h1>
      <select onChange={handleChangeLanguage}>
        {lang.languages.map(lang => (
          <option value={lang.value}>{lang.title}</option>
        ))}
      </select>
    </div>
  );
};
```

Typescript:

```jsx
// pages/Page.js
import React from "react";
import languages from "./languages.json";
import { useLanguage } from "uselanguage";

const Page: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filteredLanguage = languages.filter(
      lang => lang.value === e.target.value
    );

    setLanguage(filteredLanguage[0]);
  };

  return (
    <div className="page">
      <h1>{language.words.pages.page.title}</h1>
      <select onChange={handleChangeLanguage}>
        {languages.map(lang => (
          <option value={lang.value}>{lang.title}</option>
        ))}
      </select>
    </div>
  );
};
```

### Examples

Go to examples folders and check some examples.
