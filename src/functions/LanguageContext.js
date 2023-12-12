// user's hook to manage language
import React, { createContext, useContext, useState } from "react"

const LanguageContext = createContext()
const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("fr")
	const changeLanguage = (newLanguage) => {
		setLanguage(newLanguage)
	}
	return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>
}
const useLanguage = () => {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider")
	}
	return context
}
export { LanguageProvider, useLanguage }
