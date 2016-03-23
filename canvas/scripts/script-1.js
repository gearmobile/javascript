var drawing = document.querySelector('#drawing');
var canvas = document.querySelector("#canvas");
var stroke = document.querySelector("#stroke");
var clear = document.querySelector("#clear");
var clock = document.querySelector("#clock");


if ( drawing.getContext ) {
	var drawingContext = drawing.getContext('2d');
	drawingContext.strokeStyle = "red";
	drawingContext.fillStyle = "#00ff00";
}


if ( canvas.getContext ) {
	var canvasContext = canvas.getContext("2d");
	canvasContext.fillStyle = "#ff0000";
	canvasContext.fillRect("10, 10, 50, 50");
	
	canvasContext.fillStyle = "rgba(0, 0, 255, 0.5)";
	canvasContext.fillRect(30, 30, 50, 50);
}

if ( stroke.getContext ) {
	var strokeContext = stroke.getContext("2d");
	strokeContext.strokeStyle = "#ff0000";
	strokeContext.strokeRect(10, 10, 50 , 50);
	
	strokeContext.strokeStyle = "rgba(0, 0, 255, 0.5)";
	strokeContext.strokeRect(30, 30, 50, 50);
}

if ( clear.getContext ) {
	var clearContext = clear.getContext("2d");
	
	clearContext.fillStyle = "#ff0000";
	clearContext.fillRect(10, 10, 50, 50);
	
	clearContext.fillStyle = "#0000ff";
	clearContext.fillRect(30, 30, 50, 50);
	
	clearContext.clearRect(40, 40, 10, 10);
}

if ( clock.getContext ) {
	var clockContext = clock.getContext("2d");
	
	clockContext.beginPath();
	
	clockContext.moveTo(100, 100);
	clockContext.lineTo(100, 15);
	
	clockContext.moveTo(100, 100);
	clockContext.lineTo(35, 100);
}