// Contact hover effect
const aboutContact = document.querySelector('.about-contact');
let mousePos = [0.5, 0.5];
function calcMousePos(e, elmnt) { // percentage mousepos inside of contact
	const rect = elmnt.getBoundingClientRect();
	const x = (e.clientX - rect.left) / rect.width;
	const y = (e.clientY - rect.top) / rect.height;
	mousePos = [x, y];
}
aboutContact.addEventListener('mouseenter', (e) => {
	calcMousePos(e, aboutContact);
	aboutContact.dataset.move = 1;
})
aboutContact.addEventListener('mouseleave', (e) => {
	calcMousePos(e, aboutContact);
	aboutContact.dataset.move = 0;
})
aboutContact.addEventListener('mousemove', (e) => {
	calcMousePos(e, aboutContact);
})
let aboutContactPos = [0.5, 0.5];
function animateContact() {
	if (parseInt(aboutContact.dataset.move) == 0 || window.innerWidth < 600) {
		mousePos = [0.5, 0.5];
	}

	// Animate thumbnail
	let thumbnailDelta = [aboutContactPos[0] - mousePos[0], aboutContactPos[1] - mousePos[1]];
	let aboutContactPosX = aboutContactPos[0] - thumbnailDelta[0]/40;
	let aboutContactPosY = aboutContactPos[1] - thumbnailDelta[1]/40;
	aboutContactPos = [
		aboutContactPosX < .501 && aboutContactPosX > .499 ? .5 : aboutContactPosX,
		aboutContactPosY < .501 && aboutContactPosY > .499 ? .5 : aboutContactPosY
	];
	aboutContact.style.transform = `rotateY(${aboutContactPos[0]*20-10}deg) rotateX(${-(aboutContactPos[1]*20-10)}deg) translateX(${aboutContactPos[0]*40-20}%) translateY(${aboutContactPos[1]*1-.5}rem)`;
	requestAnimationFrame(animateContact);
}
animateContact();

// Page transitions
function pageTransition(url) {
	const body = document.querySelector('body');
	body.dataset.transition = 1;
	setTimeout(() => {
		window.location.href = url;
	}, 500)
}
for (let navLink of document.querySelectorAll('.nav a')) {
	navLink.addEventListener('click', (e) => {
		e.preventDefault();
		pageTransition(navLink.href);
	})
}
window.addEventListener('pageshow', (event) => {
	if (event.persisted) {
		console.log('Page was loaded from cache (back/forward navigation).');
		const body = document.querySelector('body');
		body.dataset.transition = 1;
	} else {
		console.log('Page loaded normally.');
	}
});