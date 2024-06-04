import fetchData from '../lib/fetchData'

export const fetchIngredients = async ingredientGroup => {
  const ingredients = await fetchData(ingredientGroup)

  // TODO REMOVER
  console.log(ingredients, '### ingredients  ###')

  const parent = document.querySelector('#' + ingredientGroup)
  await ingredients.forEach(ingredient => {
    const ingredientContainer = document.createElement('button')
    ingredientContainer.classList.add('ingredients__button')
    const pic = new Image(104, 104)
    pic.src = ingredient.imageInactive
    ingredientContainer.appendChild(pic)
    ingredientContainer.appendChild(document.createTextNode(ingredient.name))
    parent.appendChild(ingredientContainer)

    ingredientContainer.addEventListener('click', () =>
      addIngredient(ingredientGroup, ingredient.id)
    )
  })
}

const addIngredient = (ingredientGroup, ingredientId) => {
  const event = new CustomEvent('changeIngredient', {
    detail: [ingredientGroup, ingredientId]
  })

  window.dispatchEvent(event)
}
