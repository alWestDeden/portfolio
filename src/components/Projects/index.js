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
						{projects.map((project) => {
							const { nb, id, name, image, description } = project
							return (
								<>
									<figure key={`${id}-figure`} id={`project--${nb}`} className={`project-figure project-figure--${nb}`}>
										<img key={`${id}-image`} className='project-figure-image' src={image} alt={name} />
										<figcaption key={`${id}-caption`} className='project-figure-caption'>
											<div key={`${id}-caption`}>
												<p className={`${id}`}>{name}</p>
												<p>{description}</p>
											</div>
										</figcaption>
										<div id={`project--masks-${nb}`} className='project-figure--masks'>
											{[...Array(14)].map((x, i) => (
												<div key={`mask${i}`} className={`figure--mask`}></div>
											))}
										</div>
									</figure>
								</>
							)
						})}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => {
							const { nb, id, name } = project
							return (
								<li key={`${id}-list`}>
									<button
										key={`${id}-button`}
										className={`projects-menu-button ${id}--hover`}
										onMouseEnter={(e) => {
											e.preventDefault()
											setIndex(nb)
											showProject(nb, index)
										}}
										onMouseLeave={(e) => {
											e.preventDefault()
											hideProject(index)
											setIndex(null)
										}}
										onClick={(e) => {
											navigate(`/project/${id}`)
										}}>
										{name}
									</button>
								</li>
							)
						})}
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
											<div key={`${id}-caption-title`} className='title--ts'>
												<h4>Projet : </h4>
												<p key={`${id}-name`} className={`${id}`}>
													{name}
												</p>
											</div>
											<p key={`${id}-caption-description`}>{description}</p>
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
