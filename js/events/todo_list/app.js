let userInput = document.getElementById('input');
let addButton = document.getElementById('add');
let tasks = document.getElementById('tasks');
let deleteTask = document.getElementById('delete');
let taskDone = document.getElementById('done')

addButton.addEventListener('click', function () {



    let userText = userInput.value;

    if (userText === '') {
        alert('write Something')
    } else {


        console.log(userText)
        let newDiv = document.createElement('div');
        newDiv.classList.add('task');
        newDiv.innerHTML = `
    <p id="para">${userText}</p>
                <div class="buttons">
                    <button id="done" onclick="done()" >Done</button>
                    <button id="delete" onclick = "deleteFun(this)">Delete</button>
                </div>
    
    `
        tasks.appendChild(newDiv);

        userText == ' ';

    }



});

function deleteFun(e) {
    console.log(e.parentNode.parentNode.remove())
}

function done(a) {
    document.getElementById('para').classList.add('through')
}