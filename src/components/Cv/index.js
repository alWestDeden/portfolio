import { useEffect, useState } from "react"
import { useTouchScreen } from "../../functions/ScreenTypeContext"
import { useLanguage } from "../../functions/LanguageContext"
import addClassExtension from "../../functions/addClassExtension"
import { cv_fr, cv_en } from "../../data/cv"
import "../../style/cv.scss"
export default function Cv() {
	const { touchScreen } = useTouchScreen()
	const { language } = useLanguage()
	let cv
	switch (language) {
		case "fr":
			cv = cv_fr
			break
		case "en":
			cv = cv_en
			break
		default:
	}
	// slider's state
	const [activeSlide, setActiveSlide] = useState(1)
	// slider's rendering
	useEffect(() => {
		let current = 1
		const cycleReviews = () => {
			if (current === cv.length) {
				current = 1
			} else {
				current += 1
			}
			setActiveSlide(current)
		}
		// intervalId identified so it can be canceled on unmount
		const intervalId = setInterval(() => {
			cycleReviews()
		}, 3000)
		// Removes interval on unmount
		return () => clearInterval(intervalId)
	}, [cv.length])
	return (
		<section className={addClassExtension(touchScreen, "cv")}>
			<ul className='cv-list'>
				{cv.map((info) => {
					const { nb, title, details } = info
					const count = nb
					return (
						<li
							key={`cv-info--${nb}`}
							id={`cv-info--${nb}`}
							className={`cv-list-infos ${count === activeSlide ? "active" : ""} ${count < activeSlide ? "left" : ""} ${
								count > activeSlide ? "right" : ""
							}`}>
							<div key={`cv-details--${nb}`} className='cv-details'>
								<div key={`cv-detail-container--${nb}`} className='cv-detail-container'>
									{details.map((detail, index) => (
										<p key={`cv-detail--${nb}${index}`}>{detail}</p>
									))}
								</div>
								<h4 key={`cv-title--${nb}`}>{title}</h4>
							</div>
						</li>
					)
				})}
			</ul>
		</section>
	)
}
