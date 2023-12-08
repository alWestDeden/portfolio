import { useContext } from "react"
import { DeviceContext } from "../../index"
import addClassExtension from "../../functions/addClassExtension"
import "../../style/footer.scss"
export default function Footer() {
	const touchScreen = useContext(DeviceContext)
	return (
		<div className={addClassExtension(touchScreen, "footer")}>
			<p>Développé en 2023</p>
		</div>
	)
}
