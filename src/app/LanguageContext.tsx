import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the type for context value
interface LanguageContextType {
  language: string;
  switchLanguage: (lang: string) => void;
}

// Create the Context with default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define the Provider's props
interface LanguageProviderProps {
  children: ReactNode;
}

// Provider Component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(
    "en" // Default language
  );

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom Hook for consuming the context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
