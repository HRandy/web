function doFirst(){
	
	if(navigator.geolocation){
		alert('Geolocation suport')
		navigator.geolocation.getCurrentPosition(succCallback,errorCallback,{
			timeout:1,
			enableHighAccuracy:false //可省略
		
		});
		
	}else{
		alert('Geolocation not work')
		
	}
	
	
}

function succCallback(e){
	
	var lati = e.coords.latitude;
	var longi = e.coords.longitude;
	
	document.getElementById('position').innerHTML = '緯度'+lati+'<br>經度'+longi;
	
}

function errorCallback(e){
	
	/* document.getElementById('position').innerHTML = 'Code:'+e.code+'<br>Message:'+e.message; */
	alert('Code:'+e.code+'\nMessage:'+e.message;)//'\n'是換行，因為alert是HTML5功能
	
}
window.addEventListener('load',doFirst,false);
