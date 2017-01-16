function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	
	canvas.strokeStyle = 'red';
	canvas.fillStyle = 'blue';
	canvas.lineWidth = '10';
	
	canvas.moveTo(100,100);
	canvas.lineTo(200,200);
	canvas.lineTo(200,300);
	canvas.closePath();
	
	
	
	canvas.stroke();
	canvas.fill();
	
	
	
	
	
}
window.addEventListener('load',doFirst,false);