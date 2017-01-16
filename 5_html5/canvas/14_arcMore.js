function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.strokeStyle = 'red';
	canvas.lineWidth = 10;
	
	canvas.arc(150,150,100,0,2*Math.PI,false);
	canvas.stroke();
	
	canvas.beginPath();
	
	//圓心較不好掌握
	/* canvas.moveTo(150,150);
	canvas.lineTo(150,70);
	canvas.stroke(); */
	
	//translate將圓心座標定位成(0,0)
	canvas.translate(150,150);
	canvas.moveTo(0,0);
	canvas.lineTo(0,-80);
	canvas.stroke();
	
	
}
window.addEventListener('load',doFirst,false);