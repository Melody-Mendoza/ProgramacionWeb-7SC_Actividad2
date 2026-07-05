function guardar() {
    var nombre = document.getElementById("nombre").value;
    var apPaterno = document.getElementById("apPaterno").value;
    var apMaterno = document.getElementById("apMaterno").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;
    var contra = document.getElementById("contra").value;
    var confirmar = document.getElementById("confirmar").value;

    var formulario = document.getElementById("registro");

    if (!formulario.reportValidity()) {
        return;
    }

    if (soloLetras(nombre) == false) {
        console.log("Error: nombre inválido.");
        alert("El nombre solo debe contener letras.");
        return;
    }

    if (soloLetras(apPaterno) == false) {
        console.log("Error: apellido paterno inválido.");
        alert("El apellido paterno solo debe contener letras.");
        return;
    }

    if (soloLetras(apMaterno) == false) {
        console.log("Error: apellido materno inválido.");
        alert("El apellido materno solo debe contener letras.");
        return;
    }

    if (validarCorreo(correo) == false) {
        console.log("Error: correo electrónico inválido.");
        alert("Correo electrónico no válido.");
        return;
    }

    if (telefono.length != 10) {
        console.log("Error: el teléfono no tiene 10 dígitos.");
        alert("El teléfono debe tener exactamente 10 dígitos.");
        return;
    }

    if (validarLongitud(telefono, 10) == false) {
        console.log("Error: longitud del teléfono incorrecta.");
        alert("El teléfono no debe tener más de 10 dígitos.");
        return;
    }

    if (validarPassword(contra) == false) {
        console.log("Error: contraseña inválida.");
        alert("La contraseña no cumple con los requisitos.");
        return;
    }

    if (compararPassword(contra, confirmar) == false) {
        console.log("Error: las contraseñas no coinciden.");
        alert("Las contraseñas no coinciden.");
        return;
    }
    var edad = calcularEdad(fecha);
    var mayor = esMayorDeEdad(fecha);
    var nombreCompleto = generarNombreCompleto(nombre, apPaterno, apMaterno);
    document.getElementById("nombreCompleto").innerHTML = "Nombre: " + nombreCompleto;
    document.getElementById("edad").innerHTML = "Edad: " + edad + " años";

    console.log("Registro realizado correctamente.");
    console.log("Nombre completo:", nombreCompleto);
    console.log("Correo:", correo);
    console.log("Edad:", edad);


    if (mayor) {
        console.log("Mayor de edad: Sí");
        document.getElementById("mayor").innerHTML = "Mayor de edad: Sí";
    }
    else {
        console.log("Mayor de edad: No");
        document.getElementById("mayor").innerHTML = "Mayor de edad: No";
    }
    document.getElementById("modal").style.display = "block";

}

function cerrarModal() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("registro").reset();
}