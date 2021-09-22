const startBtn = document.querySelector
('#start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board =document.querySelector('#board')
let time = 11

startBtn.addEventListener('click', (event)
=> {
   event.preventDefault()
   screens[0].classList.add('up')
})

timeList.addEventListener('click', event =>
{
    if (event.target.classList.contains
    ('time-btn')) {
        time = parseInt(event.target.
            getAttribute('data-time'))
            screens[1].classList.add('up')
            startGame()
        }
})
