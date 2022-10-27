import React, { useState } from "react";
import languageEnglish from "./../lang/en-US.json";
import languageSpanish from "./../lang/es-MX.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localDeault;
  let defaultLanguage;
  
  const lang = localStorage.getItem("lang");

  if (lang) {
    localDeault = lang;
    //localStorage.removeItem("lang");
    if (lang === "en-US") {
      defaultLanguage = languageEnglish;
    } else if (lang === "es-MX") {
      defaultLanguage = languageSpanish;
    } else {
      localDeault = "en-US";
      defaultLanguage = languageEnglish;
    }
  } 


  const [language, setTextLanguage] = useState(defaultLanguage);
  const [locale, setLocale] = useState(localDeault);

  const setLanguage = (lenguaje) => {
    //localStorage.removeItem("lang");
    switch (lenguaje) {
      case "es-MX":
        setTextLanguage(languageSpanish);
        setLocale("es-MX");
        localStorage.setItem("lang", "es-MX");
        break;
      case "en-US":
        setTextLanguage(languageEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;
      default:
        setTextLanguage(languageEnglish);
        setLocale("en-US");
        localStorage.setItem("lang", "en-US");
    }
  };

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={locale} messages={language}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { LangProvider, langContext };
