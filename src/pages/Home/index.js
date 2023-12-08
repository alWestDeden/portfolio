import { useContext } from "react"
import { DeviceContext } from "../../index"
import addClassExtension from "../../functions/addClassExtension"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Cv from "../../components/Cv"
// !!!!!!! modify and optimize image to jpg !!!!!!!!!
import "../../style/Home.scss"

export default function Home() {
	const touchScreen = useContext(DeviceContext)
	return (
		// for classes names a '' at the end mean for cursor events and a '-ts' mean for Touch Screen events
		<div className={addClassExtension(touchScreen, "home")}>
			<div className='square-background'></div>
			{/* {touchScreen ? <img className='me-svg-ts' src={meSVG} alt='Un dessin de moi' /> : ""} */}
			<div className={addClassExtension(touchScreen, "home-top")}>
				<AboutMe touchScreen={touchScreen} />
				<Cv touchScreen={touchScreen} />
			</div>
			<div className='home-bottom'>
				<div className={addClassExtension(touchScreen, "home-bottom-left")}></div>
				<Projects touchScreen={touchScreen} />
			</div>
		</div>
	)
}
