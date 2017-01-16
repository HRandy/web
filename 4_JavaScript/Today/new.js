setInterval(doFirst,1000)       //即時回傳值: 某物件 = setInterval(某函數,多少毫秒)

function doFirst(){
		var today = new Date();
		var message = today.toLocaleDateString();
		message += ' at ' + today.getHours() + ':';		
		message += today.getMinutes() + ':' + today.getSeconds();	
				
		document.getElementById('output').innerHTML = message;
}	

//window.addEventListener('load',doFirst,false);