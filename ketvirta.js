//Sukurkite funkciją, kuri gauna tris parametrus: pradzia, pabaiga, zodis. 
//pradzia - tai ieškoma žodžio pradžia, pabaiga - ieškoma žodžio pabaiga, zodis - pats žodis. 
//Funkcija grąžina true tik tada jei žodis prasideda ieškoma pradžia IR baigiasi ieškoma pabaiga. false visais kitais atvejais.


let pradzia = prompt("isvesti ieskoma zodzio pradzia:")
let pabaiga = prompt("ivesti ieskoma zodzio pabaiga:")
let zodis =  prompt("ivesti ieskoma zodi:")

alert(paieska(pradzia,pabaiga,zodis))

function paieska(pradzia,pabaiga,zodis){
    if ((zodis.startsWith(pradzia)) || (zodis.endsWith(pabaiga))){
        return true;
    }
    else 
    return false;
}