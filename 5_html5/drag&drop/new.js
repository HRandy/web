function doFirst{
	image = document.getElementById('image');
	image.addEventListener('dragstart',startDrag(),false);
	image.addEventListener('dragend',endDrag(),false);
	
	leftbox = document.getElementById('leftbox');
	leftbox.addEventListener('dragover',function(e){e.privateDefault()},false);
	leftbox.addEventListener('',function(e){e.privateDefault()},false);
	leftbox.addEventListener(?,function(){e.privateDefault()},false);
	
	
}

startDrag(){
	
}