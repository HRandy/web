var storage = sessionStrage;

function doFirst(){
	
	storage.clear();
	
	for(var i=0;i<10;i++){
		storage.setItem('key='+i,'value='+i)
		
	}
	
	document.getElementById('getButton').addEventListener('click',getIndex,false);
	
}

function getIndex(){
	var Index = document.getElementById('IndexText').value;
	var key = storage.key(index);
	var value = storage.getItem(key);
	
	alert('Index '+Index+' : key : '+key+' / value : '+value);
}
window.addEventListener('load',doFirst,false);