var img = myId('img');
var test = myId('child1');
var parent = myId('parent');
var API = 'http://localhost:9001/sources/thanks.json';
var API2 = 'http://localhost:8080/api/articles'
var newP1 = document.createElement('p');
newP1.innerHTML = "background:red";
var newbtn = document.createElement('button');
newbtn.innerHTML = 'get data';
newbtn.onclick = function(){
	// $.ajax('GET',API,null,function(data){
	// 	console.log(data);
	// })
	// $.get(API2,function(data){
	// 	console.log(data);
	// })
	ajaxByJsonp (API2);
}
function callbackHandler(data){
	console.log(data)
}
img.onclick = function(){
	parent.insertBefore(newP1,test);
	parent.insertAfter(newbtn,test);
}