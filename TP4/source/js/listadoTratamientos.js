// traigo los datos del catalogo desde su modulo
import { tratamientos } from "./datos/tratamientos.js";
import { habilitarBoton, guardarEleccion } from "./funciones.js";

const lista = document.querySelector("#lista-tratamientos");

let tratamientosHTML = ``;

// sumar por cada tratamiento
tratamientos.forEach((tratamiento) => {
    tratamientosHTML += `
        <li>
            <input type="radio" name="tratamiento" id="id-${tratamiento.id}" value="${tratamiento.id}">
            <label for="id-${tratamiento.id}">${tratamiento.nombre}</label>
        </li>
    `;
});

lista.innerHTML = tratamientosHTML;


const boton = document.querySelector(".formulario-seleccion button");
habilitarBoton(lista, boton);

guardarEleccion(lista, "tratamiento");