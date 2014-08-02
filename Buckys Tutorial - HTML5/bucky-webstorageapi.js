window.addEventListener("load",doFirst,false);

function doFirst(){
	var button = document.getElementById('button');
	button.addEventListener("click",saveCrap,false);
}

function saveCrap(){
	var one = document.getElementById('one').value;
	var two = document.getElementById('two').value;
	sessionStorage.setItem(one,two);

	display(one);

}

function display(one){
	var rightbox= document.getElementById('rightbox');
	var two = sessionStorage.getItem(one);

	rightbox.innerHTML="Name of variable "+one+"<br />Value: "+two;
}