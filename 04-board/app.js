const board = document.querySelector('#board')
const SQUARES_NUMBER = 900
/*Нужно при работе функции Владилена
const colors = ['red', 'blue', 'green', 'yellow']
*/

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => 
    setColor(square))

    square.addEventListener('mouseleave', () => 
    removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

/*Вариант Владилена 
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.
    length)
    return colors[index]
}
*/

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}