window.onload = function () {
}

function validarFormulario() {
    alert("Cargando funcion de validacion de formulario...");
    let datoNombre = document.getElementById('input_nombre');
    let datoCorreo = document.getElementById('input_correo');
    let datoContrasena = document.getElementById('input_contrasena');
    let datoRepetirContrasena = document.getElementById('input_rep_contrasena');
    let datoNacimiento = document.getElementById('input_nacimiento');
    let datoFoto = document.getElementById('input_foto');
    
    console.log(datoNombre.value +'\n'+ datoCorreo.value +'\n'+ datoContrasena.value +'\n'+ datoRepetirContrasena.value +'\n'+ datoNacimiento.value +'\n'+ datoFoto.value);
}