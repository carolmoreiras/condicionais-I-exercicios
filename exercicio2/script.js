
function recebeAlgo(idade, terminouEnsinoMedio, cursandoFaculdade) {
    if (idade >=18) {
        console.log("A pessoa é maior de idade")
    } else {
        console.log("A pessoa é menor de idade")  
    }

    if (terminouEnsinoMedio) {
        console.log("A pessoa terminou o ensino médio")
    } else {
        console.log("A pessoa não terminou o ensino médio")
    }

    if (!cursandoFaculdade) {
        console.log("A pessoa NÃO está cursando alguma faculdade")
    } else {
        console.log("A pessoa está cursando alguma faculdade")
    }
}

recebeAlgo(20, true, false)
console.log("")
recebeAlgo(7, false, false)
console.log("")
recebeAlgo(42, true, true)