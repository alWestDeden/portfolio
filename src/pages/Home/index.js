import { useState } from "react"
import { showProjectEnter, showProjectHover, hideProjectLeave } from "../../interaction/selectProject"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons"
// !!!!!!! modify and optimize image to jpg !!!!!!!!!
import meSVG from "../../images/me-v2b.png"
import "../../style/Home.scss"
// detect if the device support touch events
function isTouchDevice() {
	return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
}
const touchScreen = isTouchDevice()
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
		<div className='home'>
			<div className='about'>
				<div className='me-svg'>
					<img src={meSVG} alt='Un dessin de moi' />
				</div>
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
				<div className='projects-cursor'>
					<div className='project-cursor'>
						<span>
							Choisisez un projet
							<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
						</span>
						{projects.map((project) => (
							<figure key={project.id} id={project.id} className='figure-cursor hide'>
								<img src={project.img} alt={project.name} />
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
				<div
					id='touchProjects'
					className='projects-touch'
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
							className={`figure-touch figure-touch-${
								index === project.nb ? (deltaX < 0 ? "display-left" : "display-right") : "hide"
							}`}>
							<img src={project.img} alt={project.name} />
							<figcaption>{project.description}</figcaption>
						</figure>
					))}
				</div>
			)}
		</div>
	)
}
