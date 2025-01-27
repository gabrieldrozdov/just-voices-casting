const homeBackground = document.querySelector('.home-background');
const animations = ['scale', 'rotate', 'translate', 'corners', 'blur', 'brightness', 'background-size', 'display'];

function idea1(animationName) {
	const animation = animationName || animations[Math.floor(Math.random()*animations.length)];
	for (let i=2; i<15; i++) {
		const mouth = document.createElement('div');
		mouth.classList.add('home-background-mouth');
		mouth.style.animation = `${animation} 1.5s infinite cubic-bezier(0.76, 0, 0.24, 1) alternate-reverse`;
		mouth.style.width = `${i*8}vmax`;
		mouth.style.animationDelay = `${-15+i/10}s`;
		mouth.style.zIndex = 100-i;
		mouth.style.filter = `contrast(${100-i*5}%)`;
		homeBackground.appendChild(mouth);
	}
}

function idea2(animationName) {
	const animation = animationName || animations[Math.floor(Math.random()*animations.length)];
	const mouth = document.createElement('div');
	mouth.classList.add('home-background-mouth');
	mouth.style.width = `${Math.random()*20+10}vmax`;
	mouth.style.left = `${Math.random()*100}%`;
	mouth.style.top = `${Math.random()*100}%`;
	mouth.style.animation = `${animation} 1.5s infinite cubic-bezier(0.76, 0, 0.24, 1) alternate-reverse`;
	homeBackground.appendChild(mouth);
	setTimeout(() => {mouth.remove()}, Math.random()*3000+1000);
	setTimeout(() => idea2(animationName), Math.random()*200+100);
}
// idea2('blur');