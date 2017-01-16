


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
		
		//®æ¦¡¤Æ//
		total = total.toFixed(2);
		
		document.getElementById('total').value = total;
		
		return false;
	 
}


window.addEventListener('load',doFirst,false);