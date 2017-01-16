function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	
	
	var gradient = canvas.createRadialGradient(200,150,20,200,150,50);
	gradient.addColorStop(0,'yellow');
	gradient.addColorStop(1,'green');
	
	
	canvas.fillStyle = gradient;
	canvas.fillRect(100,100,500,500);
;		
}
window.addEventListener('load',doFirst,false);