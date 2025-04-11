let userInput = document.getElementById('input');
let addButton = document.getElementById('add');
let tasks = document.getElementById('tasks');

addButton.addEventListener('click', function () {



    let userText = userInput.value;

    if (userText === '') {
        alert('write Something')
    } else {


        console.log(userText)
        let newDiv = document.createElement('div');
        newDiv.classList.add('task');
        newDiv.innerHTML = `
    <p>${userText}</p>
                <div class="buttons">
                    <button>Done</button>
                    <button>Delete</button>
                </div>
    
    `
        tasks.appendChild(newDiv);

        userText == ' ';

    }
})