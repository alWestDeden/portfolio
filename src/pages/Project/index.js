// import { useContext, useEffect } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"
// import { DeviceContext } from "../../index"
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import { projects_fr, projects_en } from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe, faHouse, faScroll } from "@fortawesome/free-solid-svg-icons"
import { faCss3Alt, faFontAwesome, faGithub, faHtml5, faSquareJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import figma from "../../images/figma.svg"
import "../../style/Project.scss"

export default function Project() {
	// const touchScreen = useContext(DeviceContext)
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let projects
	switch (language) {
		case "fr":
			projects = projects_fr
			break
		case "en":
			projects = projects_en
			break
		default:
	}
	const { id } = useParams()
	const selectedProject = projects.filter((project) => project.id === id)
	const { name, image, details, constraints, technologies, code, site } = selectedProject[0]
	const detailsHTML = { __html: details }
	const constraintsHTML = { __html: constraints }
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return (
		<section className={addClassExtension(touchScreen, "selected")}>
			<div className='square-background'></div>
			<div className={addClassExtension(touchScreen, "selected-left")}>
				<img className={addClassExtension(touchScreen, "selected-left-image")} src={image} alt={name} />
				{!touchScreen ? (
					""
				) : (
					<div className='selected-left-links--ts'>
						<Link className='left-link' to={site}>
							<FontAwesomeIcon className='left-link-icon' icon={faGlobe} />
							<p>site</p>
						</Link>
						<Link className='left-link' to={code}>
							<FontAwesomeIcon className='left-link-icon' icon={faGithub} />
							<p>code</p>
						</Link>
					</div>
				)}
			</div>
			<div className={addClassExtension(touchScreen, "selected-right")}>
				<h4 className={`selected-right-title ${id}`}>{name}</h4>
				<p className='selected-right-details' dangerouslySetInnerHTML={detailsHTML}></p>
				<h5>Contraintes :</h5>
				<p className='selected-right-constraints' dangerouslySetInnerHTML={constraintsHTML}></p>
				<h5>Technologies :</h5>
				<div className='selected-right-tech'>
					{technologies.map((technology) => {
						// use a SVG file for figma's icon (multiple colors)
						if (technology === "Figma") {
							return (
								<>
									<img className={`selected-right-tech-icon color--${technology}`} src={figma} alt='figma' />
									<p className='selected-right-tech-name'>{technology}</p>
								</>
							)
							// use Font Awesome's icons
						} else {
							let techIcon
							switch (technology) {
								case "CSS":
									techIcon = faCss3Alt
									break
								case "FontAwesome":
									techIcon = faFontAwesome
									break
								case "GitHub":
									techIcon = faGithub
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
						}
					})}
				</div>
				<div className={addClassExtension(touchScreen, "selected-right-icons")}>
					{touchScreen ? (
						""
					) : (
						<>
							<Link className='right-link' to={site}>
								<FontAwesomeIcon className='right-link-icon' icon={faGlobe} />
								<p>site</p>
							</Link>
							<Link className='right-link' to={code}>
								<FontAwesomeIcon className='right-link-icon' icon={faGithub} />
								<p>code</p>
							</Link>
						</>
					)}
					<Link className='right-link' to='/'>
						<FontAwesomeIcon className='right-link-icon' icon={faHouse} />
						<p>retour</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
