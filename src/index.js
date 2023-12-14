import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { ScreenTypeProvider } from "./functions/ScreenTypeContext"
import { LanguageProvider } from "./functions/LanguageContext"
import Header from "./components/Header"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Footer from "./components/Footer"
import "./style/global.scss"
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Router basename='/portfolio'>
			<LanguageProvider>
				<ScreenTypeProvider>
					<Header />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/project/:id' element={<Project />} />
					</Routes>
					<Footer />
				</ScreenTypeProvider>
			</LanguageProvider>
		</Router>
	</React.StrictMode>
)
