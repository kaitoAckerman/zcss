$(document).ready(function () {
	console.log("ready!");
});

$('[data-modal]').on('click', function (e) {
	var modal = jQuery(this).attr('data-modal');
	$('[data-content="' + modal + '"]').fadeIn(350);
	e.preventDefault();
});

$('[data-close]').on('click', function (e) {
	var modal = jQuery(this).attr('data-close');
	$('[data-content="' + modal + '"]').fadeOut(350);
	e.preventDefault();
});