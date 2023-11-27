import { useContext } from "react"
import { DeviceContext } from "../../index"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import "../../style/header.scss"

export default function Header() {
	const touchScreen = useContext(DeviceContext)
	return (
		<div className={!touchScreen ? "header" : "header header-ts"}>
			<div className='title'>
				<h3>portfolio</h3>
				<h1>{!touchScreen ? "BEN AOUMAR BOUMEDIENE" : "BAB"}</h1>
				<h2>Intégrateur Web</h2>
			</div>
			<nav className='navigation'>
				<a href='https://www.linkedin.com/in/deden-a-844302124/details/experience/'>
					<FontAwesomeIcon className='icon' icon={faLinkedin} />
				</a>
				<a href='https://github.com/alWestDeden?tab=repositories'>
					<FontAwesomeIcon className='icon' icon={faGithub} />
				</a>
				<a href='mailto:baboumediene@gmail.com'>
					<FontAwesomeIcon className='icon' icon={faEnvelope} />
				</a>
			</nav>
		</div>
	)
}
