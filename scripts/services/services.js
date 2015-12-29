var $ = {};
$.get = function(url,fn){
	 this.ajax('GET',url,null,fn);
}
$.ajax = function(ty,url,data,fn){
	var xmlHttp = window.ActiveXObject?new ActiveXObject('Microsoft.XMLHttp'):new XMLHttpRequest();
	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4&&xmlHttp.status==200){
			fn(xmlHttp.responseText);
		}
	}
	xmlHttp.open(ty,url,true);
	xmlHttp.send(data);
}
var ajaxByJsonp =function(url){
	var script = document.createElement('script');
	script.setAttribute('src',url+'?callback=callbackHandler');
	document.getElementsByTagName('head')[0].appendChild(script);
}