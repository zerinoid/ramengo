import fetchData from '../lib/fetchData'

export const fetchIngredients = async ingredientGroup => {
  const ingredients = await fetchData(ingredientGroup)

  // TODO REMOVER
  console.log(ingredients, '### ingredients  ###')

  await ingredients.forEach(ingredient => {
    generateButton(ingredientGroup, ingredient)
  })
}

const generateButton = (ingredientGroup, ingredient) => {
  const parent = document.querySelector('#' + ingredientGroup)

  const ingredientContainer = document.createElement('button')
  ingredientContainer.classList.add('ingredients__button')

  const pic = new Image(104, 104)
  pic.src = ingredient.imageInactive
  pic.alt = ingredient.name
  ingredientContainer.appendChild(pic)

  const name = `<p class="ingredients__name">${ingredient.name}</p>`
  const description = `<p class="ingredients__description">${ingredient.description}</p>`
  const price = `<p class="ingredients__price">US$ ${ingredient.price}</p>`

  ingredientContainer.innerHTML += name + description + price

  parent.appendChild(ingredientContainer)
  ingredientContainer.addEventListener('click', () =>
    addIngredient(ingredientGroup, ingredient.id)
  )
}

const addIngredient = (ingredientGroup, ingredientId) => {
  const event = new CustomEvent('changeIngredient', {
    detail: [ingredientGroup, ingredientId]
  })

  window.dispatchEvent(event)
}
