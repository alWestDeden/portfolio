import { useTouchScreen } from "../../functions/ScreenTypeContext"
import addClassExtension from "../../functions/addClassExtension"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Cv from "../../components/Cv"
import "../../style/Home.scss"

export default function Home() {
	const { touchScreen } = useTouchScreen()
	return (
		<main className={addClassExtension(touchScreen, "home")}>
			<div className='square-background'></div>
			{touchScreen ? (
				<>
					<AboutMe />
					<Cv />
				</>
			) : (
				// use a container for desktop
				<div className='home-top'>
					<AboutMe />
					<Cv />
				</div>
			)}
			<Projects />
		</main>
	)
}
