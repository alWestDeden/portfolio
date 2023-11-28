import React from "react"
import { createContext } from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Project from "./pages/Project"
// import ArgentBank from "./pages/Projects/ArgentBank"
import Footer from "./components/Footer"
import "./style/global.scss"

// detect if the device support touch events
function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}
const touchDevice = isTouchDevice()
export const DeviceContext = createContext(touchDevice)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Router basename='/portfolio'>
			<DeviceContext.Provider value={touchDevice}>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/project/:id' element={<Project />} />
				</Routes>
				<Footer />
			</DeviceContext.Provider>
		</Router>
	</React.StrictMode>
)
