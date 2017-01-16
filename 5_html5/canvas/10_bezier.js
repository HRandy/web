function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	canvas.strokeStyle = 'red';
	canvas.lineWidth = '5';
	
	
	//貝茲3次曲線 canvas.bezierCurveTo(cx0,cy0,cx1,cy1,x終點,y終點)
	canvas.moveTo(150,180);
	canvas.bezierCurveTo(200,300,400,180,500,500);
	canvas.stroke();
	
	canvas.strokeStyle = 'blue';
	canvas.lineWidth = '1';
	canvas.beginPath();
	canvas.moveTo(150,180);
	canvas.lineTo(200,300);
	canvas.lineTo(400,180);
	canvas.lineTo(500,500);
	canvas.stroke();
		
}
window.addEventListener('load',doFirst,false);