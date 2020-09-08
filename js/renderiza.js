var lista=document.querySelector('#app ul')

/*msg = [
    'Vulgata',
    'Meriont', 
    'Power'
]*/
msg = []
msg = document.querySelector('#app input')


for (elemento of msg){
    
cria = document.createElement('li')
texto = document.createTextNode(elemento)
cria.appendChild(texto)
lista.appendChild(cria)

}
