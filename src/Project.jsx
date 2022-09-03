import React from 'react'
import { useState } from 'react'
import App from './App'
import { Menu } from './components/Menu/Menu'
import { LangContext } from './contexts/LangContext'
import { lang } from './helpers/lang/lang'

export const Project = () => {
    
    const [actualLanguage,setNewLanguage] = useState(window.localStorage.getItem("Lang")||"en");
    
    const handleChangeLanguages=(newLang)=>{
        
        window.localStorage.setItem("Lang",newLang);
        setNewLanguage(newLang);
    }

    const LanguagesUtils = {
        actualLanguage,
        dictionary: lang[actualLanguage],
        handleChangeLanguages
    }

  return (
    <React.StrictMode>
        <LangContext.Provider value={LanguagesUtils}>
        <Menu/>
        <App/>
        </LangContext.Provider>
  </React.StrictMode>
  )
}
