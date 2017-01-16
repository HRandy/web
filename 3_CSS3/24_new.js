function doFirst(){
				//先建物件關聯，再見事件聆聽功能
				document.querySelector('p').onclick = talk;

	
}	


function talk(){
				
				alert('hi~~~~~~~');
	
}


window.addEventListener('load',doFirst,false);