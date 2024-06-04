import './src/styles/main.scss'
import { fetchIngredients } from './src/ingredients.js'

// import { setupCounter } from './counter.js'

window.addEventListener('onChangeIngredient', event => {
  reqObject[event.detail[0]] = event.detail[1]
})

const reqObject = {
  brothId: '0',
  proteinId: '0'
}

// PARA TESTE
document
  .querySelector('#submit')
  .addEventListener('click', () => console.log(reqObject, '### reqObject  ###'))

fetchIngredients('broths')
fetchIngredients('proteins')
// setupCounter(document.querySelector('#counter'))
