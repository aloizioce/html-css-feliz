// 1 Acessar o browser
// 2 Pegar o HTML todo
// 3 Pegar o botão
// 4 Saber que está sendo clicado o botão

// 5 Acessar o browser
// 6 Pegar o HTML todo
// 7 Pegar o elements
// 8 Mover o elements para a direita

const btnLeft = window.document.querySelector('.button-arrow.-left')
const btnRight = window.document.querySelector('.button-arrow.-right')
const elements = window.document.querySelector('.elements')
let pixels = 100

btnRight.addEventListener('click', function () {
  pixels = pixels + 100
  elements.style = `transform: translateX(${pixels}px)`
})

btnLeft.addEventListener('click', function () {
  pixels = pixels - 100
  elements.style = `transform: translateX(${pixels}px)`
})
