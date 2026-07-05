# Actividad 2. Librería utileria.js

## Programación Web
### Verano 2026

**Docente:** Mtra. Adelina Martinez Nieto

**Alumno:** Melody Nathalie Mendoza Jimenez 23161034

---

# Descripción

Este proyecto consiste en el desarrollo de una librería en JavaScript llamada **utileria.js**, la cual reúne diferentes funciones que permiten validar y procesar información ingresada por el usuario.

La librería fue integrada en un formulario de registro y en un inicio de sesión, reutilizando las mismas funciones de validación en ambas páginas.

Como complemento se desarrolló una ventana modal para mostrar la información del registro y un diseño adaptable (Responsive Design), permitiendo visualizar correctamente el proyecto tanto en computadoras como en dispositivos móviles.

---

# Problema que resuelve

Cuando un usuario llena un formulario puede cometer errores como:

- Escribir un correo electrónico incorrecto.
- Escribir números donde únicamente deben existir letras.
- Utilizar contraseñas inseguras.
- Escribir dos contraseñas diferentes.
- Ingresar un teléfono con una longitud incorrecta.
- No conocer automáticamente si es mayor de edad.

La librería **utileria.js** permite validar estos datos antes de procesarlos, evitando errores y mejorando la calidad de la información capturada.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- GitHub
- GitHub Pages

---

# Instalación

Agregar la librería dentro del documento HTML.

```html
<script src="js/utileria.js"></script>
```

Posteriormente se pueden utilizar cualquiera de las funciones desde cualquier archivo JavaScript.

---

# Estructura del proyecto

```
utileria/
│
├── README.md
├── index.html
├── login.html
│
├── css/
│   ├── index.css
│   └── login.css
│
├── js/
│   ├── utileria.js
│   ├── index.js
│   └── login.js
│
└── img/
```

---

# Funciones obligatorias

## 1. validarCorreo(correo)

Valida que el correo electrónico tenga un formato correcto.

### Ejemplo

```javascript
var correo = "ejemplo@gmail.com";

if(validarCorreo(correo)){
    console.log("Correo válido");
}
```

---

## 2. soloLetras(texto)

Permite verificar que un texto contenga únicamente letras, incluyendo vocales acentuadas y la letra ñ.

### Ejemplo

```javascript
var nombre = "Melody";

if(soloLetras(nombre)){
    console.log("Nombre válido");
}
```

---

## 3. validarLongitud(numero,maxLongitud)

Verifica que un número no sobrepase la longitud indicada.

### Ejemplo

```javascript
if(validarLongitud("9511234567",10)){
    console.log("Longitud correcta");
}
```

---

## 4. calcularEdad(fechaNacimiento)

Calcula automáticamente la edad del usuario.

### Ejemplo

```javascript
var edad = calcularEdad("2003-05-15");

console.log(edad);
```

---

## 5. esMayorDeEdad(fechaNacimiento)

Determina si una persona es mayor de edad.

### Ejemplo

```javascript
if(esMayorDeEdad("2003-05-15")){
    console.log("Es mayor de edad");
}
```

---

## 6. validarPassword(password)

Comprueba que la contraseña cumpla con los siguientes requisitos:

- Mínimo 8 caracteres.
- Una letra mayúscula.
- Una letra minúscula.
- Un número.
- Un carácter especial.

### Ejemplo

```javascript
var contraseña="Melody123!";

if(validarPassword(contraseña)){
    console.log("Contraseña válida");
}
```

---

# Funciones adicionales

Además de las funciones solicitadas, se implementaron dos funciones propias.

---

## compararPassword(contra,confirmarPassword)

Esta función compara la contraseña escrita por el usuario con la confirmación de contraseña para asegurarse de que ambas sean iguales.

Fue utilizada dentro del formulario de registro antes de completar el proceso.

### Ejemplo

