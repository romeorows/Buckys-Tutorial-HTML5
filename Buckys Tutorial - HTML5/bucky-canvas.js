// 36 - Drawing Shapes on the Canvas
function doFirst(){
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d'); //without var means its a global variable
	canvas.fillRect(10,10,100,200);
	canvas.clearRect(20,20,50,90);
	//canvas.strokeRect(10,10,100,200);
	

}

window.onload=doFirst;
