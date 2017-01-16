function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.font = '50px normal Tahoma';
	
	canvas.fillText('OMG!!!!',100,100);
	canvas.textBaseline = 'top';
	
	canvas.moveTo(100,100);
	canvas.lineTo(200,100);
	
	/* canvas.stroke(); */
	
	
	
	/* canvas.textBaseline = 'hanging'; */
	
	
	
	
}
window.addEventListener('load',doFirst,false);