// Use custom script here

/* Modal */

$('[data-modal]').click(function () {
    $('#' + $(this).data('modal')).addClass('active');
})

$('.dropdown').bind('touchstart', function () {
    $('.menu').css("display", "block");
})


$('[data-dismiss]').click(function () {
    $('#' + $(this).data('dismiss')).removeClass('active');
})

$('#password, #password_confirmation').on('keyup', function () {
    if ($('#password').val() == $('#password_confirmation').val()) {
        $('#message').html('Password is matching').css('color', 'green');
    } else
        $('#message').html('Password not matching').css('color', 'red');
});
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
