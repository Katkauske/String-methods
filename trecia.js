//Sukurkite funkciją, kuri gauna n ir zodis per parametrus. 
//Funkcija turėtų grąžinti žodžio n-ąją raidę. Jeigu n yra neigiamas tai tada turėtų indeksą skaičiuoti nuo galo. 
//nenaudoti at() funkcijos. Išbandykite ją pagrindinėje programoje.

let zodis = prompt("Iveskite zodi:")
let n = +prompt("Iveskite kelintos raides zodyje ieskote:")
alert(nRaidesGrazinimas(n,zodis))
//n-1
function nRaidesGrazinimas(n,zodis){
    if (n >=0 ){
        return (n + 1);
    }
    else (n <0 )
    return (n - 1)
}
