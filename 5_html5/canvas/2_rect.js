function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	/* canvas.fillRect(100,100,250,250);
	canvas.clearRect(150,150,50,50); */
	
	/* canvas.rect(); */
	canvas.strokeRect(250,250,250,250);
	canvas.fillRect(270,270,10,10);
	
	
	
	
}
window.addEventListener('load',doFirst,false);