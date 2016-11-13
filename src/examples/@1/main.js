window.onload = function() {
	// When using id's the variable is exposed
	const canvas = a;
	const ctx = a.getContext("2d");
	let w = canvas.width = window.innerWidth;
	let h = canvas.height = window.innerHeight;

	for (let i = 0; i < 100; i += 1) {
		ctx.beginPath();
		ctx.moveTo(Math.random() * w, Math.random() * h);
		ctx.lineTo(Math.random() * w, Math.random() * h);
		ctx.stroke();
	}

	// If the window is resizes fill the page again.
	window.onresize = function() {
		w = canvas.width = window.innerWidth;
		h = canvas.height = window.innerHeight;
	};
};
