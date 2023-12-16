import { useLanguage } from "../../functions/LanguageContext"
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import addClassExtension from "../../functions/addClassExtension"
import { description_fr, description_en } from "../../data/description"
import "../../style/description.scss"

export default function Description() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let description
	switch (language) {
		case "fr":
			description = { __html: description_fr }
			break
		case "en":
			description = { __html: description_en }
			break
		default:
	}
	return (
		<article className={addClassExtension(touchScreen, "description")}>
			<p className='description-text' dangerouslySetInnerHTML={description}></p>
		</article>
	)
}
