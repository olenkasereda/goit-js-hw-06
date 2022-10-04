const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const makeIngredientsEl = ingredients.map((ingredient) => {
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;
  return ingredientEl;
});
  

console.log(makeIngredientsEl);
document.querySelector('#ingredients').append(...makeIngredientsEl);