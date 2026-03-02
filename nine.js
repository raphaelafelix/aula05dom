// Exercício 9 - Cada tecla pressionada muda para a próxima cor da lista
let todasAsCores = ["red", "yellow", "green", "blue", "purple"]

let contador = 0

document.addEventListener("keydown", function(){
    document.body.style.backgroundColor = todasAsCores[contador]
    contador++;
    if(contador >= todasAsCores.length){
        contador = 0;
    }
})