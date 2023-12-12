// import { useContext } from "react"
// import { DeviceContext } from "../.."
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import "../../style/footer.scss"
export default function Footer() {
	const { changeLanguage } = useLanguage()
	const { touchScreen } = useTouchScreen()
	return (
		<footer className={addClassExtension(touchScreen, "footer")}>
			<p>Développé en 2023</p>
			<div className='languages' id='languages'>
				<select name='languages' className='languages-select' onChange={(e) => changeLanguage(e.target.value)} defaultValue='fr'>
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
