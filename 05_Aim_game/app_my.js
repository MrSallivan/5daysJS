const startBtn = document.querySelector('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeText = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'yellow', 'purple', '#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const restart = document.querySelector('#restart')
let time = 0
let score = 0

startBtn.addEventListener('click', event => {
	event.preventDefault()
	screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
	if (event.target.classList.contains('time-btn')) {
		time = parseInt(event.target.getAttribute('data-time'))
		screens[1].classList.add('up')
		gameStart()
	}
})
board.addEventListener('click', event => {
	if (event.target.classList.contains('circle')) {
		score++
		event.target.remove()
		createCircle()
	}
})

function gameStart() {
	setInterval(decriseTime, 1000)
	createCircle()
	setTime(time)
}

function decriseTime() {
	if (time === 0) {
		gameOver()

	} else {
		let current = --time
		if (current < 10) {
			current = `0${current}`
		}
		setTime(current)
	}
}
function setTime(value) {
	timeText.innerHTML = `00:${value}`
}
function createCircle() {
	let circle = document.createElement('div')
	const { width, height } = board.getBoundingClientRect()
	const size = getRandomNumber(10, 60)
	let color = getRandomNumber(0, colors.length - 1)
	let x = getRandomNumber(0, width - size)
	let y = getRandomNumber(0, height - size)

	circle.classList.add('circle')
	circle.style.background = `${colors[color]}`
	circle.style.left = `${x}px`
	circle.style.top = `${y}px`
	circle.style.width = `${size}px`
	circle.style.height = `${size}px`

	board.append(circle)

}
function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}
function gameOver() {
	board.innerHTML = `<h1>Счёт: <span class="primary">${score}</span></h1><button onClick="window.location.reload();" class="time-btn" id="restart">Повторить</button>`
	timeText.parentNode.style.display = "none"
}