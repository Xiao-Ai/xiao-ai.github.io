function draw() {
	var posX = 0;
	var posY = 0;

	var x = c.width / 1000;
	var y = c.height / 1000;

	setInterval(function() {
		posX += x;
		posY += y;


		ctx.clearRect(0, 0, c.width, c.height);

		ctx.fillStyle = "#4AD9D9";
		ctx.fillRect(50, 60, 30, 30);

		ctx.fillStyle = "#F5A503";
		ctx.beginPath();
		ctx.arc(posX, posY, 50, 0, Math.PI * 2);
		ctx.fill();

		ctx.fillStyle = "#F2385A";
		ctx.beginPath();
		ctx.arc(posX+400, 200, 60, 0, Math.PI * 2);
		ctx.fill();

		ctx.fillStyle = "#36B1BF";
		ctx.font = "30px Arial";
		ctx.fillText("Hello, Aix", 100, 100);
	}, 10);
}
