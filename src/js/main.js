/* Masonry */
$('.masonry').isotope({
    itemSelector: '.masonry__item',
    masonry: {
        gutter: 10,
        horizontalOrder: true,
    }

});


/* Notify */
$('.notify').click(function () {
    var notify = this;
    setTimeout(function () {
        $(notify).removeAttr("style").hide();
    }, 800);
    $(this).removeClass('shake');
    $(this).addClass('animate animate--fadeOut');
});

/* Modal */
$('[data-modal]').click(function () {
    $('#' + $(this).data('modal')).addClass('modal--active');
    $('#' + $(this).data('modal') + '> .modal__content').addClass('animate animate--bounceInDown');
});
$('[data-dismiss]').click(function () {
    var dismiss = this;
    setTimeout(function () {
        $('#' + $(dismiss).data('dismiss')).removeClass('modal--active');
        $('#' + $(dismiss).data('dismiss') + '> .modal__content').removeClass('animate animate--bounceOutUp');
    }, 800);
    $('#' + $(this).data('dismiss') + '> .modal__content').removeClass('animate animate--bounceInDown');
    $('#' + $(this).data('dismiss') + '> .modal__content').addClass('animate animate--bounceOutUp');
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