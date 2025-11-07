<<<<<<< HEAD
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




fetch(SERVER_URL)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  })
  .then((data) => {
    tasks = data.results || data;
    console.log("Datos recuperados:", tasks);
    renderList();
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

  if (tasksLocalStorage !== null) {
    if 
  // si (existe el listado de tareas en Local Storage)
  // pinta la lista de tareas almacenadas en tasksLocalStorage
} else {
  //sino existe el listado de tareas en el local storage
  // pide los datos al servidor
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      //guarda el listado obtenido en el Local Storage
      // pinta la lista de tareas
    })
    .catch((error) => {
      console.error(error);
    });
}
=======
'use strict';

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código

const taskList = document.querySelector('.task-list_js');

const GITHUB_USER = "IngraIssdottir";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

// SECCIÓN DE DATOS
// Aquí van los arrays y las variables que contantan datos de la aplicación

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

//let tasks = [];  ---> let vacío para cuando funcione el servidor XD


// SECCIÓN DE FUNCIONES
// Estos son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.
// pintar la tarea en la lista


//Pintar tareas

/*let list = ""; 

for (const task of listTasks) {
  list += `<li><input type="checkbox"/>${task.name}</li>`;
} 

document.querySelector(".task-list_js").innerHTML = list;*/

// Tachar tareas 

fetch(SERVER_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data)
    document.body.innerHTML = data.result;
  })


const task = tasks [0];

taskList.innerHTML = '';
for (const oneTask of tasks) {
  
  if (oneTask.completed === true ) {
    taskList.innerHTML += `<li class="tachado">
    <input type= "checkbox" name="${oneTask.id}" id="${oneTask.id}" checked="${oneTask.completed}"/>
<label for ="${oneTask.id}">${oneTask.name}</label>
</li>
`;
  }
  else {
    taskList.innerHTML += `
<li> 
  <input type= "checkbox" name= "${oneTask.id}" id="${oneTask.id}"/>
  <label for ="${oneTask.id}">${oneTask.name}</label>
  </li>
  `}

}





  
// SECCIÓN DE EVENTOS
// Estos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)



// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

// console.log('Página y JS cargados!')
>>>>>>> 92dda42b931171878416f799c8c1da50650406cd
