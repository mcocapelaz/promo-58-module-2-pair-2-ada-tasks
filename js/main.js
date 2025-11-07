"use strict";

// QUERY-SELECTOR
const taskList = document.querySelector(".task-list_js");
const addTaskBtn = document.querySelector('.js_add-task-btn');
const taskInput = document.querySelector('.js_task-input');
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));


// VARIABLES 
const GITHUB_USER = "IngraIssdottir";
const SERVER_URL = `https://dev.adalab.es/api/todo/IngraIssdottir`;



// DATOS
let tasks = [];

// FUNCIONES

function renderList() {
  let list = "";

  for (const oneTask of tasks) {
    if (oneTask.completed === true) {
      list += `
        <li class="tachado">
          <input type="checkbox" name="${oneTask.id}" id="${oneTask.id}" checked />
          <label for="${oneTask.id}">${oneTask.name}</label>
        </li>
      `;
    } else {
      list += `
        <li class= "js_li">
          <input type="checkbox" name="${oneTask.id}" id="${oneTask.id}" />
          <label for="${oneTask.id}">${oneTask.name}</label>
        </li>
      `;
    }
  }

  taskList.innerHTML = list;
}

//EVENTOS 

taskList.addEventListener('click', function(event) {
  
  const item = event.target.parentElement;  
  
  if (event.target.checked) {    
    item.classList.toggle('tachado');
  } else {  
    item.classList.toggle('tachado');
  }
});

addTaskBtn.addEventListener('click', (ev) => {
  
});

const handleNewTask = (event) => {
  event.preventDefault();
  const taskName = taskInput.value.trim();
  

  const newTask = {
    name: taskName, 
    completed: false,
  };

  tasks.push(newTask);
  renderList();
  taskInput.value = ""; 
};


  if (tasksLocalStorage !== null) {
   tasks = tasksLocalStorage;
  renderList();
} else {
    fetch(SERVER_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta del servidor");
      }
      return response.json();
    })
    .then((data) => {
      tasks = data.results || data;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      
      console.log("Datos recuperados:", tasks);
      renderList();
    })
    .catch((error) => {
      console.error("Error al obtener los datos:", error);
    });
}

