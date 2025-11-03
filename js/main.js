'use strict';

// SECCIÓN DE QUERY-SELECTOR
// Éstos son los elementos que nos traemos de la página HTML y usamos en el código



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


// SECCIÓN DE FUNCIONES
// Estos son funciones:
//   - con código auxiliar
//   - con código que usaremos en los eventos
//   - para pintar (render) en la página.
// pintar la tarea en la lista


//Creamos una variable vacía para ir metiendo el html: 

let list = ""; 

//Con el bucle pedimos que, por cada tarea, meta en la variable list el nombre de cada tarea 

for (const task of tasks) {
  list += `<li>${task.name}</li>`;
} 

//Lo pintamos con innerHTML

document.querySelector(".task-list_js").innerHTML = list;

//Este es el código al que llegamos y que lo dejo aquí comentado para que veas que estábamos cerca :) 

//     for (let i = 0; i <= tasks.length; i++) {   
//   const tasksList = document.querySelector(".task-list_js");
// tasksList.innerHTML = 
//   `<li>${tasks[0].name}</li>
//   <li>${tasks[1].name}</li>
//   <li>${tasks[2].name}</li>
//   <li>${tasks[3].name}</li>
//   <li>${tasks[4].name}</li>`
// }

  
// SECCIÓN DE EVENTOS
// Estos son los eventos a los que reacciona la página
// Los más comunes son: click (en botones, enlaces), input (en ídem) y submit (en form)



// SECCIÓN DE ACCIONES AL CARGAR LA PÁGINA
// Este código se ejecutará cuando se carga la página
// Lo más común es:
//   - Pedir datos al servidor
//   - Pintar (render) elementos en la página

// console.log('Página y JS cargados!')
