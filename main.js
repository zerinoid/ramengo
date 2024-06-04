import './src/styles/main.scss'
import { fetchIngredients } from './src/ingredients.js'
import submitData from './lib/submitData'

window.addEventListener('onChangeIngredient', event => {
  reqObject[event.detail[0]] = event.detail[1]
})

const reqObject = {
  brothId: '0',
  proteinId: '0'
}

const handleSubmit = async data => {
  const res = await submitData(data)
  console.log(res, '### res  ###')
  window.location.href = `https://ramengoo.netlify.app/success/?description=${res.description}&image=${res.image}`
}

const submitOrderButton = document.querySelector('#submit')
// submitOrderButton.disabled = true

// if (!reqObject.brothId || !reqObject.proteinId) {
//   submitOrderButton.disabled = true
// } else {
//   submitOrderButton.disabled = false
// }

submitOrderButton.addEventListener('click', () => handleSubmit(reqObject))

fetchIngredients('broths')
fetchIngredients('proteins')
