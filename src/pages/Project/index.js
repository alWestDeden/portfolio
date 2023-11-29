import { useContext, useEffect } from "react"
import { useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"
import { DeviceContext } from "../../index"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faHouse, faScroll } from "@fortawesome/free-solid-svg-icons"
import { faCss3Alt, faFigma, faGithub, faHtml5, faSquareJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import "../../style/Project.scss"

export default function Project() {
	const touchScreen = useContext(DeviceContext)
	const { id } = useParams()
	const selectedProject = projects.filter((project) => project.id === id)
	const { name, img_169, details, constraints, technologies, code, site } = selectedProject[0]
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return (
		<section className={!touchScreen ? "selected" : "selected selected--ts"}>
			<div className={!touchScreen ? "selected-left" : "selected-left selected-left--ts"}>
				<img
					className={!touchScreen ? "selected-left-image" : "selected-left-image selected-left-image-hide"}
					src={img_169}
					alt={name}
				/>
				<div className='selected-left-links'>
					<Link className='selected-left-links-link' to={site}>
						<FontAwesomeIcon className='selected-left-links-link-icon' icon={faGlobe} />
						<p>site</p>
					</Link>
					<Link className='selected-left-links-link' to={code}>
						<FontAwesomeIcon className='selected-left-links-link-icon' icon={faGithub} />
						<p>code</p>
					</Link>
				</div>
			</div>
			<div className={!touchScreen ? "selected-right" : "selected-right selected-right--ts"}>
				<h4 className={`selected-right-title selected-right-title-${id}`}>{name}</h4>
				<p className='selected-right-details'>{details}</p>
				<h5>Contraintes :</h5>
				<p className='selected-right-constraints'>{constraints}</p>
				<h5>Technologies :</h5>
				<div className='selected-right-tech'>
					{technologies.map((technology) => {
						let techIcon
						switch (technology) {
							case "CSS":
								techIcon = faCss3Alt
								break
							case "Figma":
								techIcon = faFigma
								break
							case "HTML":
								techIcon = faHtml5
								break
							case "JavaScript":
								techIcon = faSquareJs
								break
							case "React":
								techIcon = faReact
								break
							case "SASS":
								techIcon = faSass
								break
							case "Lighthouse":
							case "Swagger":
								techIcon = faScroll
								break
							default:
						}
						return (
							<>
								<FontAwesomeIcon className={`selected-right-tech-icon color--${technology}`} icon={techIcon} />
								<p className='selected-right-tech-name'>{technology}</p>
							</>
						)
					})}
				</div>
				<div className={!touchScreen ? "selected-right-return" : "selected-right-return selected-right-return--ts"}>
					<Link className='return-link' to='/'>
						<FontAwesomeIcon className='return-link-icon' icon={faHouse} />
						<p>retour</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
