
function getStuff(){
	var list = document.querySelectorAll('#tuna'); //26 - querySelectorAll
	
	for(var i=0; i<list.length; i++)
	{
		list[i].onclick = talk;	
	}
	

	// document.querySelector('#tuna').onclick=talk; // 25 - Working with JavaScript in HTML5

}

function talk(){
	alert("yoyoma!");
}

window.onload = getStuff;