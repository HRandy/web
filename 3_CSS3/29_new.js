
function doFirst(){
	
	//先建HTML物件關聯
	image = document.getElementById('image');
	playbutton = document.getElementById('playbutton');
	pausebutton = document.getElementById('pausebutton');
	
	//再建立事件聆聽
	playbutton.addEventListener('click',playImage,false);
	pausebutton.addEventListener('click',pauseImage,false);
	
}


function playImage(){
	image.style.animationPlayState='running';
	
	
}





function pauseImage(){
	image.style.animationPlayState='paused';
	
}

window.addEventListener('load',doFirst,false);