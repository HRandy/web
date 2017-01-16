function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.strokeStyle = 'red';
	canvas.lineWidth = 10;
	
	//下半圓
	canvas.arc(150,150,100,0,Math.PI,false);
	canvas.stroke();

	//上半圓
	canvas.beginPath();
	canvas.arc(400,150,100,0,Math.PI,true);
	canvas.stroke();
	
	
	//圓
	canvas.beginPath();
	canvas.arc(150,400,100,0,2*Math.PI,false);
	canvas.stroke();
	
	
	//缺角圓
	canvas.beginPath();
	canvas.arc(400,400,100,0.2*Math.PI,1.7*Math.PI,false);
	canvas.stroke();
	
	
	
	
	
}
window.addEventListener('load',doFirst,false);