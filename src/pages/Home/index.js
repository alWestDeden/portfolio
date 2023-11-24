import { useState } from "react"
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
console.log(touchScreen)
export default function Home() {
	// save where the mouse was before it gets hover another button
	const [currentProject, setCurrentProject] = useState(null)
	const [index, setIndex] = useState(1)
	const [touchStartX, setTouchStartX] = useState(null)
	const [deltaX, setDeltaX] = useState(null)
	// manage the touch events to navigate between projects
	function touchEndX(touchEndX) {
		setDeltaX(touchStartX - touchEndX)
		if (deltaX > 1) {
			setIndex(index === projects.length ? 1 : index + 1)
			setTouchStartX(null)
		}
		if (deltaX < -1) {
			setIndex(index === 1 ? projects.length : index - 1)
			setTouchStartX(null)
		}
	}
	return (
		// for classes names a '-c' at the end mean for cursor events and a '-ts' mean for Touch Screen events
		<div className='home'>
			<div className={!touchScreen ? "about-c" : "about-ts"}>
				<img className={!touchScreen ? "me-svg-c" : "me-svg-ts"} src={meSVG} alt='Un dessin de moi' />
				<p>
					Bienvenue sur mon Portfolio,
					<br />
					De formation technique industrielle 'BTS Assistant Technique d'Ingenieur', j'ai souhaité valider des connaissances que
					j'avais acquis dans le développement Web avec l'envie de réorienter ma carrière professionnelle.
					<br />
					Vous trouverez sur ce site quelques uns des Projets validés dans le cadre de la formation d'Intégrateur Web que j'ai
					suivi chez OpenClassRooms.
				</p>
			</div>
			{!touchScreen ? (
				<div className='projects-c'>
					<div className='project-c'>
						<span>
							Choisisez un projet
							<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
						</span>
						{projects.map((project) => (
							<figure key={project.id} id={project.id} className='figure-c hide'>
								<img src={project.img_169} alt={project.name} />
								<figcaption>{project.description}</figcaption>
							</figure>
						))}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => (
							<li key={project.id}>
								<button
									className={`button-${project.nb}`}
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
				<div className='projects-ts'>
					<div
						id='touchProjects'
						className='project-ts'
						onTouchStart={(e) => {
							setTouchStartX(e.touches[0].clientX)
						}}
						onTouchEnd={(e) => {
							touchEndX(e.changedTouches[0].clientX)
						}}>
						{projects.map((project) => (
							<figure
								key={project.id}
								id={project.id}
								className={`figure-ts figure-ts-${index === project.nb ? (deltaX < 0 ? "move-left" : "move-right") : "hide"}`}>
								<img src={project.img_916} alt={project.name} />
								<figcaption>{project.description}</figcaption>
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
