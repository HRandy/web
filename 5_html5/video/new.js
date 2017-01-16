
//按鍵會自由變換play or pause
//按螢幕會撥放或暫停
//播放bar會隨影片播放時間移動
//按播放bar時影片會隨著更動
//全螢幕切換


function doFirst(){
	
	barSize = 560;
	
	myMovie = document.getElementById('myMovie');
	playButton = document.getElementById('playButton');
	fullButton = document.getElementById('fullButton');
	defaultBar = document.getElementById('defaultBar');
	progressBar = document.getElementById('progressBar');
	
	playButton.addEventListener('click',playOrPause,false);
	fullButton.addEventListener('click',fullScrean,false);
	defaultBar.addEventListener('click',clickBar,false);
	
	
}

function playOrPause(){
	if(!myMovie.paused && !myMovie.ended){		//不為暫停或結束時(播放中)
		myMovie.pause();
		playButton.innerHTML = 'Pause';
	} else{
		myMovie.play();
		playButton.innerHTML = 'Play';
		setInterval(update,400);
	}
	
	
}

function update(){
	if(!myMovie.ended){				//不為結束時(暫停)
		progressBar.style.width =  + 'px';
		
	}else{
		progressBar.style.width =   + 'px';
	}
	
}

function fullScrean(){
	myMovie.webkitEnterFullscrean();
	
	
}


function clickBar(){
	
}


window.addEventListener('load',doFirst,false);