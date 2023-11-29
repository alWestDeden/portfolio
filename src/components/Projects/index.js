import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
import { showProjectEnter, showProjectHover, hideProjectLeave } from "../../interaction/selectProject"
import projects from "../../data/projects"
// import meSVG from "../../images/me-v2a.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import "../../style/projects.scss"

export default function Projects({ touchScreen }) {
	// save where the mouse was before it gets hover another button
	const [currentProject, setCurrentProject] = useState(null)
	const [index, setIndex] = useState(0)
	const [direction, setDirection] = useState("")
	const navigate = useNavigate()
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
		onTap: () => {
			navigate(`/project/${projects[index].id}`)
		},
	})
	return (
		<>
			{!touchScreen ? (
				<section className='projects'>
					<div className='project'>
						{/* <img className='me-svg' src={meSVG} alt='Un dessin de moi' /> */}
						<span>
							Choisisez un projet
							<FontAwesomeIcon className='icon' icon={faArrowRightLong} />
						</span>
						{projects.map((project) => (
							<figure key={project.id} id={project.id} className='figure hide'>
								<img src={project.img_169} alt={project.name} />
								<figcaption className='caption'>{project.description}</figcaption>
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
									}}
									onClick={(e) => {
										navigate(`/project/${project.id}`)
									}}>
									{project.name}
								</button>
							</li>
						))}
					</ul>
				</section>
			) : (
				<section className='projects projects-ts'>
					<div {...handlers} className='project project-ts'>
						{projects.map((project) => (
							// <figure key={project.id} id={project.id} className='figure-ts'>
							<figure
								key={project.id}
								id={project.id}
								className={`figure figure-ts ${index === project.nb ? direction : "hide"}`}>
								<img src={project.img_916} alt={project.name} />
								<figcaption className='caption caption-ts'>
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
				</section>
			)}
		</>
	)
}
