function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	
	
	var gradient = canvas.createLinearGradient(150,150,200,200);
	gradient.addColorStop(0,'yellow');
	gradient.addColorStop(1,'green');
	
	
	canvas.fillStyle = gradient;
	canvas.fillRect(100,100,400,400);
;		
}
window.addEventListener('load',doFirst,false);