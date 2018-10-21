let cars = [{brand:'Toyota',model:'Camry','year':1999,'price':20000,image_url:"https://media.ed.edmunds-media.com/toyota/camry/2016/ot/2016_toyota_camry_LIFE1_ot_902163_1280.jpg"},{brand:'BMW',model:'X6',year:2014,price:25000,image_url:"https://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_5_1280.jpg"},{brand:'Daewoo',model:'Nexia',year:2007,price:15000,image_url:"https://s.auto.drom.ru/i24207/c/photos/fullsize/daewoo/nexia/daewoo_nexia_695410.jpg"}];
	
for (car in cars){
	car_div=document.createElement("div");
	car_div.classList.add("card");
	cars_img=document.createElement("img");
	cars_img.src=cars[car]['image_url'];
	cars_img.setAttribute("width","100");
	cars_brand=document.createElement("span");
	cars_brand.innerText=cars[car]['brand'];
	cars_brand.classList.add("name");
	cars_model=document.createElement("span");
	cars_model.innerText=cars[car]['model'];
	basket_img=document.createElement("img");
	basket_img.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBKF68vbSnepuQh_kabNrIMATxrl-0PPpj_-fq7lTfbtfZZIVcA';
	basket_img.setAttribute("width","25");
	basket_img.setAttribute("height","25");
	basket_img.classList.add("basket");
	car_div.appendChild(cars_img);
	car_div.appendChild(cars_brand);
	car_div.appendChild(cars_model);
	car_div.appendChild(basket_img);
	document.getElementById("cars").appendChild(car_div);
}
	let sum=0;
	let number=0;
function Calculate(ev){
	let totalSum=document.getElementById("sum");
	let totalNumber=document.getElementById("items");
	let x=ev.target;
	let parentNode = x.parentNode;
	let name=parentNode.querySelector('.name').innerText;
	if(x.src==='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBKF68vbSnepuQh_kabNrIMATxrl-0PPpj_-fq7lTfbtfZZIVcA'){
		x.src='https://www.alt-codes.net/images/dollar-sign.png';
		for(car in cars){
			if(cars[car]['brand']===name){
				sum += cars[car]['price'];
				number++;
			}
		}
	}
	else if(x.src==='https://www.alt-codes.net/images/dollar-sign.png'){
		x.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBKF68vbSnepuQh_kabNrIMATxrl-0PPpj_-fq7lTfbtfZZIVcA";
		for(car in cars){
			if(cars[car]['brand']===name){
				sum -= cars[car]['price'];
				number--;
			}
		}
	}
	totalSum.innerHTML=sum;
	totalNumber.innerHTML=number;
}

let button = document.querySelectorAll('.basket');

for (i of button)
{
    i.addEventListener('click', Calculate);
}