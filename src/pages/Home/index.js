import { useState } from "react"
import { useSwipeable } from "react-swipeable"
import { showProjectEnter, showProjectHover, hideProjectLeave } from "../../interaction/selectProject"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
// !!!!!!! modify and optimize image to jpg !!!!!!!!!
import meSVG from "../../images/me-v2a.png"
import "../../style/Home.scss"
// detect if the device support touch events
function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}
const touchScreen = isTouchDevice()
export { touchScreen }
export default function Home() {
	// save where the mouse was before it gets hover another button
	const [currentProject, setCurrentProject] = useState(null)
	const [index, setIndex] = useState(0)
	const [direction, setDirection] = useState("")
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			index === projects.length - 1 ? setIndex(0) : setIndex(index + 1)
			setDirection("slide-right")
		},
		onSwipedRight: () => {
			index === 0 ? setIndex(projects.length - 1) : setIndex(index - 1)
			setDirection("slide-left")
		},
		onSwipeStart: () => {
			if (direction === "slide-left") {
				document.getElementById(projects[index].id).classList.remove("slide-left")
			}
			if (direction === "slide-right") {
				document.getElementById(projects[index].id).classList.remove("slide-right")
			}
		},
	})
	return (
		// for classes names a '' at the end mean for cursor events and a '-ts' mean for Touch Screen events
		<div className='home'>
			{touchScreen === true ? <img className='me-svg-ts' src={meSVG} alt='Un dessin de moi' /> : ""}
			<div className={!touchScreen ? "about" : "about about-ts"}>
				{/* <div className={!touchScreen ? "about" : "about-ts"}> */}
				<p>
					Bienvenue sur mon Portfolio,
					<br />
					<br />
					De formation technique industrielle 'BTS Assistant Technique d'Ingenieur', j'ai souhaité valider des connaissances que
					j'avais acquis dans le développement Web avec l'envie de réorienter ma carrière professionnelle.
					<br />
					<br />
					Vous trouverez sur ce site quelques uns des Projets validés dans le cadre de la formation d'Intégrateur Web que j'ai
					suivi chez OpenClassRooms.
				</p>
			</div>
			{!touchScreen ? (
				<div className='projects'>
					<div className='project'>
						<img className='me-svg' src={meSVG} alt='Un dessin de moi' />
						<span>
							Choisisez un projet
							<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
						</span>
						{projects.map((project) => (
							<figure key={project.id} id={project.id} className='figure hide'>
								<img src={project.img_169} alt={project.name} />
								<figcaption className='bottom-caption'>{project.description}</figcaption>
							</figure>
						))}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => (
							<li key={project.id}>
								<button
									className={`project-name-${project.nb}`}
									onMouseEnter={(e) => {
										e.preventDefault()
										setCurrentProject(project.id)
										showProjectEnter(project.id)
									}}
									onMouseOver={(e) => {
										e.preventDefault()
										showProjectHover(currentProject)
										showProjectEnter(project.id)
										setCurrentProject(project.id)
									}}
									onMouseLeave={(e) => {
										e.preventDefault()
										hideProjectLeave(project.id)
										setCurrentProject(null)
									}}>
									{project.name}
								</button>
							</li>
						))}
					</ul>
				</div>
			) : (
				<div className='projects projects-ts'>
					<div {...handlers} id='touchProjects' className='project project-ts'>
						{projects.map((project) => (
							// <figure key={project.id} id={project.id} className='figure-ts'>
							<figure
								key={project.id}
								id={project.id}
								className={`figure figure-ts ${index === project.nb ? direction : "hide"}`}>
								<img src={project.img_916} alt={project.name} />
								<figcaption className='bottom-caption bottom-caption-ts'>
									<div className='caption-text'>
										<div className='caption-title'>
											<h4>Projet : </h4>
											<p className={`project-name-${project.nb}`}>{project.name}</p>
										</div>
										<p>{project.description}</p>
									</div>
								</figcaption>
							</figure>
						))}
						<div className='arrows-ts'>
							<FontAwesomeIcon className='icon' icon={faChevronLeft} />
							<FontAwesomeIcon className='icon' icon={faChevronRight} />
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
