/* Notify */
$('.notify').click(function () {
    var notify = this;
    setTimeout(function () {
        $(notify).removeAttr("style").hide();
    }, 800);
    $(this).removeClass('shake');
    $(this).addClass('animated fadeOut');
});

/* Modal */
$('[data-modal]').click(function () {
    $('#' + $(this).data('modal')).addClass('modal--active');
    $('#' + $(this).data('modal') + '> .modal__content').addClass('animated bounceInDown');
});
$('[data-dismiss]').click(function () {
    var dismiss = this;
    setTimeout(function () {
        $('#' + $(dismiss).data('dismiss')).removeClass('modal--active');
        $('#' + $(dismiss).data('dismiss') + '> .modal__content').removeClass('animated bounceOutUp');
    }, 800);
    $('#' + $(this).data('dismiss') + '> .modal__content').removeClass('animated bounceInDown');
    $('#' + $(this).data('dismiss') + '> .modal__content').addClass('animated bounceOutUp');
});

/* Dropdown button in JS */
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}