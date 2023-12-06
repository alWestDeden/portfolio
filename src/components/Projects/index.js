import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
// import { showProjectEnter, showProjectHover, hideProjectLeave } from "../../interaction/selectProject"
import { showProject, hideProject } from "../../interaction/selectProject"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import "../../style/projects.scss"

export default function Projects({ touchScreen }) {
	const [index, setIndex] = useState(null)
	console.log(index)
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
	// const [ selectedProject, setSelectedProject ] = useState(null)
	return (
		<>
			{!touchScreen ? (
				<section key='cursor' className='projects'>
					<div className='project'>
						<div className='project--mask'></div>
						<span className='project-tip'>
							Choisisez un projet
							<FontAwesomeIcon className='project-tip-icon' icon={faArrowRightLong} />
						</span>
						{projects.map((project) => (
							<>
								<figure
									key={`${project.id}-figure`}
									id={`project--${project.nb + 1}`}
									className={`project-figure project-figure--${project.nb + 1}`}>
									<img key={`${project.id}-image`} className='project-figure-image' src={project.image} alt={project.name} />
									<figcaption key={`${project.id}-caption`} className='project-figure-caption'>
										{project.description}
									</figcaption>
									<div id={`project--masks-${project.nb + 1}`} className='project-figure--masks'>
										{[...Array(40)].map((x, i) => (
											<div key={`mask${i}`} className={`figure--mask`}></div>
										))}
									</div>
								</figure>
							</>
						))}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => (
							<li key={project.id}>
								<button
									key={project.id}
									className={`projects-menu-button ${project.id}--hover`}
									onMouseEnter={(e) => {
										e.preventDefault()
										setIndex(project.nb + 1)
										showProject(project.nb + 1, index)
									}}
									onMouseLeave={(e) => {
										e.preventDefault()
										hideProject(project.nb + 1)
										setIndex(null)
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
				<section key='touch-screen' className='projects projects--ts'>
					<div {...handlers} className='project project--ts'>
						{projects.map((project) => (
							<figure
								key={project.id}
								id={project.id}
								className={`project-figure figure--ts ${index === project.nb ? direction : "hide"}`}>
								<img className='project-figure-image image--ts' src={project.image} alt={project.name} />
								<figcaption className='project-figure-caption caption--ts'>
									<div>
										<div className='title--ts'>
											<h4>Projet : </h4>
											<p className={`${project.id}`}>{project.name}</p>
										</div>
										<p>{project.description}</p>
									</div>
								</figcaption>
							</figure>
						))}
						<div className='arrows--ts'>
							<FontAwesomeIcon className='arrow-icon--ts' icon={faChevronLeft} />
							<FontAwesomeIcon className='arrow-icon--ts' icon={faChevronRight} />
						</div>
					</div>
				</section>
			)}
		</>
	)
}
