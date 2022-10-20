

let zodis = prompt("Iveskite zodi:")
let n = +prompt("Iveskite kelintos raides zodyje ieskote:")
alert(nRaidesGrazinimas(n,zodis))

function nRaidesGrazinimas(n,zodis){
    if (n >=0){
        return (zodis[n+1]);
    }
    else (n <= 0)
    return (zodis[n-1])
}
