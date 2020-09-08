//aqui eu linko os elementos HTML5 via DOM
var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

//aqui eu crio uma lista inicial, mas agora foi substituída pelo que está armazenado em localStorage e uso o JSON.parse para transformar em lista

var  todos = JSON.parse(localStorage.getItem('list_todos')) || []


//aqui eu crio a função que vai renderizar os meus elementos do todo, e usei um for próprio pra lidar com listas(Arrays) parecido com python
renderTodos = ()=>{
    //aqui eu removo todo o conteúdo que estiver dentro do meu listElement, tudo que estiver dentro da ul vamos colocar como vazio    
    listElement.innerHTML = ''
    for(todo of todos){
        var todoElement = document.createElement('li')//aqui eu crio o novo elemento li em tempo de execução, para o meu todo
        var todoText = document.createTextNode(todo)//aqui eu crio os textos para os todos

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = todos.indexOf(todo)
        linkElement.setAttribute('onclick', 'deleteTodo('+pos+')')

        var linkText = document.createTextNode('x')
        linkElement.appendChild(linkText)


        todoElement.appendChild(todoText)//aqui eu adiciono ao meu li o texto para o todo
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)//aqui eu adiciono na ul o meu li renderizado

    }
}

renderTodos()

//aqui eu crio a função que vai inserir cada todo na minha lista de todos
addTodo = ()=>{
    var todoText = inputElement.value
    todos.push(todoText)
    inputElement.value = ''
    renderTodos()
    saveToStorage()
}
//aqui quando o elemento referenciado pelo DOM buttonElement receber o event click ele chama a função addTodo()
buttonElement.onclick = addTodo

//aqui estou criando a função para apagar o elemento
deleteTodo = (pos)=>{//aqui passo como parâmetro o índice da minha lista ou seja a posição do meu vetor para que seja apagado
    todos.splice(pos, 1)//aqui a função splice apaga 1 item da posição pos indicada
    renderTodos()//chamo o método para rendereizar novamente a lista sem o item que foi excluído
    saveToStorage()//gravo o conteúdo dos meus todos em formato JSON
}

saveToStorage = ()=>{
    localStorage.setItem('list_todos', JSON.stringify(todos))
}

