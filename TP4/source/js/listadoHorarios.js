import { horarios } from "./datos/horarios.js";
import { habilitarBoton, guardarEleccion } from "./funciones.js";

const lista = document.querySelector("#lista-horarios");

let horariosHTML = ``;

horarios.forEach((dia) => {
    let turnosHTML = ``

    dia.turnos.forEach((turno) => {
        turnosHTML += `
            <input type="radio" name="turno" id="id-${turno.id}" value="${turno.id}">
            <label for="id-${turno.id}">${turno.hora}</label>
        `;
    })
 
    horariosHTML += `
    <li>
            <span class="dia">${dia.dia}</span>
            ${turnosHTML}
        </li>
`
}) 

lista.innerHTML = horariosHTML;


const boton = document.querySelector(".formulario-seleccion button");
habilitarBoton(lista, boton);

guardarEleccion(lista, "horario");