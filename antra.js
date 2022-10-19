
zodis1 = prompt("Iveskite pirmaji zodi:")
zodis2 = prompt("Iveskite antraji zodi:")
alert(kurisPirmesnis(zodis1,zodis2))
function kurisPirmesnis(zodis1,zodis2){
    if (zodis1 > zodis2) {
        return -1;
    }
    else if (zodis1 = zodis2){
        return 0;
    }
    else (zodis1 < zodis2)
        return 1
    
}