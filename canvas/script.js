window.onload = function () {

	var canvas = document.getElementById('canvas').getContext('2d');

	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;

	canvas.fillRect(10,20,200,100);
	// canvas.fillStyle = '#0cf';

	canvas.moveTo(10,10);
	canvas.lineTo(200,200);
	canvas.strokeStyle = '#f00';
	canvas.stroke();

	canvas.textAlign = 'center';
	canvas.fillText('canvas', 50, 10);

	setTimeout( function () {
		alert(canvasHeight);
	}, 1000)

};
