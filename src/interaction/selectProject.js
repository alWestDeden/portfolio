// show project when mouse enter the button
export function showProjectEnter(project) {
	//define the images elements
	const project08 = document.getElementById("project08")
	const project09 = document.getElementById("project09")
	const project11 = document.getElementById("project11")
	switch (project) {
		case "project08":
			project08.classList.remove("hide")
			project08.classList.add("animation-in")
			break
		case "project09":
			project09.classList.remove("hide")
			project09.classList.add("animation-in")
			break
		case "project11":
			project11.classList.remove("hide")
			project11.classList.add("animation-in")
			break
		default:
			break
	}
}
// show project when mouse get hover the button after being hover another one
export function showProjectHover(currentProject) {
	//define the images elements
	const project08 = document.getElementById("project08")
	const project09 = document.getElementById("project09")
	const project11 = document.getElementById("project11")
	switch (currentProject) {
		case "project08":
			project08.classList.remove("animation-in")
			project08.classList.add("hide")
			break
		case "project09":
			project09.classList.remove("animation-in")
			project09.classList.add("hide")
			break
		case "project11":
			project11.classList.remove("animation-in")
			project11.classList.add("hide")
			break
		default:
			break
	}
}
// hide projects when mouse leave button
export function hideProjectLeave(currentProject) {
	//define the images elements
	const project08 = document.getElementById("project08")
	const project09 = document.getElementById("project09")
	const project11 = document.getElementById("project11")
	switch (currentProject) {
		case "project08":
			project08.classList.remove("animation-in")
			project08.classList.add("animation-out")
			setTimeout(() => {
				project08.classList.remove("animation-out")
				project08.classList.add("hide")
			}, 100)
			break
		case "project09":
			project09.classList.remove("animation-in")
			project09.classList.add("animation-out")
			setTimeout(() => {
				project09.classList.remove("animation-out")
				project09.classList.add("hide")
			}, 100)
			break
		case "project11":
			project11.classList.remove("animation-in")
			project11.classList.add("animation-out")
			setTimeout(() => {
				project11.classList.remove("animation-out")
				project11.classList.add("hide")
			}, 100)
			break
		default:
			break
	}
}
