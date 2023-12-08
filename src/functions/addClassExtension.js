export default function addClassExtension(touchScreen, className) {
	console.log(touchScreen)
	console.log(className)
	if (touchScreen === true) {
		return `${className} ${className}--ts`
	} else {
		return `${className}`
	}
}
