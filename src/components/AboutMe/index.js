import addClassExtension from "../../functions/addClassExtension"
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import { about_fr, about_en } from "../../data/about"
import "../../style/about-me.scss"
export default function AboutMe() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let about
	switch (language) {
		case "fr":
			about = { __html: about_fr }
			break
		case "en":
			about = { __html: about_en }
			break
		default:
	}
	return <section className={addClassExtension(touchScreen, "about")} dangerouslySetInnerHTML={about}></section>
}
