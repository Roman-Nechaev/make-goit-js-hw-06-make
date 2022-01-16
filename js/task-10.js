// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlInputEl = document.querySelector('#controls input');
const btnBoxes = document.querySelectorAll('#controls button');
const divEl = document.querySelector('#boxes');
console.log(divEl);

btnBoxes[0].addEventListener('click', amount => {
    amount = controlInputEl.value;

    const arreyDiv = [];
    let size;
    for (let i = 0; i < amount; i += 1) {
        size = 30 + i * 10;
        const divItemEl = document.createElement('div');
        divItemEl.style.width = `${size}px`;
        divItemEl.style.height = `${size}px`;
        divItemEl.classList.add('create-box');
        divItemEl.style.backgroundColor = getRandomHexColor();
        arreyDiv.push(divItemEl);
        console.log(arreyDiv);
    }
    return divEl.append(...arreyDiv);
});

btnBoxes[1].addEventListener('click', onClearBtn);

function onClearBtn() {
    divEl.innerHTML = '';
}
