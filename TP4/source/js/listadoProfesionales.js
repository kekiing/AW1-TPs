import { profesionales } from "./datos/profesionales.js";
import { habilitarBoton, guardarEleccion } from "./funciones.js";

const lista = document.querySelector("#lista-profesionales");

let profesionalesHTML = ``;

profesionales.forEach((profesional) => {
    profesionalesHTML += `
        <li>
            <input type="radio" name="profesional" id="id-${profesional.id}" value="${profesional.id}">
            <label for="id-${profesional.id}">${profesional.nombre}</label><span class="matricula">Mat. Profesional ${profesional.matricula}</span>
        </li>
    `;
});

lista.innerHTML = profesionalesHTML;

const boton = document.querySelector(".formulario-seleccion button");
habilitarBoton(lista, boton);

guardarEleccion(lista, "profesional");