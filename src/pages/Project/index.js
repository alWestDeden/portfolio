import React, { useEffect } from "react"
import { useParams } from "react-router"
import { Link, useLocation } from "react-router-dom"
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
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let projects
	let title1
	let home
	switch (language) {
		case "fr":
			projects = projects_fr
			title1 = "Contraintes"
			home = "retour"
			break
		case "en":
			projects = projects_en
			title1 = "Constraints"
			home = "home"
			break
		default:
	}
	// get the project's id from url
	const { id } = useParams()
	const selectedProject = projects.filter((project) => project.id === id)
	const { name, image_74, image_74W, details, constraints, technologies, code, site } = selectedProject[0]
	// allow the use of HTML tags in the JSON file
	const detailsHTML = { __html: details }
	const constraintsHTML = { __html: constraints }
	// correct the opening of a project at the same scrolling position as previous project
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return (
		<section className={addClassExtension(touchScreen, "selected")}>
			<div className='square-background'></div>
			<div className={addClassExtension(touchScreen, "selected-left")}>
				<picture>
					<source srcSet={image_74W} type='image/webp' />
					<img
						className={addClassExtension(touchScreen, "selected-left-image")}
						fetchpriority='low'
						src={image_74}
						height='330'
						width='330'
						alt={name}
					/>
				</picture>
				{!touchScreen ? (
					""
				) : (
					<div className='selected-left-links--ts'>
						<Link className='left-link--ts' to={site} target='_blank' rel='noreferrer' aria-label={`site ${name}`}>
							<FontAwesomeIcon className='left-link-icon--ts' icon={faGlobe} />
							<p>site</p>
						</Link>
						<Link className='left-link--ts' to={code} target='_blank' rel='noreferrer' aria-label={`code ${name}`}>
							<FontAwesomeIcon className='left-link-icon--ts' icon={faGithub} />
							<p>code</p>
						</Link>
					</div>
				)}
			</div>
			<div className={addClassExtension(touchScreen, "selected-right")}>
				<h4 className={`selected-right-title ${id}`}>{name}</h4>
				<p className='selected-right-details' dangerouslySetInnerHTML={detailsHTML}></p>
				<h5>{title1}</h5>
				<p className='selected-right-constraints' dangerouslySetInnerHTML={constraintsHTML}></p>
				<h5>Technologies :</h5>
				<div className='selected-right-tech'>
					{technologies.map((technology, index) => {
						// use a SVG file for figma's icon (multiple colors)
						if (technology === "Figma") {
							return (
								<React.Fragment key={`${technology}-${index}`}>
									<img className={`selected-right-tech-icon color--${technology}`} src={figma} alt='figma' />
									<p className='selected-right-tech-name'>{technology}</p>
								</React.Fragment>
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
								case "React-Router":
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
									break
							}
							return (
								<React.Fragment key={`${technology}-${index}`}>
									{techIcon ? (
										<>
											<FontAwesomeIcon className={`selected-right-tech-icon color--${technology}`} icon={techIcon} />
											<p className='selected-right-tech-name'>{technology}</p>
										</>
									) : (
										<p className='selected-right-tech-name'>{technology}</p>
									)}
								</React.Fragment>
							)
						}
					})}
				</div>
				<div className={addClassExtension(touchScreen, "selected-right-icons")}>
					{touchScreen ? (
						""
					) : (
						<>
							<Link className='right-link' to={site} target='_blank' rel='noreferrer' aria-label={`site ${name}`}>
								<FontAwesomeIcon className='right-link-icon' icon={faGlobe} />
								<p>site</p>
							</Link>
							<Link className='right-link' to={code} target='_blank' rel='noreferrer' aria-label={`site ${code}`}>
								<FontAwesomeIcon className='right-link-icon' icon={faGithub} />
								<p>code</p>
							</Link>
						</>
					)}
					<Link className='right-link' to='/'>
						<FontAwesomeIcon className='right-link-icon' icon={faHouse} />
						<p>{home}</p>
					</Link>
				</div>
			</div>
		</section>
	)
}
