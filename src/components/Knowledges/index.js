import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import { knowledges_en, knowledges_fr } from "../../data/knowledge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../../style/knowledges.scss"

export default function Knowledges() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let knowledges
	let title
	switch (language) {
		case "fr":
			knowledges = knowledges_fr
			title = "Compétences"
			break
		case "en":
			knowledges = knowledges_en
			title = "Knowledges"
			break
		default:
	}
	return (
		<section className={addClassExtension(touchScreen, "knowledges-container")}>
			<h4>{title}</h4>
			<div className={addClassExtension(touchScreen, "knowledges")}>
				{knowledges.map((knowledge) => {
					const { icons, title, text } = knowledge
					let textHTML = { __html: text }
					return (
						<article key={`article--${title}`} className={addClassExtension(touchScreen, "knowledge")}>
							<div key={`icons--${title}`} className='card-icons'>
								{icons.map((icon, id) => {
									return <FontAwesomeIcon key={`FontAwesome--${title}-${id}`} className='card-icon' icon={icon} />
								})}
							</div>
							<div key={`article-text--${title}`} className='card-text'>
								<span key={`article-title--${title}`}>{title}</span>
								<p key={`article-p--${title}`} dangerouslySetInnerHTML={textHTML}></p>
							</div>
						</article>
					)
				})}
			</div>
		</section>
	)
}
