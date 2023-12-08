import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
import ReactTyped from "react-typed"
import { showProject, hideProject } from "../../functions/selectProject"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRightLong, faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import "../../style/projects.scss"

export default function Projects({ touchScreen }) {
	const [index, setIndex] = useState(null)
	const [indexTS, setIndexTS] = useState(0)
	const [direction, setDirection] = useState("")
	const navigate = useNavigate()
	const handlers = useSwipeable({
		onSwipedLeft: () => {
			indexTS === projects.length - 1 ? setIndexTS(0) : setIndexTS(indexTS + 1)
			setDirection("slide-right")
		},
		onSwipedRight: () => {
			indexTS === 0 ? setIndexTS(projects.length - 1) : setIndexTS(indexTS - 1)
			setDirection("slide-left")
		},
		onSwipeStart: () => {
			if (direction === "slide-left") {
				document.getElementById(projects[indexTS].id).classList.remove("slide-left")
			}
			if (direction === "slide-right") {
				document.getElementById(projects[indexTS].id).classList.remove("slide-right")
			}
		},
		onTap: () => {
			navigate(`/project/${projects[indexTS].id}`)
		},
	})
	return (
		<>
			{!touchScreen ? (
				<section key='cursor' className='projects'>
					<div className='project'>
						<div className='project--mask'></div>
						<span className='project-tip'>
							<ReactTyped
								strings={["   Choisissez un projet", "   Puis cliquez dessus", "", ""]}
								typeSpeed={100}
								startDelay={100}
								backSpeed={50}
								loop
							/>
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
										<div key={`${project.id}-caption`}>
											<p className={`${project.id}`}>{project.name}</p>
											<p>{project.description}</p>
										</div>
									</figcaption>
									<div id={`project--masks-${project.nb + 1}`} className='project-figure--masks'>
										{[...Array(14)].map((x, i) => (
											<div key={`mask${i}`} className={`figure--mask`}></div>
										))}
									</div>
								</figure>
							</>
						))}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => (
							<li key={`${project.id}-list`}>
								<button
									key={`${project.id}-button`}
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
						{projects.map((project) => {
							const { nb, id, name, image, description } = project
							return (
								<figure
									key={`${id}-figure`}
									id={id}
									className={`project-figure figure--ts ${indexTS === nb ? direction : "hide"}`}>
									<img key={`${id}-image`} className='project-figure-image image--ts' src={image} alt={name} />
									<figcaption key={`${id}-caption`} className='project-figure-caption caption--ts'>
										<div key={`${id}-caption`}>
											<div className='title--ts'>
												<h4>Projet : </h4>
												<p className={`${id}`}>{name}</p>
											</div>
											<p>{description}</p>
										</div>
									</figcaption>
								</figure>
							)
						})}
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
