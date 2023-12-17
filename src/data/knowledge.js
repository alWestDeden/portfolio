import {
	faMobileScreenButton,
	faTabletScreenButton,
	faComputer,
	faCode,
	faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons"

const knowledges_fr = [
	{
		title: "Code",
		text: "Que ce soit en <span class='upfront'>Javascript</span>, <span class='upfront'>React</span>, <span class='upfront'>CSS</span> ou <span class='upfront'>SASS</span> : coder de façon logique et efficiente.",
		icons: [faCode],
	},
	{
		title: "SEO",
		text: "<span class='upfront'>Balises sémantiques</span>, <span class='upfront'>mots clés</span> ou propriétes <span class='upfront'>Schema.org</span> : les outils d'un réferencement efficace.",
		icons: [faMagnifyingGlass],
	},
	{
		title: "Responsive",
		text: "Quel que soit le <span class='upfront'>support</span> : permettre à l'utilisateur d'acceder aux informations de façon intuitive.",
		icons: [faMobileScreenButton, faTabletScreenButton, faComputer],
	},
]
const knowledges_en = [
	{
		title: "Code",
		text: "Whether in Javascript, React, CSS or SASS : coding logically and efficiently.",
		icons: [faCode],
	},
	{
		title: "SEO",
		text: "Semantic tags, keywords or Schema.org properties : the tools for effective SEO.",
		icons: [faMagnifyingGlass],
	},
	{
		title: "Responsive",
		text: "Whatever the device : allow the user to access information intuitively.",
		icons: [faMobileScreenButton, faTabletScreenButton, faComputer],
	},
]
export { knowledges_fr, knowledges_en }
