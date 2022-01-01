const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const fireworksContainer = $('.fireworks-container')
const yearsElement = $('#year')
const daysElement = $('#days')
const hoursElement = $('#hours')
const minutesElement = $('#minutes')
const secondsElement = $('#seconds')
const backgroundMusic = $('#music-background-file')

const now = new Date()
const countDownDate = new Date(now.getFullYear() + 1, 0, 1).getTime()

yearsElement.innerHTML = now.getFullYear() + 1;

const updateTime = () => {
    const now = new Date().getTime()
    const distance = countDownDate - now

    const days = Math.floor(distance / (24 * 60 * 60 * 1000))
    const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
    const minutes = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000))
    const seconds = Math.floor((distance % (60 * 1000)) / (1000))

    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = minutes
    secondsElement.innerHTML = seconds

    if (distance < 0) {
        backgroundMusic.play()
        daysElement.innerHTML = "0"
        hoursElement.innerHTML = "0"
        minutesElement.innerHTML = "0"
        secondsElement.innerHTML = "0"
        clearInterval(countDownInterval)
    }
}

const countDownInterval = setInterval(updateTime, 1000)

const fireworks = new Fireworks(fireworksContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    gravity: 4,
    particles: 400,
    explosion: 10
})

fireworks.start()