function getData(url){//without cros
	var xhr;
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		xhr = new ActiveXObject('Microsoft.XMLHttp');
	}
	xhr.onreadaystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status >= 200&&xhr.status <= 300||xhr.status==304 ){
				//deal data 
				data = xhr.responseText;
				console.log('123');
			}
		}
	}
	xhr.open('GET',url,true);
	xhr.send();
	console.log(data);
}