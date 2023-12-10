import addClassExtension from "../../functions/addClassExtension"
import "../../style/about-me.scss"
export default function AboutMe({ touchScreen }) {
	return (
		<section className={addClassExtension(touchScreen, "about")}>
			<p>
				Bienvenue sur mon <h3>Portfolio</h3>,
			</p>
			<p>
				De formation technique industrielle, j'ai souhaité valider des connaissances que j'avais acquis dans le développement Web
				avec l'envie de réorienter ma carrière professionnelle.
			</p>
			<p>
				Vous trouverez sur ce site quelques uns des Projets validés dans le cadre de la formation de{" "}
				<h3>Développeur/Intégrateur Web</h3> que j'ai suivi chez{" "}
				<a className='open' href='https://openclassrooms.com/fr/'>
					OpenClassRooms
				</a>
				.
			</p>
		</section>
	)
}
