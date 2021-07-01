const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')
let activesSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
	changeSlide('up')
})

downBtn.addEventListener('click', () => {
	changeSlide('down')
})

function changeSlide(direction) {
	if (direction === 'up') {
		activesSlideIndex++
		if (activesSlideIndex === slidesCount) {
			activesSlideIndex = 0
		}
	} else if (direction === 'down') {
		activesSlideIndex--
		if (activesSlideIndex < 0) {
			activesSlideIndex = slidesCount - 1
		}
	}
	const height = container.clientHeight
	mainSlide.style.transform = `translateY(-${activesSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activesSlideIndex * height}px)`

}