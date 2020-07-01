var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');


button.addEventListener('click', function () {
    modal.classList.add('modal_active');
});

close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});


// Добавил таймер закрытия модального окна через 5 секунд, Хз как, но получилось
setTimeout(() => {
    modal.classList.remove('modal_active');
}, 5000);