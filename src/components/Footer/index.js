import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import "../../style/footer.scss"
export default function Footer() {
	const { changeLanguage, language } = useLanguage()
	let label
	switch (language) {
		case "fr":
			label = "Langue: "
			break
		case "en":
			label = "Language: "
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
				<div className='select-container'>
					<select
						name='languages'
						id='languages'
						className='languages-select'
						onChange={(e) => changeLanguage(e.target.value)}
						defaultValue='fr'>
						<option className='language' value='fr' key='bottom-option-fr'>
							{/* {touchScreen ? "Fr" : "Français"} */}
							Français
						</option>
						<option className='language' value='en' key='bottom-option-en'>
							{/* {touchScreen ? "En" : "English"} */}
							English
						</option>
					</select>
				</div>
			</div>
		</footer>
	)
}
