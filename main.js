const inputTitulo = document.querySelector("#tituloTarea");
const inputTarea = document.querySelector("#tarea");
const addBtn = document.querySelector(".btn-add");
const empty = document.querySelector(".empty");
const tareas = document.querySelector(".tareas");
const template = document.querySelector("template").content;
const fragment = new DocumentFragment();
let tareaArray = [];

document.querySelector("DOMContentLoaded", () => {
  // if (tareaArray.length == 0) empty.classList.remove("toggle");
});

/*********************************
 *BTN ACCION DEL FORMULARIO
 **********************************/
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const valor1 = inputTitulo.value;
  const valor2 = inputTarea.value;

  //--VALIDACION DE LOS INPUT
  if (valor1 == "" || valor2 == "") return alert("faltan valores");

  const contenido = {
    id: Date.now(),
    inputTitulo: valor1,
    inputTarea: valor2,
  };

  tareaArray.push(contenido);
  pintarTareas();

  inputTitulo.value = "";
  inputTarea.value = "";
});

/*********************************
 *PINTAR TAREAS
 **********************************/
const pintarTareas = () => {
  tareas.innerHTML = "";

  tareaArray.map((el) => {
    //console.log(el);
    const clone = template.cloneNode(true);
    clone.querySelector("h3").textContent = el.inputTitulo;
    clone.querySelector(".tareasPCard").textContent = el.inputTarea;
    clone.querySelector(".delete").dataset.id = el.id;
    clone.querySelector(".delete").addEventListener("click", eliminarTarea);
    fragment.appendChild(clone);
  });

  tareas.appendChild(fragment);

  //--APARECER Y DESAPARECER COMENTARIO
  tareaArray.length == 0
    ? empty.classList.remove("toggle")
    : empty.classList.add("toggle");
};

/*********************************
 * ELIMINAR TAREAS 1 X 1
 **********************************/
const eliminarTarea = (e) => {
  const btndelete = e.target.dataset.id;
  tareaArray = tareaArray.filter((el) => el.id != btndelete);
  pintarTareas();

  // console.log("tareaArray: ", tareaArray);
  // console.log(tareaArray.length);
};
