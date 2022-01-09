const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Напиши скрипт, который для каждого элемента массива ingredients:
// 1.Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// 2.Добавит название ингредиента как его текстовое содержимое.
// 3.Добавит элементу класс item.
// 4.После чего вставит все <li> за одну операцию в список ul.ingredients.

  const ingredientsListEl = document.querySelector('#ingredients');

 const addElement = ingredients.map(option => {
    const addItemEl = document.createElement('li');
    addItemEl.classList.add('item');
    addItemEl.textContent = option;
  
    return addItemEl;
  });
  console.log(addElement);



  ingredientsListEl.append(...addElement);








