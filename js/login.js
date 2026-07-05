function iniciarSesion() {
    var formulario = document.getElementById("login");
    if (!formulario.reportValidity()) {
        return;
    }
    var correo = document.getElementById("correo").value;
    var contra = document.getElementById("contra").value;
    if (validarCorreo(correo) == false) {
        alert("Correo electrónico no válido.");
        return;
    }
    if (validarPassword(contra) == false) {
        alert("La contraseña no cumple con los requisitos.");
        return;
    }
    document.getElementById("mensaje").innerHTML =
        "<h3>¡Bienvenido al sistema!</h3>" +
        "<p>Inicio de sesión realizado correctamente.</p>";
    formulario.reset();
}