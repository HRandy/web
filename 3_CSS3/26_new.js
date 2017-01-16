function doFirst(){
	
	//先建HTML物件關聯
	
	var list = document.querySelectorAll('p')  //list是陣列

	//再建立事件聆聽功能
	
	for(var i=0; i<list.length; i++){
		list[i].onclick = talk;
		
	}
				
}	


function talk(){
				
	alert('hi~~~~~~~');
	
}


window.addEventListener('load',doFirst,false);