/*

- Selecionando Elementos:
     - getElementById() - trás apenas um elemento ( element )
     - getElementByClassName() - trás diversos elementos (HTML Collection)
     - getElementByTagName() - trás diversos elementos (HTML Collection) 
     - getElementByName() - trás os elementos com o nome selecionado. (Nodelist).

     -querySelector - trás apenas um elemento, o primeiro que encontrar (element)
     -querySelectorAll - trás TODOS os elementos que encontrar (NodeList)

- Nodelist x HTML colection

*/

const first = document.getElementById("main-text")
console.log(first)

//o code runner ( ctrl + alt + del) no terminal não funciona.

const paragraph = document.getElementsByClassName('paragraph')
console.log(paragraph) //retorna todas as classes paragraph.


const tag = document.getElementsByTagName('body')
console.log(tag) //retorna todo o conteúdo da tag body

const selector = document.querySelector('p')
console.log(selector)// retorna por padrão o primeiro parágrafo que encontrar.

const selector2 = document.querySelector('.paragraph')
console.log(selector2) //retornou apenas a primeira classe .paragraph

const selector3 = document.querySelectorAll('p')
console.log(selector3) //a diferença do querySelectorAll para o getElementByClass é que ele retorna um Nodelist, já o getElementByClass retorna uma class colection.

const nodelist = document.querySelectorAll('p')
nodelist.forEach(element => {
  console.log(element)
}) // aqui é demonstrado a diferença entre html collection e nodelist. já que o queryselector faz parte do grupo de nodelist, conseguimos usar uma função foreach, por exemplo. Já se fosse por getElementByClass não seria possível por ser um html collection, ou seja, não conseguimos iterar.

const myInput = document.getElementsByName('my-input')
console.log(myInput) //se tivéssemos mais de um input com o nome 'my-input', ele iria chamar todos eles.

const element = document.querySelector('input')
console.log(element.value)  // exemplo de que conseguimos pegar os atributos dos elementos também.

const element2 = document.querySelector('img')
console.log(element2.src) // exemplo de que conseguimos pegar também os atributos dos elementos também.

//alterar um atributo de um elemento
const element7 = document.getElementsByName('my-input')
element7.value = "valor"

// manipulando texto
const element3 = document.querySelector('h1')
element3.innerText = "Hello World" //innerText ou textContent ou innerHTML ( nesse, posso adicionar código html ).

const element4 = document.querySelector('h2')
element4.innerHTML = "Título de H2 com <p>Parágrafo</p>"

// manipulando estilos
const element5 = document.querySelector('h1')
element5.style.color = 'red'
element5.style.backgroundColor = 'yellow'

//evento: passar mouse, clicar, é uma ação do usuário, etc.
const myFunction = () => {
      alert('Fui pressionado')
}

//outra forma do evento usando o botão.
const element6 = document.querySelector('button')
element6.onclick = () => {
     alert('Fui pressionado 2')
}











