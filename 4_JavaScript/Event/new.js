


function doFirst(){
				
		document.getElementById('theForm').onsubmit = setEvent;
				
}	


function setEvent(){
		var events = ['click','select','contextmenu','change','input'];
		
		for(var i=0; i<events.length; i++){
			var list = document.getElementById(events[i]).value;
			//alert(list);
			
			if(list.checked){
				document.addEventListener(events[i],report, false);
			}else{
				document.removeEventListener(events[i],report, false);
			}
		document.getElementById('output').value = '';
		
		}
		
		return false;
	 
}


function report(e){
	//BODY : click
	var message = e.target.nodeName + ' : ' + e.type + '\n';
	document.getElementById('output').value += message;
}


window.addEventListener('load',doFirst,false);