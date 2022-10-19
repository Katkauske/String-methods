//rkite funkciją, kuri patikrina ar du žodžiai yra vienodi ignoruojant mažųjų ir didžiųjų raidžių skirtumą. 
//Išbandykite ją pagrindinėje programoje.

let zodis1 = "KoMPIuTEris";
let zodis2 = "kompIUTtEris";
console.log(arVienodiNepaisantDydziu(zodis1, zodis2))

function arVienodiNepaisantDydziu(zodis1,zodis2)  {
    
    if (zodis1.toLocaleLowerCase() == zodis2.toLocaleLowerCase()) {
        return "Zodziai lygus nepaisant simboliu dydziu skirtumu."
    }
    else {
        return "Net ir nepaisant simboliu dydziu skirtumu zodziai nera lygus."
    }

}