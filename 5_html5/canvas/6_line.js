function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.strokeStyle = 'red';
	canvas.lineWidth = '10';
	
	
	//linecap
	canvas.lineCap = 'butt';
	canvas.beginPath();	//不加會互相影響
	canvas.moveTo(100,100);
	canvas.lineTo(200,100);
	canvas.stroke();
	
	canvas.lineCap = 'round';
	canvas.beginPath()
	canvas.moveTo(100,150);
	canvas.lineTo(200,150);
	canvas.stroke();
	
	canvas.lineCap = 'square';
	canvas.beginPath()
	canvas.moveTo(100,200);
	canvas.lineTo(200,200);
	canvas.stroke();
	
	
	canvas.strokeStyle = 'green';
	canvas.lineWidth = '20';
	//lineJoin
	canvas.lineJoin = 'miter';
	canvas.strokeRect(100,300,150,200);
	canvas.beginPath()
	canvas.lineJoin = 'round';
	canvas.strokeRect(280,300,150,200);
	canvas.beginPath()
	canvas.lineJoin = 'bevel'; 
	canvas.strokeRect(480,300,150,200);
	
	
	
	
	
	
}
window.addEventListener('load',doFirst,false);