import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSwipeable } from "react-swipeable"
import ReactTyped from "react-typed"
import { useLanguage } from "../../functions/LanguageContext"
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { showProject, hideProject } from "../../functions/selectProject"
import { projects_fr, projects_en } from "../../data/projects"
import { tips } from "../../data/tips"
import "../../style/projects.scss"

export default function Projects() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	// trick to use the hook useNavigate at other levels
	const navigate = useNavigate()
	// select data regarding language
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
	// project's index for cursor
	const [index, setIndex] = useState(null)
	// project's index for Touch Screen
	const [indexTS, setIndexTS] = useState(0)
	// manage swipe for react-swipeable
	const [direction, setDirection] = useState("")
	// react-swipeable
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
			{/* Cursor or Touch Screen versions  */}
			{!touchScreen ? (
				// Cursor version
				<section className='projects'>
					<div className='project'>
						<span className='project-tip'>
							{/* react-typed */}
							<ReactTyped strings={tips} typeSpeed={50} startDelay={100} backSpeed={25} loop />
						</span>
						{projects.map((project) => {
							const { nb, id, name, image_11, image_74, description } = project
							return (
								<React.Fragment key={`${id}-fragment`}>
									<figure key={`${id}-figure`} id={`project--${nb}`} className={`project-figure project-figure--${nb}`}>
										<picture key={`${id}-picture`}>
											<source key={`${id}-image_74`} srcSet={image_74} media='(max-width: 896px)' />
											<source key={`${id}-image_11`} srcSet={image_11} media='(min-width: 896px)' />
											<img key={`${id}-image`} className='project-figure-image' src={image_74} alt={name} />
										</picture>
										<figcaption key={`${id}-caption`} className='project-figure-caption'>
											<div key={`${id}-caption-container`}>
												<p key={`${id}-caption-name`} className={`${id}`}>
													{name}
												</p>
												<p key={`${id}-caption-description`}>{description}</p>
											</div>
										</figcaption>
										<div key={`project--masks-${nb}`} id={`project--masks-${nb}`} className='project-figure--masks'>
											{[...Array(3)].map((x, i) => (
												<div key={`mask${i}`} className={`figure--mask figure--mask-${i}`}></div>
											))}
										</div>
									</figure>
								</React.Fragment>
							)
						})}
					</div>
					<ul className='projects-menu'>
						{projects.map((project) => {
							const { nb, id, name } = project
							return (
								<li key={`${id}-list`} className='projects-menu-list'>
									<button
										key={`${id}-button`}
										className={`projects-menu-button ${id}--hover`}
										onMouseEnter={(e) => {
											e.preventDefault()
											showProject(nb)
											setIndex(nb)
										}}
										onMouseLeave={(e) => {
											e.preventDefault()
											setIndex(null)
											hideProject(nb, index)
										}}
										onClick={(e) => {
											e.preventDefault()
											navigate(`/project/${id}`)
										}}
										aria-label={`Projet ${name}`}>
										{name}
									</button>
								</li>
							)
						})}
					</ul>
				</section>
			) : (
				// Touch Screen version
				<section className='projects projects--ts'>
					{/* {...handlers}  for react-swipeable */}
					<div key='touch-screen-project' {...handlers} className='project project--ts'>
						{projects.map((project) => {
							const { nb, id, name, image_11, image_52, description } = project
							return (
								<figure
									key={`${id}-figure--ts`}
									id={id}
									className={`project-figure figure--ts ${indexTS === nb ? direction : "hide"}`}>
									<picture key={`${id}-picture--ts`}>
										<source key={`${id}-image_11--ts`} srcSet={image_11} media='(max-width: 400px)' />
										<source key={`${id}-image_52--ts`} srcSet={image_52} media='(min-width: 400px)' />
										<img key={`${id}-image--ts`} className='project-figure-image image--ts' src={image_52} alt={name} />
									</picture>
									<figcaption key={`${id}-caption--ts`} className='project-figure-caption caption--ts'>
										<div key={`${id}-caption--ts`}>
											<div key={`${id}-caption-container--ts`} className='title--ts'>
												<h4 key={`${id}-caption-title--ts`}>Projet : </h4>
												<p key={`${id}-name--ts`} className={`${id}`}>
													{name}
												</p>
											</div>
											<p key={`${id}-caption-description`}>{description}</p>
										</div>
									</figcaption>
								</figure>
							)
						})}
						<div className='bullets--ts'>
							{projects.map((project) => {
								const { nb } = project
								return (
									<div key={`bullet--${nb}`} className={indexTS === nb ? "bullet--ts bullet-active--ts" : "bullet--ts"}></div>
								)
							})}
						</div>
					</div>
				</section>
			)}
		</>
	)
}
