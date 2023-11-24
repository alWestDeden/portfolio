import Project08IMG169 from "../images/project08_169.jpg"
import Project09IMG169 from "../images/project09_169.jpg"
import Project11IMG169 from "../images/project11_169.jpg"
import Project08IMG916 from "../images/project08_916.jpg"
import Project09IMG916 from "../images/project09_916.jpg"
import Project11IMG916 from "../images/project11_916.jpg"
const projects = [
	{
		nb: 1,
		id: "project08",
		name: "Kasa",
		img_169: Project08IMG169,
		img_916: Project08IMG916,
		description:
			"Le challenge de ce projet était de développer une application React en récupérant dans un fichier JSON les élements à afficher.",
	},
	{
		nb: 2,
		id: "project09",
		name: "Nina Carducci",
		img_169: Project09IMG169,
		img_916: Project09IMG916,
		description: "Dans ce projet il a fallu optimiser le site (code, images, SEO) pour valider les audits Lighthouse et WAVE.",
	},
	{
		nb: 3,
		id: "project11",
		name: "ARGENTBANK",
		img_169: Project11IMG169,
		img_916: Project11IMG916,
		description:
			"Le challenge de ce projet était de développer une application React utilisant Redux pour une connexion sécurisée par Token.",
	},
]
export default projects
