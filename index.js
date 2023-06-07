const addTask = document.querySelector('#submit')

addTask.addEventListener('click', (e) => {
    e.preventDefault()

    let userInput = document.querySelector('#input')

    if (userInput.value === ''){
        alert('add task')
        return
    }

    let container = document.querySelector('#container')
    
    let toDoDiv = document.createElement('div')
    toDoDiv.classList.add('input-group', 'input-group-lg', 'task-container')
    
    let input = document.createElement('input')
    input.setAttribute('readonly', 'readonly')

    input.classList.add('form-control')
    input.value = userInput.value
    
    let editBtn = document.createElement('button')
    editBtn.textContent = 'edit'
    editBtn.classList.add('btn', 'btn-info','editBtn')
    
    let delBtn = document.createElement('button')
    delBtn.classList.add('btn', 'btn-danger', 'delBtn')
    delBtn.textContent = 'delete'
    
    container.append(toDoDiv)
    toDoDiv.append(input)
    toDoDiv.append(editBtn)
    toDoDiv.append(delBtn)

    userInput.value = ''
     
    editBtn.addEventListener('click', () => {
        
        if(editBtn.textContent === 'edit') {
            editBtn.textContent = 'save'
            input.readOnly = false;
            input.focus()
        }else {
            newInput = input.value
            editBtn.textContent = 'edit'
            input.readOnly = true
            
        }
           
    })

    delBtn.addEventListener('click', () => {
        const confirmation = confirm('Da li zelite da izbrisete ovaj zadatak?')

        if(confirmation) {
            toDoDiv.remove()
        }
    })
})

