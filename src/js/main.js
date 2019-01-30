
/* Modal test */
$('[data-modal]').click(function () {
    $('#' + $(this).data('modal')).addClass('modal--active');
})
$('[data-dismiss]').click(function () {
    $('#' + $(this).data('dismiss')).removeClass('modal--active');
})

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
