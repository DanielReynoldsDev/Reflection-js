const website = $('.website');
const menuBtn = $('#menu-btn');
const homepage = $('#homepage');

homepage.on('click', function (event) {

	if (event.target.classList.contains('headerBtn') && !website.hasClass('active')) {
		website.addClass('active');
		$('html').css('overflow', 'hidden');


	} else if (event.target.classList.contains('website') && website.hasClass('active')) {
		website.removeClass('active');
		$('html').css('overflow', 'auto');
	};
});