// show project when mouse enter the button
export function showProject(actualProject, index) {
	const selectedProject = document.getElementById(`project--${actualProject}`)
	const selectedProjectMask = document.getElementById(`project--masks-${actualProject}`)
	// end the exit's animation of the previous selected project before starting the animation of the selected one
	if (index !== null) {
		const previousProject = document.getElementById(`project--${index}`)
		const previousProjectMask = document.getElementById(`project--masks-${index}`)
		previousProject.classList.add(`project-figure--${index}`)
		previousProjectMask.classList.remove("strips-in")
	}
	selectedProject.classList.remove(`project-figure--${actualProject}`)
	selectedProjectMask.classList.add("strips-out")
	selectedProject.classList.add("zoom-in")
}
// hide projects when mouse leave button
export function hideProject(project) {
	const unSelectedProject = document.getElementById(`project--${project}`)
	const unSelectedProjectMask = document.getElementById(`project--masks-${project}`)
	unSelectedProject.classList.remove("zoom-in")
	unSelectedProjectMask.classList.remove("strips-out")
	unSelectedProjectMask.classList.add("strips-in")
	setTimeout(() => {
		unSelectedProjectMask.classList.remove("strips-in")
		unSelectedProject.classList.add(`project-figure--${project}`)
	}, 400)
}
