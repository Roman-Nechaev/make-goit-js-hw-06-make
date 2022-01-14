// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.

// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const counter = {
    value: 0,
    increment() {
        console.log('increment -> this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement -> this', this);
        this.value -= 1;
    },
};

const useBtn = document.querySelectorAll('#counter button');

const counterValueEl = document.querySelector('#value');

useBtn[0].addEventListener('click', function () {
    // console.log('Клик - ');
    counter.decrement();
    // console.log(counter);
    counterValueEl.textContent = counter.value;
});

useBtn[1].addEventListener('click', function () {
    // console.log('Клик + ');
    counter.increment();
    // console.log(counter);
    counterValueEl.textContent = counter.value;
});
