import { useContext } from "react"
import { DeviceContext } from "../../index"
import "../../style/footer.scss"

export default function Footer() {
	const touchScreen = useContext(DeviceContext)
	return (
		<div className={!touchScreen ? "footer" : "footer footer-ts"}>
			<p>Développé en 2023</p>
		</div>
	)
}
