function doFirst(){
		document.getElementById('taskForm').onsubmit = process;
				
}	

function process(){
		var start = document.getElementById('start').value;
		var end = document.getElementById('end').value;
		
		var message = '';
		var day = 24*60*60*1000;
		
		var startDate = new Date(start);
		var endDate = new Date(end);
				
		if(startDate.getTime() && endDate.getTime()){
			if(startDate < endDate){
				var diff = endDate - startDate;
				alert(diff);
				if(diff <= day){
					message += '1 day';
				} else{
					message += Math.round(diff/day) + ' days';
				}
				} else{			//�}�l�ɶ��S���񵲧��ɶ���
				message += 'The startdate should before enddate.';
			}
		} else{				//�ɶ��榡�����T
			message += 'The startdate or enddate is not right.';
		}
		
		document.getElementById('output').innerHTML = message;
		
		return false;
	 
}


window.addEventListener('load',doFirst,false);