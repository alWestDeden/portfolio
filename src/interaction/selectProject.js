// show project when mouse enter the button
export function showProjectEnter(project) {
	//define the images elements
	const kasa = document.getElementById("kasa")
	const nina = document.getElementById("nina")
	const argent = document.getElementById("argent")
	switch (project) {
		case "kasa":
			kasa.classList.remove("hide")
			kasa.classList.add("animation-in")
			break
		case "nina":
			nina.classList.remove("hide")
			nina.classList.add("animation-in")
			break
		case "argent":
			argent.classList.remove("hide")
			argent.classList.add("animation-in")
			break
		default:
			break
	}
}
// show project when mouse get hover the button after being hover another one
export function showProjectHover(currentProject) {
	//define the images elements
	const kasa = document.getElementById("kasa")
	const nina = document.getElementById("nina")
	const argent = document.getElementById("argent")
	switch (currentProject) {
		case "kasa":
			kasa.classList.remove("animation-in")
			kasa.classList.add("hide")
			break
		case "nina":
			nina.classList.remove("animation-in")
			nina.classList.add("hide")
			break
		case "argent":
			argent.classList.remove("animation-in")
			argent.classList.add("hide")
			break
		default:
			break
	}
}
// hide projects when mouse leave button
export function hideProjectLeave(currentProject) {
	//define the images elements
	const kasa = document.getElementById("kasa")
	const nina = document.getElementById("nina")
	const argent = document.getElementById("argent")
	switch (currentProject) {
		case "kasa":
			kasa.classList.remove("animation-in")
			kasa.classList.add("animation-out")
			setTimeout(() => {
				kasa.classList.remove("animation-out")
				kasa.classList.add("hide")
			}, 100)
			break
		case "nina":
			nina.classList.remove("animation-in")
			nina.classList.add("animation-out")
			setTimeout(() => {
				nina.classList.remove("animation-out")
				nina.classList.add("hide")
			}, 100)
			break
		case "argent":
			argent.classList.remove("animation-in")
			argent.classList.add("animation-out")
			setTimeout(() => {
				argent.classList.remove("animation-out")
				argent.classList.add("hide")
			}, 100)
			break
		default:
			break
	}
}
