import React from 'react'
import AvisoPrivacidad from './AvisoPrivacidad';
import PrivacyPolicy from './PrivacyPolicy';

const Policy = (props) => {

    const isSetedLanguage = props.isSetedLanguage 
    const lang = localStorage.getItem("lang");

     if (lang === "en-US") {
      return <AvisoPrivacidad />
    }
    return <PrivacyPolicy />
  }


export default Policy