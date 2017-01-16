function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.strokeStyle = 'red';
	canvas.lineWidth = '5';
	
	canvas.moveTo(150,180);
	canvas.quadraticCurveTo(200,300,400,180);
	canvas.stroke();
	
	
	
	canvas.strokeStyle = 'blue';
	canvas.lineWidth = '1';
	canvas.beginPath();
	canvas.moveTo(150,180);
	canvas.lineTo(200,300);
	canvas.lineTo(400,180);
	canvas.stroke();
	
	
	
	
	
	
	
}
window.addEventListener('load',doFirst,false);