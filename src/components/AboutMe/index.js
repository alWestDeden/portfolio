import "../../style/about-me.scss"
export default function AboutMe({ touchScreen }) {
	return (
		<section className={!touchScreen ? "about" : "about about-ts"}>
			<p>Bienvenue sur mon Portfolio,</p>
			<p>
				De formation technique industrielle 'BTS Assistant Technique d'Ingenieur', j'ai souhaité valider des connaissances que
				j'avais acquis dans le développement Web avec l'envie de réorienter ma carrière professionnelle.
			</p>
			<p>
				Vous trouverez sur ce site quelques uns des Projets validés dans le cadre de la formation d'Intégrateur Web que j'ai suivi
				chez OpenClassRooms.
			</p>
		</section>
	)
}
