window.onload = function () {

	var canvas = document.querySelector('#canvas');
	var txt = document.querySelector('#text');

	if (canvas.getContext) {
		canvas.width = 400
		canvas.height = 400

		var canvasWidth = canvas.width;
		var canvasHeight = canvas.height;

		var ctxCanvas = canvas.getContext('2d');

		ctxCanvas.fillStyle = 'rgba(0, 0, 200, .5)';
		ctxCanvas.fillRect(10,10,200,200);

		ctxCanvas.fillStyle = 'rgb(200, 0, 0)';
		ctxCanvas.fillRect(50,50,200,200);

		ctxCanvas.strokeRect(100,100,200,200);

		ctxCanvas.clearRect(100,100,50,50);

		// text

		txt.width = 300
		txt.height = 300

		var txtCtx = txt.getContext('2d');

		txtCtx.font = '40px sans-serif';
		txtCtx.fillText('Fill text', 20, 50);

		txtCtx.font = '30px serif';
		txtCtx.strokeText('Stroked text', 100, 100);

		// center text

		var center = document.querySelector('#center');
		center.height = 400
		center.width = 400
		var ctxCenter = center.getContext('2d');

		var data = [{
			value: 'lorem ipsum dolor est',
			color: '#0cf'
		}, {
			value: 'lorem ipsum',
			color: '#0cf'
		}];



		// alert('Width of text ' + textExample + ' is equal ' + textWidth.width + 'px');

		ctxCenter.font = '30px serif';
		ctxCenter.textAlign = 'center';
		ctxCenter.textBaseline = 'middle';
		ctxCenter.fillText(data[1].value, center.width/2, center.height/2);

	} else {
		alert('Browser don\'t support canvas!')
	}



	// alert('Canvas width is ' + canvasWidth + 'px');
	// alert('Canvas height is ' + canvasHeight + 'px');

};
