// Exercício 1 - Ao pressionar as teclas "r", "g" ou "b", mudar a cor de fundo da página

// Exercício 2 - Mostre no console qual tecla foi pressionada e mude a cor se for r, g ou b.  (Dica:  Use o console.log(e.key))

// Ambos os primeiros exercícios estão aqui abaixo 

document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
        console.log(e.key)
    } else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
        console.log(e.key)
    } else if(e.key === "b"){
        document.body.style.backgroundColor = "blue"
        console.log(e.key)
    }
})

// --------------------------------------------------------------------------------------------------------------


// Exercício 3 - Permita que o usuário pressione R, G, B maiúsculos também.(Dica:  Use o tolowerCase())
document.addEventListener("keydown", function(e){
    if (e.key === "R"){
        "R".toLowerCase()
        document.body.style.backgroundColor = "red"
        document.getElementById("paragrafo").innerHTML = `<i>${"Vermelho"}</i>`;
    } else if(e.key === "G"){
        "G".toLowerCase()
        document.body.style.backgroundColor = "green"
        document.getElementById("paragrafo").innerHTML = `<i>${"Verde"}</i>`;
    } else if(e.key === "B"){
        "B".toLowerCase()
        document.body.style.backgroundColor = "blue"
        document.getElementById("paragrafo").innerHTML = `<i>${"Azul"}</i>`;
    }
})


// Exercício 4 - Além de mudar a cor, exiba o nome dela na página. (Dica: innerHTML)

document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
        document.getElementById("paragrafo").innerHTML = `<i>${"Vermelho"}</i>`;
    } else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
        document.getElementById("paragrafo").innerHTML = `<i>${"Verde"}</i>`;
    } else if(e.key === "b"){
        document.body.style.backgroundColor = "blue"
        document.getElementById("paragrafo").innerHTML = `<i>${"Azul"}</i>`;
    }
})


// Exercício 5 - Adicione y - amarelo e p - roxo

document.addEventListener("keydown", function(e){
    if(e.key === "y"){
        document.body.style.backgroundColor = "yellow"
        document.getElementById("paragrafo").innerHTML = `<i>${"Amarelo"}</i>`;
    } else if(e.key === "p"){
        document.body.style.backgroundColor = "purple"
        document.getElementById("paragrafo").innerHTML = `<i>${"Roxo"}</i>`;
    }
})


// Exercício 6 - Pressione x para remover a cor aplicada
document.addEventListener("keydown", function(e){
    if(e.key === "x"){
        document.body.style.backgroundColor = "white"
        document.getElementById("h2").style.color = "black"
        document.getElementById("paragrafo").style.color = "black"
        document.getElementById("paragrafo").innerHTML = `<i>${"Assim, por exemplo"}</i>`;
    }
})

// Exercício 7 - Refatore o código usando um objeto que guarda teclas e cores
// let cores = {
//     vermelho: "#FF0000",
//     azul:"#0000FF",
//     verde:"#008000",
//     amarelo:"#FFFF00",
//     roxo:"#A020F0",
//     preto: "#000000",
//     branco:"#FFFFFF"
// }

// let teclas = {
//     r: e.key === "r",
//     g: e.key === "g",
//     b: e.key === "b",
//     R: e.key === "R",
//     G: e.key === "G",
//     B: e.key === "B",
//     y: e.key === "y",
//     p: e.key === "p",
//     d: e.key === "d",
//     n: e.key === "n"
// }


// document.addEventListener("keydown", function(e){
//     if (e.key === "r" || e.key === "R"){
//         document.body.style.backgroundColor = "vermelho"
//     } else if(e.key === "g" || e.key === "G"){
//         document.body.style.backgroundColor = "verde"
//     } else if(e.key === "b" || e.key === "B"){
//         document.body.style.backgroundColor = "azul"
//     } else if(e.key === "y"){
//         document.body.style.backgroundColor = "amarelo"
//     } else if(e.key === "p"){
//         document.body.style.backgroundColor = "roxo"
//     } else if(e.key === "d"){
//         document.body.style.backgroundColor = "	#FFFFE0"
//         document.getElementById("h2").style.color = "gray"
//         document.getElementById("paragrafo").style.color = "gray"
//     } else if(e.key === "n"){
//         document.body.style.backgroundColor = "black"
//         document.getElementById("h2").style.color = "white"
//         document.getElementById("paragrafo").style.color = "white"
//     }
// })





// Exercício 8 - Mostre no console o valor RGB da cor aplicada.
document.addEventListener("keydown", function(e){
    if (e.key === "r"){
        document.body.style.backgroundColor = "red"
        console.log("(255,0,0)")
    } else if(e.key === "g"){
        document.body.style.backgroundColor = "green"
        console.log("(0,128,0)")
    } else if(e.key === "b"){
        document.body.style.backgroundColor = "blue"
        console.log("(0,0,255)")
    } else if(e.key === "R"){
        document.body.style.backgroundColor = "red"
        console.log("(255,0,0)")
    } else if(e.key === "G"){
        document.body.style.backgroundColor = "green"
        console.log("(0,128,0)")
        } else if(e.key === "B"){
        document.body.style.backgroundColor = "blue"
        console.log("(0,0,255)")
        } else if(e.key === "y"){
        document.body.style.backgroundColor = "yellow"
        console.log("(255,255,0)")
        } else if(e.key === "p"){
            document.body.style.backgroundColor = "purple"
            console.log("(128,0,128)")
        }
})



// Exercício 10 -  Pressione n para modo escuro e d para modo claro
document.addEventListener("keydown", function(e){
    if (e.key === "n"){
        document.body.style.backgroundColor = "black"
        document.getElementById("h2").style.color = "white"
        document.getElementById("paragrafo").style.color = "white"
    } else if(e.key === "d"){
        document.body.style.backgroundColor = "	#FFFFE0"
        document.getElementById("h2").style.color = "gray"
        document.getElementById("paragrafo").style.color = "gray"
    }
})

