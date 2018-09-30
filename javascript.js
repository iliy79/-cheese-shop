

//раелизация слайдера 


document.addEventListener('DOMContentLoaded', ready);
function ready(){
	window.setInterval(func, 2000);
}

function func(){
	if (window.number == undefined || window.number ==8) {window.number =1;}else
		window.number = window.number +1;
	var img = document.querySelector('#slider');
	img.src = 'img/card_'+window.number+'.jpg';
	}

// реализация перехода страница по ссылкам в шапке меню


var elem = document.querySelectorAll('.navigator');

elem[0].onclick = func1;
elem[1].onclick = func2;
elem[2].onclick = func3;
elem[3].onclick = func4;

function func1(){	
 window.scrollTo(0, 500);
}

function func2(){	
 window.scrollTo(0, 1350);
}
function func3(){	
 window.scrollTo(0, 3000);
}
function func4(){	
 window.scrollTo(0, 3500);
}

// подсветка названия сыров

var p=document.querySelectorAll('.name_cheese');
window.setInterval(start, 1500);

function start(){
	for (var i = 0; i < p.length; i++) {
		p[i]
	
	if(p[i].style.color =='limegreen') {
		p[i].style.color = 'green';
 	} else {
		p[i].style.color ='limegreen';
	}
}
}

