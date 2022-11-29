
function recebeNacionalidade() {
    const nacionalidade = prompt("Escreva aqui sua nacionalidade").toLowerCase() 

    if (nacionalidade === "brasileira") {
        console.log("Sua nacionalidade é brasileira")

    } else if (nacionalidade === "argentina"){
        console.log("Sua nacionalidade é argentina")

    } else if (nacionalidade === "uruguaia"){
        console.log("Sua nacionalidade é uruguaia")

    } else if (nacionalidade === "chilena"){
        console.log("Sua nacionalidade é chilena")

    } else if (nacionalidade === "colombiana"){
        console.log("Sua nacionalidade é colombiana")

    } else {
        console.log("nacionalidade não encontrada")
    }
}

recebeNacionalidade()