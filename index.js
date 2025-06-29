// let taskCount = 0;

//         document.getElementById('add-btn').onclick = () => {
// const input = document.getElementById('day-input');
// const todoText = input.value.trim();
// if(!todoText) return;

// taskCount++;
// const listItems = document.createElement('li');
// listItems.textContent = `Task ${taskCount}: ${todoText}`;

// const deleteBtn = document.createElement('button');
// deleteBtn.textContent = 'Delete';
// deleteBtn.onclick = () => listItems.remove();


// listItems.appendChild(deleteBtn);

// document.getElementById('todo-list').appendChild(listItems);

// input.value = '';

//         }
//  // Clear all tasks when Clear button is clicked
//         document.getElementById('clr-btn').onclick = () =>{
//             document.getElementById('todo-list').innerHTML = '';
//             document.getElementById('day-input').value = '';
//             taskCount = 0;
//         }



let taskCount = 0;

document.getElementById('add-btn').onclick = () => {
    const titleInput = document.getElementById('task-title');
    const descInput = document.getElementById('task-desc');
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();

    if (!title) return; // Task title is required

    taskCount++;

    const listItem = document.createElement('li');

    // Task Label (e.g., "Task 1")
    const label = document.createElement('h4');
    label.textContent = `Task ${taskCount}`;
    label.style.marginBottom = '4px';

    // Title & Description elements
    const taskTitle = document.createElement('strong');
    taskTitle.textContent = title;

    const taskDesc = document.createElement('p');
    taskDesc.textContent = desc;
    taskDesc.style.margin = '6px';

    // Buttons container
    const btnContainer = document.createElement('div');
    btnContainer.style.marginTop = '6px';

    // ✅ Edit button toggles between Edit and Save
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.style.marginRight = '8px';

    editBtn.onclick = () => {
        if (editBtn.textContent === 'Edit') {
            // Replace title & desc with input fields
            const titleEdit = document.createElement('input');
            titleEdit.value = taskTitle.textContent;
            const descEdit = document.createElement('input');
            descEdit.value = taskDesc.textContent;

            listItem.replaceChild(titleEdit, taskTitle);
            listItem.replaceChild(descEdit, taskDesc);

            editBtn.textContent = 'Save';
        } else {
            // Save edited values
            const titleEdit = listItem.querySelector('input:nth-of-type(1)');
            const descEdit = listItem.querySelector('input:nth-of-type(2)');

            taskTitle.textContent = titleEdit.value;
            taskDesc.textContent = descEdit.value;

            listItem.replaceChild(taskTitle, titleEdit);
            listItem.replaceChild(taskDesc, descEdit);

            editBtn.textContent = 'Edit';
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => listItem.remove();

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    // Assemble task
    listItem.appendChild(label);
    listItem.appendChild(taskTitle);
    listItem.appendChild(taskDesc);
    listItem.appendChild(btnContainer);

    document.getElementById('todo-list').appendChild(listItem);

    // Clear input fields
    titleInput.value = '';
    descInput.value = '';
};

// ✅ Fix syntax: use quotes on IDs
document.getElementById('clr-btn').onclick = () => {
    document.getElementById('todo-list').innerHTML = '';
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
    taskCount = 0;
};



//     const addBtn = document.createElement('button');
//     addBtn.textContent = 'add';
//     addBtn.style.marginRight = '8px';
//     addBtn.onclick = () => alert('You can add substasks here if needed.');

//     const deleteBtn = document.createElement('button');
//     deleteBtn.textContent = 'Delete';
//     deleteBtn.onclick = () => listItem.remove();

//     btnContainer.appendChild(addBtn);
//     btnContainer.appendChild(deleteBtn);

//     // Assemble task item

//     listItem.appendChild(label);
//     listItem.appendChild(taskTitle);
//     listItem.appendChild(taskDes);
//     listItem.appendChild(btnContainer);

//     document.getElementById('todo-list').appendChild(listItem);

//     // Clear Button
//     titleInput.value = '';
//     descInput.value = '';

// };

// document.getElementById('clr-btn').onclick = () =>{
//     document.getElementById(todo-list).innerHTML = '';
//      document.getElementById(task-title).value = '';
//       document.getElementById(task-desc).value = '';
//       taskCount = 0;
// }