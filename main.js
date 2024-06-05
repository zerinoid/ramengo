import './src/styles/main.scss'
import { fetchIngredients } from './src/ingredients.js'
import submitData from './lib/submitData'

window.addEventListener('onChangeIngredient', event => {
  reqObject[event.detail[0]] = event.detail[1]
  checkButtonStatus()
})

const reqObject = {
  brothId: '0',
  proteinId: '0'
}

const handleSubmit = async data => {
  const res = await submitData(data)
  window.location.href = `/order/?description=${res.description}&image=${res.image}`
}

const submitOrderButton = document.querySelector('#submit')

submitOrderButton.addEventListener('click', () => handleSubmit(reqObject))

const checkButtonStatus = () => {
  submitOrderButton.disabled = true

  if (reqObject.brothId === '0' || reqObject.proteinId === '0') {
    submitOrderButton.disabled = true
  } else {
    submitOrderButton.disabled = false
  }
}

checkButtonStatus()
fetchIngredients('broths')
fetchIngredients('proteins')
