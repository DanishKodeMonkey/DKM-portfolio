import './styles.css'
import './animations.css'
/* Leveraging the web animations API for this */
async function slideInHeader() {
	const header = document.querySelector('header')
	const headerSlideIn = [
		{ opacity: '0', transform: 'translateY(-100%)' },
		{ opacity: '1', transform: 'translateY(0%)' },
	]
	const headerSlideInAnim = {
		duration: 500,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = header.animate(headerSlideIn, headerSlideInAnim)
		animation.onfinish = resolve
	})
}

async function zoomInMain() {
	const main = document.querySelector('main')
	const mainZoomIn = [
		{ opacity: '0', transform: 'scale(0)' },
		{ opacity: '1', transform: 'scale(1)' },
	]
	const mainZoomInAnim = {
		duration: 500,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = main.animate(mainZoomIn, mainZoomInAnim)
		animation.onfinish = resolve
	})
}

async function slideInFooter() {
	const footer = document.querySelector('footer')
	const footerSlideIn = [
		{ opacity: '0', transform: 'translateY(100%)' },
		{ opacity: '1', transform: 'translateY(0)' },
	]
	const footerSlideInAnim = {
		duration: 500,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = footer.animate(footerSlideIn, footerSlideInAnim)
		animation.onfinish = resolve
	})
}

async function animateElementsOnStart() {
	// Set initial positions of elements off-screen
	const header = document.querySelector('header')
	const main = document.querySelector('main')
	const footer = document.querySelector('footer')
	header.style.transform = 'translateY(-100%)'
	main.style.transform = 'scale(0)'
	footer.style.transform = 'translateY(100%)'
	await slideInHeader()
	await zoomInMain()
	await slideInFooter()
}

window.onload = async () => {
	await animateElementsOnStart()
}
