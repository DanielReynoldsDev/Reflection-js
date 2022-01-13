var modal = document.querySelector('.cookie-container');
var body = document.querySelector('body');


if (localStorage.getItem('cookie') === 'accepted'){
	modal.style.display = 'none';
	body.classList.remove('static');
	body.classList.add('default');
}  else {
	
	modal.style.display = 'flex';
	document.querySelector('#accept-cookies').addEventListener('click', function () {
		localStorage.setItem('cookie', 'accepted');
		modal.style.display = 'none';
		body.classList.remove('static');
		body.classList.add('default');

	});
}




