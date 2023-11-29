import kasaIMG169 from "../images/kasa_169.jpg"
import ninaIMG169 from "../images/nina_169.jpg"
import argentIMG169 from "../images/argent_169.jpg"
import kasaIMG916 from "../images/kasa_916.jpg"
import ninaIMG916 from "../images/nina_916.jpg"
import argentIMG916 from "../images/argent_916.jpg"
const projects = [
	{
		nb: 0,
		id: "kasa",
		name: "Kasa",
		img_169: kasaIMG169,
		img_916: kasaIMG916,
		description: "Plateforme de location d'appartements entre particuliers",
		details:
			"A partir de la maquette Figma, il a fallu développer l'application avec React et React-Router. Le Back-End n'étant pas développé on le simule en récupérant les informations de chaque appartements dans un fichier JSON. SASS a été utilisé pour génerer le style CSS.",
		constraints:
			"Il était attendu que le carrousel boucle et que la navigation n'apparaise pas quand il y a qu'une seule image. Les collapse doivent par défaut être fermés et crées à partie d'un seul composant.",
		technologies: ["CSS", "HTML", "Figma", "JavaScript", "React", "React-Router", "SASS"],
		code: "https://github.com/alWestDeden/Projet8-kasa",
		site: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 1,
		id: "nina",
		name: "Nina Carducci",
		img_169: ninaIMG169,
		img_916: ninaIMG916,
		description: "Portfolio de la photographe Nina Carducci",
		details:
			"Ici, le challenge était d'optimiser le site tant sur les performances que sur le SEO. Ensuite, il a fallu mettre en place le référencement local à l'aide de Schema.org, ajouter les metas pour les réseaux sociaux et le conformer aux exigences d'accessibilité.",
		constraints:
			"Il était attendu qu'une fois optimisé le site passe les audits Lighthouse (performances et SEO) et WAVE (accessibilité).",
		technologies: ["CSS", "HTML", "JavaScript", "Lighthouse", "WAVE"],
		code: "https://github.com/alWestDeden/Projet9_new",
		site: "https://alwestdeden.github.io/Projet9_new/index.html",
	},
	{
		nb: 2,
		id: "argent",
		name: "ARGENTBANK",
		img_169: argentIMG169,
		img_916: argentIMG916,
		description: "Application Web Bancaire",
		details:
			"En se basant sur sur des pages HTML statique j'ai développé à l'aide de React, React-Router et Redux un site permettant à l'utilisateur autorisé de se connecter en utilisant un Token et de changer son nom d'utilisateur. Il fallait aussi fournir un fichier Swagger décrivant les requêtes nécessaires pour afficher les différents compte et leurs transactions.",
		constraints:
			"Il était attendu que la connexion soit sécurisée et que toutes les informations de requête (methode HTTP, route, paramètres, réponses, ...) soit fournies.",
		technologies: ["CSS", "HTML", "JavaScript", "React", "React-Router", "Redux", "SASS", "Swagger"],
		code: "https://github.com/alWestDeden/ArgentBank-website",
		site: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
export default projects
