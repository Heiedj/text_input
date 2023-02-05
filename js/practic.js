'use strict'
// На кнопку повесить обработчик события клик. При нажатии на нее содержимое 
// поля input необходимо вставлять в блок div (добавлять к существующему содержимому)
document.querySelector('button').onclick = function(){
    let a = document.querySelector('input');
    let b = document.querySelector('.text');
    b.insertAdjacentHTML('beforeend', `<p>${a.value}</p>`);
    a.value = '';
}

