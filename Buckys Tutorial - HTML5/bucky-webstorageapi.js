window.addEventListener("load",doFirst,false);

function doFirst(){
	var button = document.getElementById('button');
	button.addEventListener("click",saveCrap,false);
}

function saveCrap(){
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one,two);

}