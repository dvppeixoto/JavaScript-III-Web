/* para chamar alguém la do HTML temos que sempre criar
uma variável e sair atribuindo logicamente passo a passo.
*/

const input = document.querySelector('input')
//const select = document.querySelector('select')
const button = document.querySelector('button')

input.addEventListener('focus', () => {
    console.log('dei um foco')
} )



//select.addEventListener('change', () => {
 //   console.log(select.value)
//})

document.querySelector('select').addEventListener('change', () => {
    
    
})

//fazendo de outra maneira criando a função separadamente:
const clickButton = () => {
    alert('O botão foi clicado')
}

button.addEventListener('click', clickButton )
//assim que ouvir o click chama a função clickButton.

// de outra maneira mais rápida ( via w3school ):

document.getElementById('button2').addEventListener('click', () => { alert('Show demais heim?!')})

/* Resumindo: Primeiro a gente cria a função e depois usa o javascript
para buscar o elemento no HTML e inserir o método com a função. */




