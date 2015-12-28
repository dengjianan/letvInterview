var img = myId('img');
var test = myId('child1');
var parent = myId('parent');
var API = 'http://localhost:9001/sources/thanks.json';
var newP1 = document.createElement('p');
newP1.innerHTML = "background:red";
var newbtn = document.createElement('button');
newbtn.innerHTML = 'get data';
newbtn.onclick = function(){
	getData(API);
}
img.onclick = function(){
	parent.insertBefore(newP1,test);
	parent.insertAfter(newbtn,test);
}