const navBar = () => {
	const nav = document.querySelector('.nav-links');
	const burger = document.querySelector('.burger');
	const section = document.getElementsByClassName('section');
	const links = document.getElementsByClassName('nav-link');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});

	for (i = 0; i < links.length; i++) {
		links[i].addEventListener('click', clickMyLink);
	}
	// event listener
	function clickMyLink(e) {
		// Calling smooth scroll function
		smoothScroll(event);

		if (nav.classList.contains('nav-active')) {
			// Close navbar in smaller screens
			burger.click;
		}

		for (j = 0; j < section.length; j++) {
			// deactivate all links
			links[j].classList.remove('current');
			// hide all section
			section[j].classList.remove('current');
		}
		// activate current myLink
		e.currentTarget.classList.add('current');
	}

	// Smooth Scrolling
	function smoothScroll(event) {
		event.preventDefault();
		const targetId = event.currentTarget.getAttribute('href');
		let destination = document.querySelector(targetId).offsetTop;
		window.scrollTo({
			top: destination,
			behavior: 'smooth',
			speed: 100
		});
	}

	// Scroll Up Effect
	const scrollBtn = document.getElementById('scrollUp');
	const homepage = document.getElementById('homepage');
	scrollBtn.addEventListener('click', e => {
		e.preventDefault();
		let destination = homepage.offsetTop;
		window.scrollTo({
			top: destination,
			behavior: 'smooth'
		});
	});
};

// Parallax Effect
const parallaxEffect = () => {
	const parallax = document.querySelectorAll('.parallax');
	window.addEventListener('scroll', () => {
		let offset = window.pageYOffset;
		for (let i = 0; i < parallax.length; i++) {
			parallax[i].style.backgroundPositionY = (offset - parallax[i].offsetTop) * 0.7 + 'px';
		}
	});
};

const pageFunction = () => {
	navBar();
	parallaxEffect();
};

pageFunction();
