import { useTouchScreen } from "../../functions/ScreenTypeContext"
import addClassExtension from "../../functions/addClassExtension"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Cv from "../../components/Cv"
// !!!!!!! modify and optimize image to jpg !!!!!!!!!
import "../../style/Home.scss"

export default function Home() {
	const { touchScreen } = useTouchScreen()
	return (
		// for classes names a '' at the end mean for cursor events and a '-ts' mean for Touch Screen events
		<main className={addClassExtension(touchScreen, "home")}>
			<div className='square-background'></div>
			{touchScreen ? (
				<>
					<AboutMe />
					<Cv />
				</>
			) : (
				<div className='home-top'>
					<AboutMe />
					<Cv />
				</div>
			)}
			<Projects />
		</main>
	)
}
