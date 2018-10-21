let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

	let selectItem=document.getElementById("countries");
	let selectCity=document.getElementById("cities");
	for (let country of countries){
		let optionItem = document.createElement("option");
		optionItem.textContent=country;
		selectItem.appendChild(optionItem);
	}

selectItem.onchange=function(){

	let x=selectItem.options[selectItem.selectedIndex].value;
    for (let i=0; i<cities_by_country[x].length;i++){
        selectCity.remove(cities_by_country[x][i]);}

	let y=document.getElementById("countries").value;
	for (let city of cities_by_country[y]){
		let optionCity = document.createElement("option");
		optionCity.textContent=city;
		selectCity.appendChild(optionCity);
	}
}
	
