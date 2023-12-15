import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import "../../style/footer.scss"
export default function Footer() {
	const { changeLanguage, language } = useLanguage()
	let label
	switch (language) {
		case "fr":
			label = "Langue:"
			break
		case "en":
			label = "Language:"
			break
		default:
	}
	const { touchScreen } = useTouchScreen()
	return (
		<footer className={addClassExtension(touchScreen, "footer")}>
			<p>2023-12</p>
			<div className='languages'>
				<label className='languages-label' htmlFor='languages'>
					{label}
				</label>
				<select
					name='languages'
					id='languages'
					className='languages-select'
					onChange={(e) => changeLanguage(e.target.value)}
					defaultValue='fr'>
					<option className='language' value='fr'>
						{touchScreen ? "Fr" : "Français"}
					</option>
					<option className='language' value='en'>
						{touchScreen ? "En" : "English"}
					</option>
				</select>
			</div>
		</footer>
	)
}
