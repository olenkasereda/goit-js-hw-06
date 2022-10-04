const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    valueResult: document.querySelector('#value')
}

let counterValue = 0;

refs.btnDecrement.addEventListener('click', () => {
    counterValue -= 1;
    refs.valueResult.textContent = counterValue;
});

refs.btnIncrement.addEventListener('click', () => {
    counterValue += 1;
    refs.valueResult.textContent = counterValue;
});
    
    