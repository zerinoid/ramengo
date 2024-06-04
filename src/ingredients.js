import fetchData from '../lib/fetchData'

export const fetchIngredients = async ingredientGroup => {
  const ingredients = await fetchData(ingredientGroup)

  await ingredients.forEach(ingredient => {
    generateButton(ingredientGroup, ingredient)
  })
}

const generateButton = (ingredientGroup, ingredient) => {
  const parent = document.querySelector('#' + ingredientGroup)

  const ingredientContainer = document.createElement('button')
  ingredientContainer.classList.add(
    'ingredients__button',
    'ingredients__button--' + ingredientGroup
  )

  const pic = new Image(104, 104)
  pic.src = ingredient.imageInactive
  pic.alt = ingredient.name
  ingredientContainer.appendChild(pic)

  const name = `<p class="ingredients__name">${ingredient.name}</p>`
  const description = `<p class="ingredients__description">${ingredient.description}</p>`
  const price = `<p class="ingredients__price">US$ ${ingredient.price}</p>`

  ingredientContainer.innerHTML += name + description + price

  parent.appendChild(ingredientContainer)
  ingredientContainer.addEventListener('click', event => {
    addIngredient(ingredientGroup, ingredient.id)
    toggleIngredient(ingredientGroup, event.currentTarget)
  })
}

const toggleIngredient = (ingredientGroup, currentButton) => {
  const groupButtons = document.querySelectorAll(
    '.ingredients__button--' + ingredientGroup
  )

  groupButtons.forEach(button => {
    button.classList.remove('active')
  })

  currentButton.classList.add('active')
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
