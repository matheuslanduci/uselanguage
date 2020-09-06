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
	"value": "Cammel case value of the language (programming purposes)",
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

### LanguageProvider
Language Provider is the language's context provider on application.

Javascript:
```jsx
// App.js
import React from 'react';
import Routes from './routes';
import lang from './languages.json';
import { LanguageProvider } from 'uselanguage'

const App = () => {
  const defaultLanguage = lang.languages[0];
  return (
    <LanguageProvider defaultValue={defaultLanguage}>
	    <Routes />
	  </LanguageProvider >
  )
}
```
Typescript:
```jsx
// App.tsx
import React from 'react';
import Routes from './routes';
import lang from './languages.json';
import { LanguageProvider } from 'uselanguage'

const App: React.FC = () => {
  const defaultLanguage = lang.languages[0];
  return (
    <LanguageProvider defaultValue={defaultLanguage}>
	    <Routes />
	  </LanguageProvider >
  )
}
```

### useLanguage
The context hook! You can get and set the language.

#### Getting the current language
Javascript:
```jsx
// pages/Page.js
import React from 'react';
import { useLanguage } from 'uselanguage';

const Page = () => {
  const { language } = useLanguage();
  
  return (
    <div className="page">
	    <h1>{language.words.pages.page.title}</h1>
    </div>
  )
}
```

Typescript:
```jsx
// pages/Page.js
import React from 'react';
import { useLanguage } from 'uselanguage';

const Page: React.FC = () => {
  const { language } = useLanguage();
  
  return (
    <div className="page">
	    <h1>{language.words.pages?.page.title}</h1>
    </div>
  )
}
```

#### Setting the current language
Javascript
```jsx
import React from 'react';
import lang from './languages.json';
import { useLanguage } from 'uselanguage';

const Page = () => {
  const { language, setLanguage } = useLanguage();
	
  const handleChangeLanguage = e => {
    const filteredLanguage = lang.languages.filter(lang => lang.value === e.target.value);
	
	  setLanguage(filteredLanguage[0]);
  }
  
  return (
    <div className="page">
	    <h1>{language.words.pages.page.title}</h1>
	    <select onChange={handleChangeLanguage}>
	      {lang.languages.map(lang => (
		      <option value={lang.value}>
		        {lang.title}
		      </option>
		    ))}
	    </select>
    </div>
  )
}
```

Typescript:
```jsx
import React from 'react';
import lang from './languages.json';
import { useLanguage } from 'uselanguage';

const Page: React.FC = () => {
  const { language, setLanguage } = useLanguage();
	
  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filteredLanguage = lang.languages.filter(lang => lang.value === e.target.value);
	
	  setLanguage(filteredLanguage[0]);
  }
  
  return (
    <div className="page">
	    <h1>{language.words.pages.page.title}</h1>
	    <select onChange={handleChangeLanguage}>
	      {lang.languages.map(lang => (
		      <option value={lang.value}>
		        {lang.title}
		      </option>
		    ))}
	    </select>
    </div>
  )
}
```


### Examples
Go to examples folders and check some examples.

