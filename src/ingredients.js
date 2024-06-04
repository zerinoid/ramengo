import fetchData from '../lib/fetchData'

let data = {
  broths: [],
  proteins: []
}

export const fetchIngredients = async ingredientGroup => {
  const ingredients = await fetchData(ingredientGroup)

  data[ingredientGroup] = ingredients
  await ingredients.forEach(ingredient => {
    generateButton(ingredientGroup, ingredient)
  })
}

const generateButton = (ingredientGroup, ingredient) => {
  const parent = document.querySelector('#' + ingredientGroup)

  const ingredientButton = document.createElement('button')
  ingredientButton.classList.add(
    'ingredients__button',
    'ingredients__button--' + ingredientGroup
  )

  ingredientButton.dataset.id = ingredient.id

  const pic = new Image(104, 104)
  pic.src = ingredient.imageInactive
  pic.alt = ingredient.name
  ingredientButton.appendChild(pic)

  const name = `<p class="ingredients__name">${ingredient.name}</p>`
  const description = `<p class="ingredients__description">${ingredient.description}</p>`
  const price = `<p class="ingredients__price">US$ ${ingredient.price}</p>`

  ingredientButton.innerHTML += name + description + price

  parent.appendChild(ingredientButton)
  ingredientButton.addEventListener('click', event => {
    addIngredient(ingredientGroup, ingredient.id)
    toggleIngredient(ingredientGroup, event.currentTarget, ingredient.id)
  })
}

const toggleIngredient = (ingredientGroup, currentButton, ingredientId) => {
  const groupButtons = document.querySelectorAll(
    '.ingredients__button--' + ingredientGroup
  )

  groupButtons.forEach(button => {
    button.classList.remove('active')
    button.querySelector('img').src =
      data[ingredientGroup][button.dataset.id - 1].imageInactive
  })

  currentButton.classList.add('active')
  currentButton.querySelector('img').src =
    data[ingredientGroup][ingredientId - 1].imageActive
}

const addIngredient = (ingredientGroup, ingredientId) => {
  const reqHelper = {
    broths: 'brothId',
    proteins: 'proteinId'
  }

  const onChangeIngredient = new CustomEvent('onChangeIngredient', {
    detail: [reqHelper[ingredientGroup], ingredientId]
  })

  window.dispatchEvent(onChangeIngredient)
}
