import argent_21 from "../images/argent_21.jpg"
import argent_34 from "../images/argent_34.jpg"
import argent_43 from "../images/argent_43.jpg"
import argent_45 from "../images/argent_45.jpg"
import argent_54 from "../images/argent_54.jpg"
import booki_21 from "../images/booki_21.jpg"
import booki_34 from "../images/booki_34.jpg"
import booki_43 from "../images/booki_43.jpg"
import booki_45 from "../images/booki_45.jpg"
import booki_54 from "../images/booki_54.jpg"
import kasa_21 from "../images/kasa_21.jpg"
import kasa_34 from "../images/kasa_34.jpg"
import kasa_43 from "../images/kasa_43.jpg"
import kasa_45 from "../images/kasa_45.jpg"
import kasa_54 from "../images/kasa_54.jpg"
import nina_21 from "../images/nina_21.jpg"
import nina_34 from "../images/nina_34.jpg"
import nina_43 from "../images/nina_43.jpg"
import nina_45 from "../images/nina_45.jpg"
import nina_54 from "../images/nina_54.jpg"
import ohmyfood_21 from "../images/ohmyfood_21.jpg"
import ohmyfood_34 from "../images/ohmyfood_34.jpg"
import ohmyfood_43 from "../images/ohmyfood_43.jpg"
import ohmyfood_45 from "../images/ohmyfood_45.jpg"
import ohmyfood_54 from "../images/ohmyfood_54.jpg"
// projects data in french
const projects_fr = [
	{
		nb: 0,
		id: "booki",
		name: "Booki",
		image_21: booki_21,
		image_34: booki_34,
		image_43: booki_43,
		image_45: booki_45,
		image_54: booki_54,
		description: "Plateforme de recherche d'hébergements et d'activités",
		details:
			"A partir de la maquette <a class='figma' href='https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design'>Figma</a>, on a eu à développer le site codé uniquement en <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. Une note de synthèse spécifiait les attentes fonctionnelles et téchniques.",
		constraints:
			"Le challenge pour ce projet était de réaliser les attentes au niveau du site (Cartes d'hébergements et d'activités, filtres de recherche, champ de recherche, ...), mais il n'était pas demandé à ce qu'il soit fonctionnel. Le site a dû être pensé en <span class='upfront'>desktop first</span> et être <span class='upfront'>responsive</span> (mobile, tablette, desktop).",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://github.com/alWestDeden/bushido/tree/main/Projet3",
		site: "https://alwestdeden.github.io/bushido/Projet3/index.html",
	},
	{
		nb: 1,
		id: "ohmyfood",
		name: "Oh My Food !",
		image_21: ohmyfood_21,
		image_34: ohmyfood_34,
		image_43: ohmyfood_43,
		image_45: ohmyfood_45,
		image_54: ohmyfood_54,
		description: "Site de réservation et de composition de menus",
		details:
			"A partir d'un code de départ et de la maquette <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1'>Figma</a>, il a fallu développer le <span class='upfront'>Front-End</span> du site uniquement en <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. La maquette <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1'>Figma</a> contenait les élements de l'interface ainsi que les animations attendues.",
		constraints:
			"Les attentes pour ce projet étaient que le site soit <span class='upfront'>responsive</span> et <span class='upfront'>mobile first</span>. Une attention particulières était portée sur les animations; les coeurs des <span class='upfront'>likes</span> doivent se remplir progressivement, les menus doivent apparaîtres en cascade et les boutons doivent réagir aux survols et aux clics. Il fallait impérativement utiliser <span class='upfront'>SASS</span>.",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://alwestdeden.github.io/Projet4/index.html",
		site: "https://github.com/alWestDeden/Projet4",
	},
	{
		nb: 2,
		id: "kasa",
		name: "Kasa",
		image_21: kasa_21,
		image_34: kasa_34,
		image_43: kasa_43,
		image_45: kasa_45,
		image_54: kasa_54,
		description: "Plateforme de location d'appartements entre particuliers",
		details:
			"A partir de la maquette <a class='figma' href='https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&t=xZlEO0AToUcKLwbJ-0'>Figma</a>, il a fallu développer l'application avec <span class='upfront'>React</span> et <span class='upfront'>React-Router</span>. Le <span class='upfront'>Back-End</span> n'étant pas développé on le simule en récupérant les informations de chaque appartements dans un fichier <span class='upfront'>JSON</span>. Les images réfrencées dans ce fichier sont hébergés sur <span class='upfront'>Amazon AWS</span>. <span class='upfront'>SASS</span> a été utilisé pour génerer le style <span class='upfront'>CSS</span>.",
		constraints:
			"Il était attendu que le <span class='upfront'>carrousel</span> boucle et que les icones de navigation n'apparaise pas quand il y a qu'une seule image. Les élements <span class='upfront'>collapse</span> doivent par défaut être fermés et crées à partie d'un seul composant.",
		technologies: ["CSS", "Figma", "GitHub", "HTML", "JavaScript", "React", "React-Router", "SASS"],
		code: "https://github.com/alWestDeden/Projet8-kasa",
		site: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 3,
		id: "nina",
		name: "Nina Carducci",
		image_21: nina_21,
		image_34: nina_34,
		image_43: nina_43,
		image_45: nina_45,
		image_54: nina_54,
		description: "Portfolio de la photographe Nina Carducci",
		details:
			"Ici, le challenge était d'optimiser le site tant sur les <span class='upfront'>performances</span> que sur le <span class='upfront'>SEO</span>. Ensuite, il a fallu mettre en place le <span class='upfront'>référencement local</span> à l'aide de <span class='upfront'>Schema.org</span>, ajouter les <span class='upfront'>Metas</span> pour les <span class='upfront'>réseaux sociaux</span> et le conformer aux exigences d'<span class='upfront'>accessibilité</span>.",
		constraints:
			"Il était demandé qu'une fois optimisé le site passe les audits <span class='upfront'>Google Lighthouse</span> (performances et SEO) et <span class='upfront'>WAVE</span> (accessibilité).",
		technologies: ["CSS", "GitHub", "HTML", "JavaScript", "Lighthouse", "WAVE"],
		code: "https://github.com/alWestDeden/Projet9_new",
		site: "https://alwestdeden.github.io/Projet9_new/index.html",
	},
	{
		nb: 4,
		id: "argent",
		name: "ARGENTBANK",
		image_21: argent_21,
		image_34: argent_34,
		image_43: argent_43,
		image_45: argent_45,
		image_54: argent_54,
		description: "Application Web Bancaire",
		details:
			"En se basant sur sur des pages <span class='upfront'>HTML</span> statique on a eu à développer à l'aide de <span class='upfront'>React</span>, <span class='upfront'>React-Router</span> et <span class='upfront'>Redux</span> un site permettant à l'utilisateur autorisé de se connecter en utilisant un <span class='upfront'>Token</span> et de pouvoir changer son nom d'utilisateur. Il fallait aussi fournir un fichier <span class='upfront'>Swagger</span>, pour la suite du développement, décrivant les <span class='upfront'>requêtes</span> nécessaires pour afficher les différents compte et leurs transactions.",
		constraints:
			"Il était attendu que la connexion soit sécurisée et que toutes les informations de requête (<span class='upfront'>methode HTTP</span>, <span class='upfront'>route</span>, <span class='upfront'>paramètres</span>, <span class='upfront'>réponses</span>, ...) soit fournies.",
		technologies: ["CSS", "FontAwesome", "GitHub", "HTML", "JavaScript", "React", "React-Router", "Redux", "SASS", "Swagger"],
		code: "https://github.com/alWestDeden/ArgentBank-website",
		site: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
// projects data in english
const projects_en = [
	{
		nb: 0,
		id: "booki",
		name: "Booki",
		image_21: booki_21,
		image_34: booki_34,
		image_43: booki_43,
		image_45: booki_45,
		image_54: booki_54,
		description: "Accommodation and activities search website",
		details:
			"From the <a class='figma' href='https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design'>Figma</a> model, we had to develop the site coded only in <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. A summary note specified the functional and technical expectations.",
		constraints:
			"The challenge for this project was to achieve the expectations (accommodation and activity cards, search filters, search field, etc...), but it was not required to be functional. The site had to be designed <span class='upfront'>desktop first</span> and be <span class='upfront'>responsive</span> (mobile, tablet, desktop).",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://github.com/alWestDeden/bushido/tree/main/Projet3",
		site: "https://alwestdeden.github.io/bushido/Projet3/index.html",
	},
	{
		nb: 1,
		id: "ohmyfood",
		name: "Oh My Food !",
		image_21: ohmyfood_21,
		image_34: ohmyfood_34,
		image_43: ohmyfood_43,
		image_45: ohmyfood_45,
		image_54: ohmyfood_54,
		description: "Reservation and menu composition website",
		details:
			"From a starting code and the <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1'>Figma</a> model, it was asked to develop the <span class='upfront'>Front-End</span> of the site using <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span> only. The <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1'>Figma</a> model contained the interface elements as well as the expected animations.",
		constraints:
			"The expectations for this project were that the website would be <span class='upfront'>responsive</span> and <span class='upfront'>mobile first</span>. Particular attention was paid to the animations; hearts should gradually fill up, menus should cascade, and buttons should respond to hovers and clicks. It was imperative to use <span class='upfront'>SASS</span>.",
		technologies: ["CSS", "Figma", "FontAwesome", "GitHub", "HTML", "SASS"],
		code: "https://alwestdeden.github.io/Projet4/index.html",
		site: "https://github.com/alWestDeden/Projet4",
	},
	{
		nb: 2,
		id: "kasa",
		name: "Kasa",
		image_21: kasa_21,
		image_34: kasa_34,
		image_43: kasa_43,
		image_45: kasa_45,
		image_54: kasa_54,
		description: "Apartment rental website",
		details:
			"From the <a class='figma' href='https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&t=xZlEO0AToUcKLwbJ-0'>Figma</a> model, it was asked to develop the website with <span class='upfront'>React</span> and <span class='upfront'>React-Router</span>. As the <span class='upfront'>Back-End</span> isn't developed, we simulate it by retrieving the information from each apartment in a <span class='upfront'>JSON</span> file. The images referenced in this file are hosted on <span class='upfront'>Amazon AWS</span>. <span class='upfront'>SASS</span> was used to generate the <span class='upfront'>CSS</span> styling.",
		constraints:
			"It was expected that the <span class='upfront'>carousel</span> loop and that the navigation icons would not appear when there is only one image. <span class='upfront'>Collapses</span> components must by default be closed and created from a single component.",
		technologies: ["CSS", "Figma", "GitHub", "HTML", "JavaScript", "React", "React-Router", "SASS"],
		code: "https://github.com/alWestDeden/Projet8-kasa",
		site: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 3,
		id: "nina",
		name: "Nina Carducci",
		image_21: nina_21,
		image_34: nina_34,
		image_43: nina_43,
		image_45: nina_45,
		image_54: nina_54,
		description: "Portfolio of photographer Nina Carducci",
		details:
			"Here, the challenge was to optimize the site both in terms of <span class='upfront'>performances</span> and <span class='upfront'>SEO</span>. Then, we had to improve the <span class='upfront'>local SEO</span> using <span class='upfront'>Schema.org</span>, add <span class='upfront'>Metas</span> for <span class='upfront'>social networks</span> and comply with <span class='upfront'>accessibility</span> requirements.",
		constraints:
			"Once optimized, it was expected the website to pass <span class='upfront'>Google Lighthouse</span> (performance and SEO) and <span class='upfront'>WAVE</span> (accessibility) audits.",
		technologies: ["CSS", "GitHub", "HTML", "JavaScript", "Lighthouse", "WAVE"],
		code: "https://github.com/alWestDeden/Projet9_new",
		site: "https://alwestdeden.github.io/Projet9_new/index.html",
	},
	{
		nb: 4,
		id: "argent",
		name: "ARGENTBANK",
		image_21: argent_21,
		image_34: argent_34,
		image_43: argent_43,
		image_45: argent_45,
		image_54: argent_54,
		description: "Banking Website",
		details:
			"Based on static <span class='upfront'>HTML</span> pages we had to develop using <span class='upfront'>React</span>, <span class='upfront'>React-Router</span> and <span class='upfront'>Redux</span> a site allowing the authorized user to connect securly thanks to a <span class='upfront'>Token</span>. He was then allowed to change their username. A <span class='upfront'>Swagger</span> file was also expected for further development. This file would describes the <span class='upfront'>requests</span>> necessary to display the different accounts and their transactions.",
		constraints:
			"The connection was expected to be secure and all the necessary requested information (<span class='upfront'>HTTP method</span>, <span class='upfront'>path</span>>, <span class='upfront'>parameters</span>, <span class='upfront'>responses</span>, ...) for the futur development would be provided.",
		technologies: ["CSS", "FontAwesome", "GitHub", "HTML", "JavaScript", "React", "React-Router", "Redux", "SASS", "Swagger"],
		code: "https://github.com/alWestDeden/ArgentBank-website",
		site: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
export { projects_fr, projects_en }
