import { createContext } from 'react';
import { en_trans } from './lang/en';

const existingLang = sessionStorage.getItem("lang");
console.log(existingLang)
export const initialLang = {lang: existingLang || "en", _: en_trans};

export const LangTransContext = createContext(initialLang);
export const LangTransDispatchContext = createContext(initialLang);
