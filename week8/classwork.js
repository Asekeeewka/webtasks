var fam = JSON.stringify([
	{"name":"Askar Aytkazin","born":1999,"father":"Mirsovet","mother":"Aigul"},
	{"name":"Mirsovet Aytkazin","born":1954,"father":"Bekturgan","mother":"Nazipa"},
	{"name":"Aigul Aytkazina","born":1960,"father":"Orazkhan","mother":"Lyazzat"},
	{"name":"Bekturgan","born":1929,"father":"Aitkazy","mother":"Apashka"},
	{"name":"Nazipa","born":1935,"father":"Atashka","mother":"Aapashka"}])

/*var string = JSON.stringify({name:"x",born:2018});
console.log(string);
console.log(JSON.parse(string).born);*/

let family=JSON.parse(fam);
console.log(family.length);

let father = family[0].father;
let mother = family[0].mother;
console.log(father,mother);
let fatherY=family[1].born;
let motherY=family[2].born;
console.log(fatherY,motherY);
let ff=family[1].father;
console.log(ff);

let year=1950;
for(let i=0;i<family.length;i++){
	if(family[i].born<year && year-family[i].born<26){
		console.log(family[i].name);
	}
}
let temp=family[0].born;
for(let i=0;i<family.length;i++){
	if(family[i].born<temp){
		temp=family[i].born;
	}
}
console.log(temp);