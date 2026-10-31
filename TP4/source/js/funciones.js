//funcion para habilitar/deshabilitar botones 

export function habilitarBoton(lista, boton) {
    boton.disabled = true;

    lista.addEventListener("change", () => {
        boton.disabled = false;
    });
}


//funcion para mostrar en el resumen
export function guardarEleccion(lista, clave) {
    lista.addEventListener("change", (evento) => {
        sessionStorage.setItem(clave, evento.target.value);
    });
}


//evento.target es el radio marcado y .value su valor (id del tratamiento, profesional o turno)
//session.Storage guarda el valor 

