import './styles.css'
import './animations.css'

/* Leveraging the web animations API for this */

/* Animation for a cute wave animation on the photo */
async function wavePhoto() {
	console.log('attempting to wave')
	const photo = document.querySelector('.photo')
	photo.classList.add('wave-photo')
	// remove animation class after animation finishes playing once
	photo.addEventListener(
		'animationend',
		() => {
			photo.classList.remove('wave-photo')
		},
		{ once: true }
	)
}
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
async function slideInHeaderAndWavePhoto() {
	await slideInHeader()
	await wavePhoto()
}
// Thank you google for this one
async function typeWriterEffect(element, text, speed) {
	for (let i = 0; i < text.length; i++) {
		element.textContent += text.charAt(i)
		await new Promise((resolve) => setTimeout(resolve, speed))
	}
}

async function animateTypeWriteEffect() {
	const h1 = document.querySelector('.main-container h1')
	const h2 = document.querySelector('.main-container h2')
	await typeWriterEffect(h1, 'Check out my stuff!', 20) // adjust speed as needed
	await new Promise((resolve) => setTimeout(resolve, 100)) // delay before line 2
	await typeWriterEffect(h2, 'More can be found on my GitHub!', 20)
}

async function animationProjectCards() {
	const projectCards = document.querySelectorAll('.project-card')
	const delayBetweenAnimations = 0 // adjust as needed

	// loop through each card
	for (let i = 0; i < projectCards.length; i++) {
		const projectCard = projectCards[i]

		// apply animation to current card
		await zoomInMain(projectCard)
		// set delay between each animation
		await new Promise((resolve) => setTimeout(resolve, delayBetweenAnimations))
	}
}
async function zoomInMain(element) {
	const mainZoomIn = [
		{ opacity: '0', transform: 'scale(0)' },
		{ opacity: '1', transform: 'scale(1)' },
	]
	const mainZoomInAnim = {
		duration: 180,
		iterations: 1,
		fill: 'forwards',
		easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
	}

	return new Promise((resolve) => {
		const animation = element.animate(mainZoomIn, mainZoomInAnim)
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
	const footer = document.querySelector('footer')
	header.style.transform = 'translateY(-100%)'
	footer.style.transform = 'translateY(100%)'

	// start animations
	await slideInHeaderAndWavePhoto()
	await animateTypeWriteEffect()
	await animationProjectCards()
	await slideInFooter()
}

window.onload = async () => {
	await animateElementsOnStart()
	const photo = document.querySelector('.photo')
	photo.addEventListener('click', wavePhoto)
}
