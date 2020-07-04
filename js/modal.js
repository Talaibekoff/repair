/* jQuery ждет (ready), когда document прогрузится
То есть скрипт начинает работать только после того, 
как документ полностью прогрузится */
$(document).ready(function () {
    var button = $('#button'); //Объявил переменную button
    var modal = $('#modal'); //Объявил переменную modal
    var close = $('#close'); //Объявил переменную close
    var buttonSuccess = $('#button-success'); //Объявил переменную buttonSuccess
    var success = $('#success'); //Объявил переменную success
    var closeSuccess = $('#close-success'); //Объявил переменную closeSuccess

    var scrollToTop = $('#scroll-to-top');

    /* При клике на button, к модальному окну 
    присваивается класс-модификатор modal_active */
    button.on('click', function () { // on - отслеживание действия "клик"
        modal.addClass('modal_active'); //addClass - присвоение нового класса
    });
    
    /* При клике на close, у модального окна 
    удаляется класс-модификатор modal_active */
    close.on('click', function () {
        modal.removeClass('modal_active'); // removeClass - удаление класса
    });

    /* При клике на buttonSuccess у модального окна
    удаляется класс modal_active, а к окну success 
    присваивается класс success_active */
    buttonSuccess.on('click', function () {
        modal.removeClass('modal_active');
        success.addClass('success_active');

        /* После появления окна success через 5 секунд
        автоматически удаляется класс success_active */
        setTimeout(() => {  // Установление таймаута
            success.removeClass('success_active');
        }, 5000); // В милисекундах
    });

    //Удаление класса-модификатора при клике на крестик
    closeSuccess.on('click', function () {
        success.removeClass('success_active'); 
    });

    //При клике на кнопку страница откручивается вверх
    scrollToTop.on('click', function () {
        $('html, body').animate({scrollTop: 0}, 500);
    });



});