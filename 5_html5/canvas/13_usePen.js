function doFirst(){
	var x = document.getElementById("canvas");
	
	//要把canvar變為實體變數，否則function mousemove無法取值
	canvas = x.getContext("2d");
	x.addEventListener('mousemove',usePen,false);

}

function usePen(e){
	canvas.fillRect(e.clientX,e.clientY,5,5);
	
}
window.addEventListener('load',doFirst,false);