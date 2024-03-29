import argent_52 from "../images/argent_52.jpg"
import argent_52W from "../images/argent_52.webp"
import argent_169 from "../images/argent_169.jpg"
import argent_169W from "../images/argent_169.webp"
import booki_52 from "../images/booki_52.jpg"
import booki_52W from "../images/booki_52.webp"
import booki_169 from "../images/booki_169.jpg"
import booki_169W from "../images/booki_169.webp"
import kasa_52 from "../images/kasa_52.jpg"
import kasa_52W from "../images/kasa_52.webp"
import kasa_169 from "../images/kasa_169.jpg"
import kasa_169W from "../images/kasa_169.webp"
import menumaker_52 from "../images/menumaker_52.jpg"
import menumaker_52W from "../images/menumaker_52.webp"
import menumaker_169 from "../images/menumaker_169.jpg"
import menumaker_169W from "../images/menumaker_169.webp"
import nina_52 from "../images/nina_52.jpg"
import nina_52W from "../images/nina_52.webp"
import nina_169 from "../images/nina_169.jpg"
import nina_169W from "../images/nina_169.webp"
import ohmyfood_52 from "../images/ohmyfood_52.jpg"
import ohmyfood_52W from "../images/ohmyfood_52.webp"
import ohmyfood_169 from "../images/ohmyfood_169.jpg"
import ohmyfood_169W from "../images/ohmyfood_169.webp"
// projects data in corresponding language
const projects_fr = [
	{
		nb: 0,
		id: "booki",
		name: "Booki",
		image_52: booki_52,
		image_169: booki_169,
		image_52W: booki_52W,
		image_169W: booki_169W,
		description: "Plateforme de recherche d'hébergements et d'activités",
		details:
			"A partir de la maquette <a class='figma' href='https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design' target='_blank' rel='noreferrer'>Figma</a>, on a eu à développer le site codé uniquement en <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. Une note de synthèse spécifiait les attentes fonctionnelles et téchniques.",
		constraints:
			"Le challenge pour ce projet était de réaliser les attentes au niveau du site (Cartes d'hébergements et d'activités, filtres de recherche, champ de recherche, ...), mais il n'était pas demandé à ce qu'il soit fonctionnel. Le site a dû être pensé en <span class='upfront'>desktop first</span> et être <span class='upfront'>responsive</span> (mobile, tablette, desktop).",
		technologies: ["Figma", "HTML", "CSS", "SASS", "FontAwesome", "GitHub"],
		codelink: "https://github.com/alWestDeden/bushido/tree/main/Projet3",
		sitelink: "https://alwestdeden.github.io/bushido/Projet3/index.html",
	},
	{
		nb: 1,
		id: "ohmyfood",
		name: "Oh My Food !",
		image_52: ohmyfood_52,
		image_169: ohmyfood_169,
		image_52W: ohmyfood_52W,
		image_169W: ohmyfood_169W,
		description: "Site de réservation et de composition de menus",
		details:
			"A partir d'un code de départ et de la maquette <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1' target='_blank' rel='noreferrer'>Figma</a>, il a fallu développer le <span class='upfront'>Front-End</span> du site uniquement en <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. La maquette <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1' target='_blank' rel='noreferrer'>Figma</a> contenait les élements de l'interface ainsi que les animations attendues.",
		constraints:
			"Les attentes pour ce projet étaient que le site soit <span class='upfront'>responsive</span> et <span class='upfront'>mobile first</span>. Une attention particulières était portée sur les animations; les coeurs des <span class='upfront'>likes</span> doivent se remplir progressivement, les menus doivent apparaîtres en cascade et les boutons doivent réagir aux survols et aux clics. Il fallait impérativement utiliser <span class='upfront'>SASS</span>.",
		technologies: ["Figma", "HTML", "CSS", "SASS", "FontAwesome", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet4",
		sitelink: "https://alwestdeden.github.io/Projet4/index.html",
	},
	{
		nb: 2,
		id: "menumaker",
		name: "Menu Maker",
		image_52: menumaker_52,
		image_169: menumaker_169,
		image_52W: menumaker_52W,
		image_169W: menumaker_169W,
		description: "Site de création de menus",
		details:
			"Cette fois si le projet ne consiste pas à coder un site mais à préparer et planifier son développement. La maquette du site était disponible sur <a class='figma' href='https://www.figma.com/file/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?type=design&node-id=0-6&mode=design' target='_blank' rel='noreferrer'>Figma</a>, mais ce sont surtout les User Stories, qui étaient à notre disposition sur <a class='figma' href='https://openclassrooms.notion.site/abd02d8dda9d44409e15699da62719f0?v=07313c40e99d4e7fb07f0a8eb3291f6d' target='_blank' rel='noreferrer'>Notion</a>, qui nous ont servies de base pour mener à terme ce projet.",
		constraints:
			"Pour valider ce projet, il fallait organiser une veille et faire un travail de curation sur les technologies nécessaires au fonctionnement du site, ensuite on avait à définir ses spécifications techniques et enfin on devait organiser son développement. Pour que l'évaluateur puisse juger ce travail, on devait lui transmettre des diaporamas traitant du travail de veille, de la planification et de la justification des choix technologiques, ainsi qu'un tableau décrivant les spécifications techniques. Ce sont ces documents qui ont servis de base à la vidéo en lien.",
		technologies: ["Figma", "GitHub", "Notion"],
		figmalink:
			"https://www.figma.com/file/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?type=design&node-id=0-6&mode=design",
		notionlink: "https://jeweled-valley-c20.notion.site/824396d00aac442a866e6b9a8c98c67d?v=d698f97d191c42829950c04b50552e01",
		videolink: "https://www.youtube.com/embed/h_PWNmtk3FM",
	},
	{
		nb: 3,
		id: "kasa",
		name: "Kasa",
		image_52: kasa_52,
		image_169: kasa_169,
		image_52W: kasa_52W,
		image_169W: kasa_169W,
		description: "Plateforme de location d'appartements entre particuliers",
		details:
			"A partir de la maquette <a class='figma' href='https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&t=xZlEO0AToUcKLwbJ-0' target='_blank' rel='noreferrer'>Figma</a>, il a fallu développer l'application avec <span class='upfront'>React</span> et <span class='upfront'>React-Router</span>. Le <span class='upfront'>Back-End</span> n'étant pas développé on le simule en récupérant les informations de chaque appartements dans un fichier <span class='upfront'>JSON</span>. Les images référencées dans ce fichier sont hébergées sur <span class='upfront'>Amazon AWS</span>. <span class='upfront'>SASS</span> a été utilisé pour génerer le style <span class='upfront'>CSS</span>.",
		constraints:
			"Il était attendu que le <span class='upfront'>carrousel</span> boucle et que les icones de navigation n'apparaisent pas quand il n'y a qu'une seule image. Les élements <span class='upfront'>collapse</span> doivent par défaut être fermés et crées à partir d'un seul composant.",
		technologies: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React", "React-Router", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet8-kasa",
		sitelink: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 4,
		id: "nina",
		name: "Nina Carducci",
		image_52: nina_52,
		image_169: nina_169,
		image_52W: nina_52W,
		image_169W: nina_169W,
		description: "Portfolio de la photographe Nina Carducci",
		details:
			"Ici, le challenge était d'optimiser le site tant sur les <span class='upfront'>performances</span> que sur le <span class='upfront'>SEO</span>. Ensuite, il a fallu mettre en place le <span class='upfront'>référencement local</span> à l'aide de <span class='upfront'>Schema.org</span>, ajouter les <span class='upfront'>Metas</span> pour les <span class='upfront'>réseaux sociaux</span> et le conformer aux exigences d'<span class='upfront'>accessibilité</span>.",
		constraints:
			"Il était demandé qu'une fois optimisé le site passe les audits <span class='upfront'>Google Lighthouse</span> (performances et SEO) et <span class='upfront'>WAVE</span> (accessibilité).",
		technologies: ["HTML", "CSS", "JavaScript", "Lighthouse", "WAVE", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet9_new",
		sitelink: "https://alwestdeden.github.io/Projet9_new/index.html",
		videolink: "https://www.youtube.com/embed/4RzjV0OpsbY",
	},
	{
		nb: 5,
		id: "argent",
		name: "ARGENTBANK",
		image_52: argent_52,
		image_169: argent_169,
		image_52W: argent_52W,
		image_169W: argent_169W,
		description: "Application Web Bancaire",
		details:
			"En se basant sur sur des pages <span class='upfront'>HTML</span> statique on a eu à développer à l'aide de <span class='upfront'>React</span>, <span class='upfront'>React-Router</span> et <span class='upfront'>Redux</span> un site permettant à l'utilisateur autorisé de se connecter en utilisant un <span class='upfront'>Token</span> et de pouvoir changer son nom d'utilisateur. Il fallait aussi fournir un fichier <span class='upfront'>Swagger</span>, pour la suite du développement, décrivant les <span class='upfront'>requêtes</span> nécessaires pour afficher les différents compte et leurs transactions.",
		constraints:
			"Il était attendu que la connexion soit sécurisée et que toutes les informations de requête (<span class='upfront'>methode HTTP</span>, <span class='upfront'>route</span>, <span class='upfront'>paramètres</span>, <span class='upfront'>réponses</span>, ...) soit fournies.",
		technologies: [
			"Figma",
			"HTML",
			"CSS",
			"SASS",
			"JavaScript",
			"React",
			"React-Router",
			"Redux",
			"Swagger",
			"FontAwesome",
			"GitHub",
		],
		codelink: "https://github.com/alWestDeden/ArgentBank-website",
		sitelink: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
const projects_en = [
	{
		nb: 0,
		id: "booki",
		name: "Booki",
		image_52: booki_52,
		image_169: booki_169,
		image_52W: booki_52W,
		image_169W: booki_169W,
		description: "Accommodation and activities search website",
		details:
			"From the <a class='figma' href='https://www.figma.com/file/r9YJyUkpVdrxzBBKGH7reY/Maquettes-Booki-(desktop%2C-mobile%2C-tablette)?type=design&node-id=3-0&mode=design' target='_blank' rel='noreferrer'>Figma</a> model, we had to develop the site coded only in <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span>. A summary note specified the functional and technical expectations.",
		constraints:
			"The challenge for this project was to achieve the expectations (accommodation and activity cards, search filters, search field, etc...), but it was not required to be functional. The site had to be designed <span class='upfront'>desktop first</span> and be <span class='upfront'>responsive</span> (mobile, tablet, desktop).",
		technologies: ["Figma", "HTML", "CSS", "SASS", "FontAwesome", "GitHub"],
		codelink: "https://github.com/alWestDeden/bushido/tree/main/Projet3",
		sitelink: "https://alwestdeden.github.io/bushido/Projet3/index.html",
	},
	{
		nb: 1,
		id: "ohmyfood",
		name: "Oh My Food !",
		image_52: ohmyfood_52,
		image_169: ohmyfood_169,
		image_52W: ohmyfood_52W,
		image_169W: ohmyfood_169W,
		description: "Reservation and menu composition website",
		details:
			"From a starting code and the <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1' target='_blank' rel='noreferrer'>Figma</a> model, it was asked to develop the <span class='upfront'>Front-End</span> of the site using <span class='upfront'>HTML</span> & <span class='upfront'>CSS</span> only. The <a class='figma' href='https://www.figma.com/file/t4449fzDnwGYmzuwQdu87V/Projet-3-FR---Ohmyfood?node-id=0%3A1' target='_blank' rel='noreferrer'>Figma</a> model contained the interface elements as well as the expected animations.",
		constraints:
			"The expectations for this project were that the website would be <span class='upfront'>responsive</span> and <span class='upfront'>mobile first</span>. Particular attention was paid to the animations; hearts should gradually fill up, menus should cascade, and buttons should respond to hovers and clicks. It was imperative to use <span class='upfront'>SASS</span>.",
		technologies: ["Figma", "HTML", "CSS", "SASS", "FontAwesome", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet4",
		sitelink: "https://alwestdeden.github.io/Projet4/index.html",
	},
	{
		nb: 2,
		id: "menumaker",
		name: "Menu Maker",
		image_52: menumaker_52,
		image_169: menumaker_169,
		image_52W: menumaker_52W,
		image_169W: menumaker_169W,
		description: "Menu creation website",
		details:
			"This time the project isn't about coding but about choosing the best technologies and planning the development of the website. The mock was available on Figma, but the basis for completing this project were the User Stories which were available to us on Notion.",
		constraints:
			"To validate this project we had to do a curation work on the necessary technologies, then we had to define its technical specifications and finally we had to organize its development. We provided the evaluator slideshows dealing with the curation work, the planning and the justification of technological choices as well as a table describing the technical specifications. These are the documents which served as the basis for the linked video.",
		technologies: ["Figma", "GitHub", "Notion"],
		figmalink:
			"https://www.figma.com/file/Q6NEUPqwz1U3HFaCaVoF7N/Maquette-desktop---Menu-Maker-by-Qwenta?type=design&node-id=0-6&mode=design",
		notionlink: "https://jeweled-valley-c20.notion.site/824396d00aac442a866e6b9a8c98c67d?v=d698f97d191c42829950c04b50552e01",
		videolink: "https://www.youtube.com/embed/SWiWtk7xVbM",
	},
	{
		nb: 3,
		id: "kasa",
		name: "Kasa",
		image_52: kasa_52,
		image_169: kasa_169,
		image_52W: kasa_52W,
		image_169W: kasa_169W,
		description: "Apartment rental website",
		details:
			"From the <a class='figma' href='https://www.figma.com/file/qEno0LwL4ZLkWyeY59kxp1/UI-Design-Kasa-FR?type=design&node-id=0-1&t=xZlEO0AToUcKLwbJ-0' target='_blank' rel='noreferrer'>Figma</a> model, it was asked to develop the website with <span class='upfront'>React</span> and <span class='upfront'>React-Router</span>. As the <span class='upfront'>Back-End</span> isn't developed, we simulate it by retrieving the information from each apartment in a <span class='upfront'>JSON</span> file. The images referenced in this file are hosted on <span class='upfront'>Amazon AWS</span>. <span class='upfront'>SASS</span> was used to generate the <span class='upfront'>CSS</span> styling.",
		constraints:
			"It was expected that the <span class='upfront'>carousel</span> loop and that the navigation icons would not appear when there is only one image. <span class='upfront'>Collapses</span> components must by default be closed and created from a single component.",
		technologies: ["Figma", "HTML", "CSS", "SASS", "JavaScript", "React", "React-Router", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet8-kasa",
		sitelink: "https://alwestdeden.github.io/Projet8-kasa",
	},
	{
		nb: 4,
		id: "nina",
		name: "Nina Carducci",
		image_52: nina_52,
		image_169: nina_169,
		image_52W: nina_52W,
		image_169W: nina_169W,
		description: "Portfolio of photographer Nina Carducci",
		details:
			"Here, the challenge was to optimize the site both in terms of <span class='upfront'>performances</span> and <span class='upfront'>SEO</span>. Then, we had to improve the <span class='upfront'>local SEO</span> using <span class='upfront'>Schema.org</span>, add <span class='upfront'>Metas</span> for <span class='upfront'>social networks</span> and comply with <span class='upfront'>accessibility</span> requirements.",
		constraints:
			"Once optimized, it was expected the website to pass <span class='upfront'>Google Lighthouse</span> (performance and SEO) and <span class='upfront'>WAVE</span> (accessibility) audits.",
		technologies: ["HTML", "CSS", "JavaScript", "Lighthouse", "WAVE", "GitHub"],
		codelink: "https://github.com/alWestDeden/Projet9_new",
		sitelink: "https://alwestdeden.github.io/Projet9_new/index.html",
		videolink: "https://www.youtube.com/embed/591OMRtzplQ",
	},
	{
		nb: 5,
		id: "argent",
		name: "ARGENTBANK",
		image_52: argent_52,
		image_169: argent_169,
		image_52W: argent_52W,
		image_169W: argent_169W,
		description: "Banking Website",
		details:
			"Based on static <span class='upfront'>HTML</span> pages we had to develop using <span class='upfront'>React</span>, <span class='upfront'>React-Router</span> and <span class='upfront'>Redux</span> a site allowing the authorized user to connect securly thanks to a <span class='upfront'>Token</span>. He was then allowed to change their username. A <span class='upfront'>Swagger</span> file was also expected for further development. This file would describes the <span class='upfront'>requests</span>> necessary to display the different accounts and their transactions.",
		constraints:
			"The connection was expected to be secure and all the necessary requested information (<span class='upfront'>HTTP method</span>, <span class='upfront'>path</span>>, <span class='upfront'>parameters</span>, <span class='upfront'>responses</span>, ...) for the futur development would be provided.",
		technologies: [
			"Figma",
			"HTML",
			"CSS",
			"SASS",
			"JavaScript",
			"React",
			"React-Router",
			"Redux",
			"Swagger",
			"FontAwesome",
			"GitHub",
		],
		codelink: "https://github.com/alWestDeden/ArgentBank-website",
		sitelink: "https://alwestdeden.github.io/ArgentBank-website/",
	},
]
export { projects_fr, projects_en }
