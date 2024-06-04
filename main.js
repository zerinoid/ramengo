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
  if (res.ok) {
    console.log(res.json(), '### res  ###')
  }
}

document
  .querySelector('#submit')
  .addEventListener('click', () => handleSubmit(reqObject))

fetchIngredients('broths')
fetchIngredients('proteins')
