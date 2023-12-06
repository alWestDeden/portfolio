import { useContext } from "react"
import { DeviceContext } from "../../index"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
// !!!!!!! modify and optimize image to jpg !!!!!!!!!
import "../../style/Home.scss"

export default function Home() {
	const touchScreen = useContext(DeviceContext)
	return (
		// for classes names a '' at the end mean for cursor events and a '-ts' mean for Touch Screen events
		<div className={!touchScreen ? "home" : "home--ts"}>
			{/* {touchScreen ? <img className='me-svg-ts' src={meSVG} alt='Un dessin de moi' /> : ""} */}
			<AboutMe touchScreen={touchScreen} />
			<Projects touchScreen={touchScreen} />
		</div>
	)
}