```javascript
if(compararPassword("Melody123!","Melody123!")){
    console.log("Las contraseñas coinciden");
}
```

---

## generarNombreCompleto(nombre,apellidoPaterno,apellidoMaterno)

Esta función une el nombre y los dos apellidos para formar el nombre completo del usuario.

Fue utilizada para mostrar el resultado dentro de la ventana modal al finalizar el registro.

### Ejemplo

```javascript
var nombreCompleto = generarNombreCompleto(
    "Melody",
    "Mendoza",
    "Jimenez"
);

console.log(nombreCompleto);
```

---

# Integración de la librería

## Formulario de registro

Dentro del formulario principal se utilizan las funciones para:

- Validar nombres.
- Validar correo.
- Validar longitud del teléfono.
- Validar contraseña.
- Comparar contraseñas.
- Calcular edad.
- Determinar si el usuario es mayor de edad.
- Generar el nombre completo.
- Mostrar la información mediante una ventana modal.

---

## Inicio de sesión

En la página de inicio de sesión se reutilizan las funciones:

- validarCorreo()
- validarPassword()

Si ambas validaciones son correctas se muestra un mensaje de bienvenida al usuario.

---

# Capturas de pantalla

## Formulario de registro

Vista principal del formulario donde el usuario ingresa toda su información antes de realizar el registro.

![Formulario de registro](img/formulario.png)

---

## Validación del nombre

Ejemplo de la validación cuando el nombre contiene caracteres no permitidos.

![Error en nombre](img/error_nombre.png)

---

## Validación del correo electrónico

Ejemplo de la validación cuando el correo electrónico no tiene un formato correcto.

![Error en correo](img/error_correo.png)

---

## Validación del teléfono

Ejemplo cuando el número telefónico no cumple con la longitud requerida.

![Error en teléfono](img/error_numero.png)

---

## Validación de la contraseña

Ejemplo cuando la contraseña no cumple con las reglas establecidas por la librería.

![Error en contraseña](img/error_contra.png)

---

## Ventana modal

Resultado mostrado después de completar correctamente el formulario de registro.

![Modal](img/modal.png)

---

## Inicio de sesión

Pantalla donde el usuario ingresa su correo electrónico y contraseña.

![Login](img/login.png)

---

## Inicio de sesión correcto

Mensaje mostrado cuando el usuario inicia sesión correctamente después de validar sus datos.

![Login correcto](img/logingcorrecto.png)

---

## Consola del navegador

Durante las pruebas del proyecto se utilizaron instrucciones `console.log()` para verificar que las funciones de la librería recibieran correctamente la información y produjeran los resultados esperados.

Ejemplo utilizado durante las pruebas:

```javascript
console.log("Registro realizado correctamente.");
console.log("Nombre completo:", nombreCompleto);
console.log("Correo:", correo);
console.log("Edad:", edad);

if(mayor){
    console.log("Mayor de edad: Sí");
}
else{
    console.log("Mayor de edad: No");
}
```

Captura de la consola:

![Consola](img/logs.png)

---


# Video demostrativo

Video de funcionamiento del proyecto:

**YouTube:**


En el video se muestra:

- Presentación de la librería.
- Problema que resuelve.
- Funcionamiento del formulario.
- Funcionamiento del modal.
- Funcionamiento del login.
- Ejemplos de validación.
- Resultados obtenidos.

---

# Conclusión

La elaboración de esta actividad permitió reforzar el uso de JavaScript mediante el desarrollo de una librería reutilizable para validar información en formularios.

Durante el proyecto se aplicaron conocimientos relacionados con funciones, expresiones regulares, manipulación del DOM, validación de datos, ventanas modales y diseño responsive.

La reutilización de las funciones tanto en el formulario de registro como en el inicio de sesión demuestra la utilidad de organizar el código dentro de una librería, facilitando su mantenimiento y permitiendo emplearlo en diferentes páginas sin necesidad de repetir lógica.