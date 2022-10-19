

let zodis = prompt("Iveskite zodi ar zodziu jungini.");
let ieskomaGalune = prompt("Iveskite ieskoma galune!");
let ieskomasZodis = "taip";
alert(zodis.length);

console.log(zodis.at(-1));
console.log(zodis.includes(ieskomasZodis));
console.log(zodis.endsWith (ieskomaGalune));
//Nuskaitykite vartotojo įvedamą žodį per prompt() ir išveskite į console.log() 
//to žodžio paskutinę raidę nenaudojant at() funkcijos. 
//Naudokite [] ir indeksą apskaičiuokite su length savybe, kadangi neigiamų indeksų [] nepriima.

n = zodis.length;
console.log(zodis[n-1]);

