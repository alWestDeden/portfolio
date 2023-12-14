import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../../style/header.scss"

export default function Header() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let subtitle
	switch (language) {
		case "fr":
			subtitle = "Développeur/Intégrateur Web"
			break
		case "en":
			subtitle = "Web Developer/Integrator"
			break
		default:
	}
	return (
		<header className={addClassExtension(touchScreen, "header")}>
			<div className='title'>
				<h1>{!touchScreen ? "BEN AOUMAR BOUMEDIENE" : "BAB"}</h1>
				<h2 className={addClassExtension(touchScreen, "subtitle")}>{subtitle}</h2>
			</div>
			<nav className='navigation'>
				<a href='https://github.com/alWestDeden?tab=repositories' target='_blank' rel='noreferrer' aria-label='GitHub'>
					<FontAwesomeIcon className='icon' icon={faGithub} />
				</a>
				<a
					href='https://www.linkedin.com/in/deden-a-844302124/details/experience/'
					target='_blank'
					rel='noreferrer'
					aria-label='Linked In'>
					<FontAwesomeIcon className='icon' icon={faLinkedin} />
				</a>
				<a href='mailto:baboumediene@gmail.com' aria-label='Contact'>
					<FontAwesomeIcon className='icon' icon={faEnvelope} />
				</a>
			</nav>
		</header>
	)
}
