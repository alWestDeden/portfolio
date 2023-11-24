import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
// import ArgentBank from "./pages/Projects/ArgentBank"
import Footer from "./components/Footer"
import "./style/global.scss"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Router basename='/portfolio'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/projects/argentbank' element={<ArgentBank />} /> */}
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)
