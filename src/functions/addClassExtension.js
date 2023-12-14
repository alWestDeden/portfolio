// generate a Touch Screen class
export default function addClassExtension(touchScreen, className) {
	if (touchScreen === true) {
		return `${className} ${className}--ts`
	} else {
		return `${className}`
	}
}
