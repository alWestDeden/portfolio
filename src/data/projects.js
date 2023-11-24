import Project08IMG from "../images/project_8.jpg"
import Project09IMG from "../images/project_9.jpg"
import Project11IMG from "../images/project_11.jpg"
const projects = [
	{
		nb: 1,
		id: "project08",
		name: "Kasa",
		img: Project08IMG,
		description:
			"Le challenge de ce projet était de développer une application React en récupérant dans un fichier JSON les élements à afficher.",
	},
	{
		nb: 2,
		id: "project09",
		name: "Nina Carducci",
		img: Project09IMG,
		description: "Dans ce projet il a fallu optimiser le site (code, images, SEO) pour valider les audits Lighthouse et WAVE.",
	},
	{
		nb: 3,
		id: "project11",
		name: "ARGENTBANK",
		img: Project11IMG,
		description:
			"Le challenge de ce projet était de développer une application React utilisant Redux pour une connexion sécurisée par Token.",
	},
]
export default projects
