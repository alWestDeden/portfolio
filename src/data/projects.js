import argentbank from "../images/argentbank.jpg"
import booki from "../images/booki.jpg"
import kasa from "../images/kasa.jpg"
import nina from "../images/nina.jpg"
import ohmyfood from "../images/ohmyfood.jpg"
const projects = [
	{
		nb: 0,
		id: "booki",
		name: "Booki",
		image: booki,
		description: "Plateforme de recherche d'hébergements et d'activités",
		details:
			"A partir de la maquette Figma, on a eu à développer le site codé uniquement en HTML & CSS. Une note de synthèse spécifiait les attentes fonctionnelles et téchniques.",
		constraints:
			"Le challenge pour ce projet était de réaliser les attentes au niveau du site (Cartes d'hébergements et d'activités, filtres de recherche, champ de recherche, ...), mais il n'était pas demandé à ce qu'il soit fonctionnel. Le site a dû être pensé en 'desktop first' et être responsive (mobile, tablette, desktop).",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://github.com/alWestDeden/bushido/tree/main/Projet3",
		site: "https://alwestdeden.github.io/bushido/Projet3/index.html",
	},
	{
		nb: 1,
		id: "ohmyfood",
		name: "Oh My Food !",
		image: ohmyfood,
		description: "Site de réservation et de composition de menus",
		details:
			"A partir d'un code de départ et de la maquette Figma, il a fallu développer le Front-End site uniquement en HTML & CSS. La maquette Figma contenait les élements de l'interface ainsi que les animations attendues.",
		constraints:
			"Les attentes pour ce projet étaient que le site soit responsive et 'mobile first'. Une attention particulières était portée sur les animations; les coeurs des 'likes' doivent se remplir progressivement, les menus doivent apparaîtres en cascade et les boutons doivent réagir aux survols et aux clics. Il fallait impérativement utiliser SASS.",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://alwestdeden.github.io/Projet4/index.html",
		site: "https://github.com/alWestDeden/Projet4",
	},
	{
		nb: 2,
		id: "kasa",
		name: "Kasa",
		image: kasa,
		description: "Plateforme de location d'appartements entre particuliers",
		details:
			"A partir de la maquette Figma, il a fallu développer l'application avec React et React-Router. Le Back-End n'étant pas développé on le simule en récupérant les informations de chaque appartements dans un fichier JSON. SASS a été utilisé pour génerer le style CSS.",
		constraints:
			"Il était attendu que le carrousel boucle et que la navigation n'apparaise pas quand il y a qu'une seule image. Les collapse doivent par défaut être fermés et crées à partie d'un seul composant.",
		technologies: ["CSS", "Figma", "GitHub", "HTML", "JavaScript", "React", "React-Router", "SASS"],
		code: "https://github.com/alWestDeden/Projet8-kasa",
		site: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 3,
		id: "nina",
		name: "Nina Carducci",
		image: nina,
		description: "Portfolio de la photographe Nina Carducci",
		details:
			"Ici, le challenge était d'optimiser le site tant sur les performances que sur le SEO. Ensuite, il a fallu mettre en place le référencement local à l'aide de Schema.org, ajouter les metas pour les réseaux sociaux et le conformer aux exigences d'accessibilité.",
		constraints:
			"Il était attendu qu'une fois optimisé le site passe les audits Lighthouse (performances et SEO) et WAVE (accessibilité).",
		technologies: ["CSS", "GitHub", "HTML", "JavaScript", "Lighthouse", "WAVE"],
		code: "https://github.com/alWestDeden/Projet9_new",
		site: "https://alwestdeden.github.io/Projet9_new/index.html",
	},
	{
		nb: 4,
		id: "argent",
		name: "ARGENTBANK",
		image: argentbank,
		description: "Application Web Bancaire",
		details:
			"En se basant sur sur des pages HTML statique j'ai développé à l'aide de React, React-Router et Redux un site permettant à l'utilisateur autorisé de se connecter en utilisant un Token et de changer son nom d'utilisateur. Il fallait aussi fournir un fichier Swagger décrivant les requêtes nécessaires pour afficher les différents compte et leurs transactions.",
		constraints:
			"Il était attendu que la connexion soit sécurisée et que toutes les informations de requête (methode HTTP, route, paramètres, réponses, ...) soit fournies.",
		technologies: ["CSS", "FontAwesome", "GitHub", "HTML", "JavaScript", "React", "React-Router", "Redux", "SASS", "Swagger"],
		code: "https://github.com/alWestDeden/ArgentBank-website",
		site: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
export default projects
