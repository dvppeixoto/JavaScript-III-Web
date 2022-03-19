

//propriedade dos eventos: descobrir o momento que o evento acontece.
const element = document.querySelector('input')
element.onkeypress = (event) => {
     console.log(event.key)

} 

//ir no inspecionar e verificar ao vivo.

//ou dessa forma sem usar a constante:

document.getElementById('input2').onkeypress = (event) => {
     console.log(event.key)
}

