setInterval(doFirst,1000)
/* setInterval(doSec,1000) */


function doFirst(){
	var today = new Date();
	var outPut = today.toLocaleDateString();
	var hour = today.getHours();
	var minute = today.getMinutes();
	var second = today.getSeconds();
	document.getElementById('output').innerHTML = outPut;
	document.getElementById('hour').innerHTML = hour;
	document.getElementById('minute').innerHTML = minute;
	document.getElementById('second').innerHTML = second;
	
	
	/* subMit = document.getElementById('subMit');			//建HTML物件關聯
	subMit.addEventListener('click',doSec,false);		//建事件聆聽 */
	
	
	
}
	
/* function doSec(){
	
	selectHour = document.getElementById('selectHour').value;
	selectMin = document.getElementById('selectMin').value;
	
	subMit.addEventListener('click',doSec,false);
	
	
	alert(selectMin); 
} */
	
	


function(){
	/* document.getElementById('settime').innerHTML = selectMin; */
	
}


	
	
	
	
	



/* 
function doFirst(){
				
		document.getElementById('theForm').onsubmit = calculate;
				
}	


function calculate(){
		var quantity = document.getElementById('quantity').value;
		alert(quantity);
		var price = document.getElementById('price').value;
		var taxrate = document.getElementById('taxrate').value;
		var discount = document.getElementById('discount').value;
		
		var total = quantity * price;
		
		taxrate = taxrate / 100;			//taxrate /=100
		taxrate++;
		total = total * taxrate;
		total = total - discount;
		
		//格式化//
		total = total.toFixed(2);
		
		document.getElementById('total').value = total;
		
		return false;
	 
}


window.addEventListener('load',doFirst,false); */