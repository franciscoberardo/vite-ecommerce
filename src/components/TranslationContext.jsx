// context/TranslationContext.js
import React, { createContext, useContext } from 'react';
import { useTranslation } from 'react-i18next';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const translation = useTranslation();
    return (
        <TranslationContext.Provider value={translation}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslationContext = () => {
    return useContext(TranslationContext);
};
