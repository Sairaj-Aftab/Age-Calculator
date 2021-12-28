
const button = document.querySelector('#button');
const result = document.querySelector('#result');
const name = document.querySelector('#name');
const age = document.querySelector('#age');




button.addEventListener('click', ()=>{
    result.innerHTML = ageCal(name.value, age.value);
})
