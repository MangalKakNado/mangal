$('form').on('submit', function (e) {
    e.stopPropagation();
    e.preventDefault();

    const data = {};

    $(this).find('input').each(function() {
        data[this.name] = $(this).val();
    });

    $.ajax({
        url: "https://n9xa29hcy3.execute-api.eu-central-1.amazonaws.com/telApi/telegramapi",
        type: "POST",
        data: JSON.stringify(data),
        dataType: "json",
        success: function (text) {
            if (text === "success") {
                alert("Спасибо. Заявка отправлена и мы свяжемся с Вами в ближайшее время.");
                $('form').each((e, t) => t.reset());
            } else {
                alert("Ошибка. Пожалуйста, попробуйте еще раз.");
            }
        }
    });

    alert("Спасибо. Заявка отправлена и мы свяжемся с Вами в ближайшее время.");
    $('form').each((e, t) => t.reset());
    hideModals();
});

/*---------------------------------------------------end*/


function showModal(id) {
    $(id).fadeIn();
}
function hideModals() {
    $(document.body).removeClass('is-open-modal');
    $('.modal').fadeOut();
}
$(".modal-open").on('click', function (e) {
    console.log("modal click");
    showModal('#modal_1');
    e.preventDefault();
});

$(document).on('click', function (e) {
    if (!(
        ($(e.target).parents('.modal-content').length)
        || ($(e.target).hasClass('modal-content'))
        || ($(e.target).hasClass('modal-open'))
        || ($(e.target).hasClass('data_processing-label'))
    )
    ) {
        hideModals();
    }
});

/*---------------------------------------------------end*/

$('.menuBtn').on('click', function () {
    $(this).toggleClass('is-show');
    $('.header').toggleClass('menu-show');
    $('.header nav').slideToggle();
});

/*---------------------------------------------------end*/

$('.dropdown-btn').on('click', function () {
    var dropdownMenu = $(this).next(".dropdown-menu");
    dropdownMenu.slideToggle();
});

/*---------------------------------------------------end*/

$('.go_to').click(function () {
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length !== 0) {
        $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500);
    }
    return false;
});
