// Array setup to track academic task data structures 
let academicTasks = []; 
 
const taskInput = document.getElementById('taskInput'); 
const addTaskBtn = document.getElementById('addTaskBtn'); 
const taskList = document.getElementById('taskList'); 
 
function renderPlanner() { 
    taskList.innerHTML = ''; 
     
    academicTasks.forEach((task, index) => { 
        const li = document.createElement('li'); 
         
        // Fulfills DOM dynamic tracking state 
        li.innerHTML = ` 
            <span style="${task.completed ? 'text-decoration: line-through; color: #94a3b8;' : 
''}">${task.title}</span> 
            <div> 
                <button onclick="toggleComplete(${index})" style="background:#2ecc71; 
color:white; border:none; padding:4px 8px; margin-right:5px; border-radius:3px; 
cursor:pointer;">✓</button> 
                <button onclick="removeTask(${index})" style="background:#e74c3c; color:white; 
border:none; padding:4px 8px; border-radius:3px; cursor:pointer;">✗</button> 
            </div> 
        `; 
        taskList.appendChild(li); 
    }); 
} 
// Event handler function to add inputs to arrays 
addTaskBtn.addEventListener('click', () => { 
const taskText = taskInput.value.trim(); 
if (taskText !== '') { 
academicTasks.push({ title: taskText, completed: false }); 
taskInput.value = ''; 
renderPlanner(); 
} 
}); 
window.toggleComplete = function(index) { 
academicTasks[index].completed = !academicTasks[index].completed; 
renderPlanner(); 
}; 
window.removeTask = function(index) { 
academicTasks.splice(index, 1); 
renderPlanner(); 
};