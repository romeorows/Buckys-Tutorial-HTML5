
function doFirst(){
	// 38 - Making Sweet Custom Shapes!
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d'); //without var means its a global variable
	canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(300,200);
	canvas.closePath();
	canvas.stroke();
	
	// 37 - Gradients on the Canvas
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// var g = canvas.createLinearGradient(0,0,100,100);
	// g.addColorStop(.0,"blue");
	// g.addColorStop(.5,"green");
	// g.addColorStop(1,"red");
	// canvas.fillStyle=g;
	// canvas.fillRect(0,0,100,100);
	
	// 36 - Drawing Shapes on the Canvas
	// var x = document.getElementById('canvas');
	// canvas = x.getContext('2d'); //without var means its a global variable
	// canvas.fillStyle="blue";
	// canvas.strokeStyle="red";
	// canvas.strokeRect(10,10,100,100);
	// canvas.fillRect(10,120,100,100);
	// canvas.clearRect(20,130,45,65);
	
}

window.onload=doFirst;
