import { tratamientos } from "./datos/tratamientos.js";
import { profesionales } from "./datos/profesionales.js";
import { horarios } from "./datos/horarios.js";

const idTratamiento = sessionStorage.getItem("tratamiento");
const idProfesional = sessionStorage.getItem("profesional");
const idHorario = sessionStorage.getItem("horario");

const tratamiento = tratamientos.find((t) => t.id === idTratamiento);
const profesional = profesionales.find((p) => p.id === idProfesional);

let textoHorario = "No seleccionado";

horarios.forEach((dia) => {
    const turno = dia.turnos.find((t) => t.id === idHorario);
    if (turno) {
        textoHorario = `${dia.dia} - ${turno.hora}`;
    }
});

document.querySelector("#resumen-tratamiento").textContent =
    tratamiento ? tratamiento.nombre : "No seleccionado";

document.querySelector("#resumen-profesional").textContent =
    profesional ? profesional.nombre : "No seleccionado";

document.querySelector("#resumen-horario").textContent = textoHorario;
