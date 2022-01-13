var lastScrollTop; // This Varibale will store the top position
var headHeight = 210

navbar = document.getElementById('headersticky'); // Get The NavBar

window.addEventListener('scroll', function () {
	//on every scroll this funtion will be called

	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	//This line will get the location on scroll

	if (scrollTop > lastScrollTop && scrollTop > headHeight) { //if it will be greater than the previous
		navbar.style.top = '-210px';
		//set the value to the negetive of height of navbar 
	} else {
		navbar.style.top = '0';
	}

	lastScrollTop = scrollTop; //New Position Stored
});