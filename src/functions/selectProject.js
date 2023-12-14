// show project when mouse enter the button
export function showProject(project) {
	const selectedProject = document.getElementById(`project--${project}`)
	const selectedProjectMask = document.getElementById(`project--masks-${project}`)
	selectedProject.classList.remove(`project-figure--${project}`)
	selectedProjectMask.classList.add("strips-out")
	selectedProject.classList.add("zoom-in")
}
// hide projects when mouse leave the button
export function hideProject(actualProject, index) {
	// end the exit's animation of the previous selected project before starting the animation of the selected one
	if (index !== null) {
		const previousProject = document.getElementById(`project--${index}`)
		const previousProjectMask = document.getElementById(`project--masks-${index}`)
		previousProject.classList.add(`project-figure--${index}`)
		previousProjectMask.classList.remove("strips-in")
	}
	const unSelectedProject = document.getElementById(`project--${actualProject}`)
	const unSelectedProjectMask = document.getElementById(`project--masks-${actualProject}`)
	unSelectedProject.classList.remove("zoom-in")
	unSelectedProjectMask.classList.remove("strips-out")
	unSelectedProjectMask.classList.add("strips-in")
	setTimeout(() => {
		unSelectedProjectMask.classList.remove("strips-in")
		unSelectedProject.classList.add(`project-figure--${actualProject}`)
	}, 800)
}
