const tareas = [
  { id: 1, tarea: "Ir al GYM", estado: true },
  { id: 2, tarea: "Agendar Reuniones", estado: false },
  { id: 3, tarea: "Enviar Informes", estado: false },
  { id: 4, tarea: "Pagar Cuentas", estado: false },
];

function actualizarListado() {
  const totalRealizada = document.querySelector("#realizadas");
  const totalPendientes = document.querySelector("#pendientes");
  const resultadoTotal = document.querySelector("#total");
  const listado = document.querySelector("tbody");

  let tareasRealizadas = tareas.filter((x) => x.estado === true);
  totalRealizada.innerHTML = `Realizadas : ${tareasRealizadas.length}`;

  let tareasPendientes = tareas.filter((x) => x.estado === false);
  totalPendientes.innerHTML = `Pendientes : ${tareasPendientes.length - 0}`;

  resultadoTotal.innerHTML = `Total : ${tareas.length}`;

  let html = "";
  for (let tarea of tareas) {
    let check = tarea.estado ? "checked" : "";
    let estado = tarea.estado ? "Realizado" : "Pendiente";
    html += `
            <tr>
                <td>${tarea.id}</td>
                <td>${tarea.tarea}</td>
                <td> <input type="checkbox" onclick="actualizarEstado(${tarea.id})" ${check} >${estado}</td>
                <td><button class="eliminar" onclick="eliminar(${tarea.id})">X</button></td>
            </tr>
        `;
  }
  listado.innerHTML = html;
}

function agregar() {
  const nombreTarea = document.querySelector("#inputTareas");

  let id = tareas.length > 0 ? tareas.length : 0;
  let nuevoId = 0;
  nuevoId = tareas.length > 0 ? tareas[id - 1].id : 0;
  nuevoId++;

  if (nombreTarea.value === "") {
  } else {
    const nuevaTarea = { id: nuevoId, tarea: nombreTarea.value, estado: false };
    tareas.push(nuevaTarea);
    actualizarListado();
    nombreTarea.value = "";
  }
}

function actualizarEstado(ID) {
  const tareaEncontrada = tareas.find((tarea) => tarea.id === ID);
  tareaEncontrada.estado = !tareaEncontrada.estado;
  actualizarListado();
}

function eliminar(ID) {
  const tareaEncontrada = tareas.findIndex((tarea) => tarea.id === ID);
  tareas.splice(tareaEncontrada, 1);
  actualizarListado();
}

actualizarListado();
