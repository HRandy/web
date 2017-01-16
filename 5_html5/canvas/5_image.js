function doFirst(){
	var x = document.getElementById("canvas");
	var canvas = x.getContext("2d");
	
	var myPic = new Image();
	myPic.src = '../../img/images/limes.jpg';
	myPic.addEventListener('load',function(){
		canvas.drawImage(myPic,0,0,x.width,x.height);
	},false);
	
	
	
	
}
window.addEventListener('load',doFirst,false);