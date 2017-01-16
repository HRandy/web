
var storage = sessionStorage;

function storageAcess(accessId){
	var key = document.getElementById('keyText').value;
	var value = document.getElementById('valueText').value;
	
	switch(accessId){
		case 0
			storage.setItem(key,value);
			break;
		case 1
			storage.getItem(key);
			break;
		case 2
			storage.removeItem(key);
			break;
		case 0
			storage.clear();
			break;
		default:
			break;
	}
	
	
}
window.addEventListener('load',doFirst,false);