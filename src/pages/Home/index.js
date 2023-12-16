import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import AboutMe from "../../components/AboutMe"
import Projects from "../../components/Projects"
import Cv from "../../components/Cv"
import Knowledges from "../../components/Knowledges"
import Description from "../../components/Description"
import "../../style/Home.scss"

export default function Home() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let projectsTitle
	switch (language) {
		case "fr":
			projectsTitle = "Projets"
			break
		case "en":
			projectsTitle = "Projects"
			break
		default:
	}
	return (
		<main className={addClassExtension(touchScreen, "home")}>
			{touchScreen ? (
				<>
					<AboutMe />
					<Projects />
					<Cv />
					<Description />
					<Knowledges />
				</>
			) : (
				// use a container for desktop
				<>
					<div className='home-top'>
						<AboutMe />
						<Cv />
					</div>
					<Knowledges />
					<div className='home-bottom-container'>
						<h4>{projectsTitle}</h4>
						<div className='home-bottom'>
							<Description />
							<Projects />
						</div>
					</div>
				</>
			)}
		</main>
	)
}
