let todoList = [];
const addTodo = ()=>{
    let todo = document.getElementById('tv');
    
    if(todo.value==""){
        alert("Enter Text First")
        return false;
    }
    else{
        todoList.push({text:todo.value,status:false});
    }
    disTodo()
}

const disTodo = ()=>{
    let todoDiv = document.getElementById('todoList');
    
    todoDiv.innerHTML = ''
    todoList.forEach((item,index)=>{
        var p = document.createElement('p');
        let btn= document.createElement('i');
        btn.classList="fa fa-trash"

        p.textContent = item.text;
        todoDiv.appendChild(p);
        todoDiv.appendChild(btn);
        

        btn.addEventListener('click',()=>{
            // alert(index)
            todoList.splice(index,1)
            todoDiv.innerHTML = ''
            disTodo()
        })
        p.addEventListener('click',()=>{
            p.style="color:gray;text-decoration:line-through;"
        })
    })
    
    tv.value=""
}