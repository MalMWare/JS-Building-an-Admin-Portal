let root = document.querySelector('#root')

const mainAdmin = async () => {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()

    let ul = document.createElement('ul')

    books.forEach(function(m) {
        let li = document.createElement('li')
        
        let input = document.createElement('input')
        input.type = 'text'
        input.value = m.quantity 

        let button = document.createElement('button')
        button.textContent = 'Save'
        button.addEventListener('click', function(){
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'id': m.id, 'quantity': `${input.value}`
            })})
        })

        li.append(m.title, input, button)
        ul.append(li)
    })
    root.append(ul)
}

mainAdmin()
