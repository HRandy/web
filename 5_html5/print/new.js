function doFirst(){
	if(typeof window.print=='function'){
		var button = document.createElement('button');
		button.id = 'printbutton';
		button.innerText = 'print';
		button.addEventListener('click',function(){
			
		},false);
		
	}
	
}
window.addEventListener('load',doFirst,false);