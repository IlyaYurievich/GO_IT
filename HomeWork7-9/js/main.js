var link = document.querySelector('.home');
var dropdown = document.querySelector('.drop');
var active = document.querySelector('.active');


//для клика
link.onclick = function(){
	dropdown.classList.add('dropdown--list');
}
active.onclick = function(){
	dropdown.classList.remove('dropdown--list');
}