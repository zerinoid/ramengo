import fetchData from '../lib/fetchData'

export const fetchIngredients = async ingredientGroup => {
  const ingredients = await fetchData(ingredientGroup)

  console.log(ingredients, '### ingredients  ###')
  const elements = await ingredients.map(ingredient => {
    // ingredient.addEventListener('click', () => {
    //   addIngredient(ingredientGroup, ingredient.id)
    // })

    return `<button class="button">${ingredient.name}</button>`
  })

  document.querySelector('#' + ingredientGroup).innerHTML = elements
  const ingredientButtons = await document.querySelectorAll('.button')
  // console.log(ingredientButtons, '### ingredientButtons  ###')

  ingredientButtons.forEach(ingredient => {
    // console.log(ingredient, '### ingredient  ###')
    ingredient.addEventListener('click', () =>
      addIngredient(ingredientGroup, 'banana')
    )
  })
}

const addIngredient = (ingredientGroup, ingredientId) => {
  // console.log(ingredientGroup, ingredientId)
  const event = new CustomEvent('changeIngredient', {
    detail: [ingredientGroup, ingredientId]
  })

  window.dispatchEvent(event)
}
