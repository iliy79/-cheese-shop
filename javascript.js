

//раелизация слайдера 
document.addEventListener("DOMContentLoaded", ready);
function ready(){
	window.setInterval(func, 2000);
}

function func(){
	if (window.number == undefined || window.number ==8) {window.number =1;}else
		window.number = window.number +1;
	var img = document.querySelector('#slider');
	img.src = 'img/card_'+window.number+'.jpg';
	}

	