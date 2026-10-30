// Traigo los datos del catalogo desde su modulo
import { tratamientos } from "./datos/tratamientos.js";

// Busco el <ul> donde van los tratamientos
const lista = document.querySelector("#lista-tratamientos");

// 1. Un texto vacio donde voy a ir sumando el HTML
let tratamientosHTML = ``;

// 2. Por cada tratamiento, le sumo su <li>
tratamientos.forEach((tratamiento) => {
    tratamientosHTML += `
        <li>
            <input type="radio" name="tratamiento" id="id-${tratamiento.id}" value="${tratamiento.id}">
            <label for="id-${tratamiento.id}">${tratamiento.nombre}</label>
        </li>
    `;
});

// 3. Meto todo el HTML dentro de la lista
lista.innerHTML = tratamientosHTML;

// Busco el boton CONTINUAR
const boton = document.querySelector(".formulario-seleccion button");

// Al cargar la pagina, el boton arranca deshabilitado
boton.disabled = true;

// Evento: cuando el paciente elige un tratamiento, se habilita el boton
lista.addEventListener("change", () => {
    boton.disabled = false;
});