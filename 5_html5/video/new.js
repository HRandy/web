
//����|�ۥ��ܴ�play or pause
//���ù��|����μȰ�
//����bar�|�H�v������ɶ�����
//������bar�ɼv���|�H�ۧ��
//���ù�����


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
	if(!myMovie.paused && !myMovie.ended){		//�����Ȱ��ε�����(����)
		myMovie.pause();
		playButton.innerHTML = 'Pause';
	} else{
		myMovie.play();
		playButton.innerHTML = 'Play';
		setInterval(update,400);
	}
	
	
}

function update(){
	if(!myMovie.ended){				//����������(�Ȱ�)
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