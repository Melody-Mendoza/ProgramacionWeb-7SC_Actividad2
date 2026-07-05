function soloLetras(texto){
    var letras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    if(letras.test(texto)){
        return true;
}else{
    return false;
}
}

function validarLongitud(numero, maxLongitud){
    if(numero.length <= maxLongitud){
        return true;
    }else{
        return false;
    }
}

function calcularEdad(fechaNacimiento){
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var añoActual = hoy.getFullYear();
    var mesActual = hoy.getMonth();
    var diaActual = hoy.getDate();
    var añoNacimiento = nacimiento.getFullYear();
    var mesNacimiento = nacimiento.getMonth();
    var diaNacimiento = nacimiento.getDate();
    var edad = añoActual - añoNacimiento;
    if(mesActual < mesNacimiento){
        edad--;
    }
    else if(mesActual == mesNacimiento && diaActual < diaNacimiento){
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento){
    var edad = calcularEdad(fechaNacimiento);
    if(edad >= 18){
        return true;
    }
    else{
        return false;
    }
}

function validarCorreo(correo){
    var formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(formato.test(correo)){
        return true;
    }
    else{
        return false;
    }
}

function validarPassword(contra){
    var formato = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/;
    if(formato.test(contra)){
        return true;
    }else{
        return false;
    }
}

function compararPassword(contra, confirmarPassword){
    if(contra == confirmarPassword){
        return true;
    }else{
        return false;
    }

}

function generarNombreCompleto(nombre, apellidoPaterno, apellidoMaterno){
    var nombreCompleto = nombre + " " + apellidoPaterno + " " + apellidoMaterno;
    return nombreCompleto;
}