// user's hook to manage screen's type
import React, { createContext, useContext } from "react"

const ScreenTypeContext = createContext()
const ScreenTypeProvider = ({ children }) => {
	function isTouchDevice() {
		return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
	}
	const touchScreen = isTouchDevice()
	return <ScreenTypeContext.Provider value={{ touchScreen }}>{children}</ScreenTypeContext.Provider>
}
const useTouchScreen = () => {
	const context = useContext(ScreenTypeContext)
	if (!context) {
		throw new Error("useScreenType must be used within a TouchScreenContext")
	}
	return context
}
export { ScreenTypeProvider, useTouchScreen }
