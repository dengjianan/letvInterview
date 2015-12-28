HTMLElement.prototype.insertAfter = function(newElements,targetElement){
	var parent = targetElement.parentNode;
	if(targetElement == targetElement.lastChild){
		parent.appendChild(newElements);
	}else{
		parent.insertBefore(newElements,targetElement.nextSibling)
	}
}
var myId = function(str){
	return document.getElementById(str);
}