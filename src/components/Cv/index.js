import { useEffect, useState } from "react"
import addClassExtension from "../../functions/addClassExtension"
import cv from "../../data/cv"
import "../../style/cv.scss"
export default function Cv({ touchScreen }) {
	const [activeSlide, setActiveSlide] = useState(1)
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
		}, 8000)
		// Removes interval on unmount
		return () => clearInterval(intervalId)
	}, [])
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
