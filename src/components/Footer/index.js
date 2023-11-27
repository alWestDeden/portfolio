import { touchScreen } from "../../pages/Home"
import "../../style/footer.scss"

export default function Footer() {
	return (
		<div className={!touchScreen ? "footer" : "footer footer-ts"}>
			<p>Développé en 2023</p>
		</div>
	)
}
