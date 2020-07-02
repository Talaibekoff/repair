/* Обявил переменную button. document - искать элемент будет в документе HTML
querySelector - функция, позволяющая найти определенный элемент */
var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close');
var buttonSuccess = document.querySelector('#button-success');
var success = document.querySelector('#success');
var closeSuccess = document.querySelector('#close-success');

/* addEventListener - функция, позволяющая отловить событие (например, клик)
Внутри function пишется код, который выпольняется при выполненном событии (при клике на button), classList - находит список всех классов у переменной modal, add - добавляет новый класс элементу modal.
Проще говоря, при клике на button, к классу modal присваивается новый класс-модификатор modal_active, и появляется модальное окно */
button.addEventListener('click', function () {
    modal.classList.add('modal_active');
});

/* При клике на buttonSeccuss у открытого модального окна удаляется класс-можификатор modal_active - и модальное окно закрывается. А окну success присваивается мласс-модификатор success_active и появляется новое окно success_active сразу после закрытия modal_active */
buttonSuccess.addEventListener('click', function () {
    modal.classList.remove('modal_active');
    success.classList.add('success_active');

    // Добавил таймер закрытия окна success через 5 секунд, Хз как, но получилось
    setTimeout(() => {
        success.classList.remove('success_active');
    }, 5000);
});

/* При клике на кнопку close, у кдасса modal удаляется класс-модификатор modal_active и модальное окно закрывается */
close.addEventListener('click', function () {
    modal.classList.remove('modal_active');
});

/* При клике на кнопку closeSuccess, у класса success улаляется класс-модификатор success_active и окно success закрывается */
closeSuccess.addEventListener('click', function () {
    success.classList.remove('success_active');
});