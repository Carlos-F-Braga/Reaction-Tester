const $shape = document.getElementById("shape")
const $timeTaken = document.getElementById("timeTaken")
const $final = document.getElementById("final")
const $finals = document.getElementById("finals")

let startTime = new Date().getTime()
const answers = []

const getRandomColor = () => {
    const letters = '0123456789ABCDEF'.split('');
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const shapeAppear = () => {
    const heightWidth = Math.random() * 350
    const color = getRandomColor();

    $shape.style.top = Math.random() * 600 + 'px'
    $shape.style.left = Math.random() * 600 + 'px'
    $shape.style.width = heightWidth + 'px'
    $shape.style.height = heightWidth + 'px'
    $shape.style.borderRadius = heightWidth > 250 ? '50%' : ''
    $shape.style.backgroundColor = color;

    $shape.style.display = "block"

    startTime = new Date().getTime()
}

limit = 0
const time = Math.random() * 2000

const nextShape = () => 
{
    limit = limit +  1
    setTimeout(shapeAppear, time)
}

nextShape()

let all = 0
let avg = 0

$shape.onclick = () => {
    $shape.style.display = "none"

    const end = new Date().getTime()

    const timeTaken = (end - startTime) / 1000
    answers.push(' ' + timeTaken + 's')

    all = all + timeTaken 
    avg = all / Math.floor(answers.length, 2)

    $timeTaken.innerHTML = timeTaken + 's'
    $final.innerHTML = 'Seus tempos:' + answers
    $finals.innerHTML = 'Tempo Médio: ' + avg + 's'
    limit >= 10 ? $timeTaken.innerHTML = 'Game Over wp!' : nextShape()
}