import { useParams } from "react-router"
import { Link } from "react-router-dom"
import projects from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faSquare } from "@fortawesome/free-solid-svg-icons"
import { faCss3Alt, faFigma, faHtml5, faSquareJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"
import "../../style/Project.scss"

export default function Project() {
	const { id } = useParams()
	const selectedProject = projects.filter((project) => project.id === id)
	const { name, img_169, details, constraints, technologies } = selectedProject[0]
	return (
		<section className='selected-project'>
			<img className='selected-project-img' src={img_169} alt={name} />
			<article className='selected-project-info'>
				<h4 className={`title title-${id}`}>{name}</h4>
				<p className='details'>{details}</p>
				<h5>Contraintes :</h5>
				<p className='constraints'>{constraints}</p>
				<h5>Technologies :</h5>
				<div className='icons'>
					{technologies.map((technology) => {
						let techIcon
						switch (technology) {
							case "CSS":
								techIcon = faCss3Alt
								break
							case "Figma":
								techIcon = faFigma
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
								techIcon = faSquare
								break
							default:
						}
						return (
							<>
								<FontAwesomeIcon className='tech-icon' icon={techIcon} />
								<p className='tech-name'>{technology}</p>
							</>
						)
					})}
				</div>
				<div className='return'>
					<Link to='/'>
						<FontAwesomeIcon className='return-home' icon={faHouse} />
						<p className='return-text'>retour</p>
					</Link>
				</div>
			</article>
		</section>
	)
}
