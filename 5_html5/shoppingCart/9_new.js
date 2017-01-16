storage = sessionStorage;

function doFirst(){
	
	
	
	if(storage['addItemList']==null){
		storage['addItemList']=' ';		//storage.setItem('addItemList','')
	}
	
	//幫每個Add Catt建事件聆聽功能
	var list = document.querySelectorAll('.addButton')	//list是陣列
		
	for(var i=0; i<list.length; i++){
			list[i].addEventListener('click',function(){
				var teddyInfo = document.querySelector('#'+this.id+' input').value; //關鍵!! input要多一個空格
				addItem(this.id,teddyInfo);
				
			},false)
		
		
		
	}
}

function addItem(itemId,itemValue){
	//alert(itemId+' : '+itemValue);
	var image = document.createElement('img');
	image.src = 'imgs/'+ itemValue.split('|')[1];
	image.id = 'imageSelector';
	
	var title = document.createElement('span');
	title.innerText = 'imgs/'+ itemValue.split('|')[0];
	title.id = 'titleSelect';
	
	
	var price = document.createElement('span');
	price.innerText = parseInt('imgs/'+ itemValue.split('|')[2]);
	price.id = 'priceSelect';
	
	
	var newItem = document.getElementById('newItem');
	
	//判斷原本有物件，先刪除
	if(newItem.haschildNodes){
		while(newItem.childNodes.length>=1){
			newItem.removeChild(newItem.firstChild);
		}
	}
	
	//顯示新物件
	newItem.appendChild(image);
	newItem.appendChild(title);
	newItem.appendChild(price);
	
	
	//設定STORAGE
	if(storage[itemId]){			
		alert('have checked!!');
	}else{
		storage['addItemList'] += newItem;		//storage.setId(itemId.itemValue);
		storage['itemId']=itemValue;
	}
	
	
}
window.addEventListener('load', doFirst, false);





