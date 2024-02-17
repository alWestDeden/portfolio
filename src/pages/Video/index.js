import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useLanguage } from "../../functions/LanguageContext"
import { projects_fr, projects_en } from "../../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse, faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import "../../style/Video.scss"

export default function Video() {
	const { language } = useLanguage()
	let backward
	let projects
	switch (language) {
		case "fr":
			projects = projects_fr
			backward = "retour"
			break
		case "en":
			projects = projects_en
			backward = "return"
			break
		default:
	}
	// get the project's id from url
	const { id } = useParams()
	const selectedProject = projects.filter((project) => project.id === id)
	const { name, videolink } = selectedProject[0]
	return (
		<div className='video'>
			<iframe
				title={`${name}-video`}
				className='video-youtube'
				src={videolink}
				autoplay='0'
				modestbranding='1'
				rel='0'
				showinfo='0'
				allowfullscreen></iframe>
			<div className='video-links'>
				<Link className='video-link' to={`/project/${id}`}>
					<FontAwesomeIcon className='video-link-icon' icon={faArrowLeft} />
					<p>{backward}</p>
				</Link>
				<Link className='video-link' to='/'>
					<FontAwesomeIcon className='video-link-icon' icon={faHouse} />
					<p>home</p>
				</Link>
			</div>
		</div>
	)
}
