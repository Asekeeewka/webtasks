
// let x = document.querySelectorAll("span");
// let x_array = Array.from(x);

// x.forEach(function(elem){
// 	elem.addEventListener("click",function(e){
// 		if (elem.dataset.status===null){
// 			elem.dataset.status='done';
// 		}
// 	})
// });

// let x = document.querySelectorAll("span");
// let y = document.querySelectorAll("button");

// i = 0
// z = {}
// while i < len(x):
// 	z[x[i]] = y[i]

// for v in z:
// 	v.addEventListener(z[this].setAttrinute(data-status = 'done'));


// function cross(){
// 	//var y = document.getElementById("tasks");
// 	var x = document.querySelectorAll("#tasks div button");
// 	for(var i=0; i<x.length; i++){
// 		x[i].addEventListener('click', bar);
// 	}
	
	
//     //x.setAttribute("data-status","done");
//   }

// function bar() {
// 	this.querySelector("~ div").setAttribute("data-status = 'done'");
// }

// document.querySelector("button").onclick = function() {cross()};

buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", fun);
}

function fun() {
	this.parentNode.setAttribute("data-status", "done");
}