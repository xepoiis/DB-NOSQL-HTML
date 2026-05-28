window.onload = function () {
}

function validarFormulario() {
    let datoNombre = document.getElementById('input_nombre');
    let datoCorreo = document.getElementById('input_correo');
    let datoContrasena = document.getElementById('input_contrasena');
    let datoRepetirContrasena = document.getElementById('input_rep_contrasena');
    let datoGenero = document.getElementById('selectGenero');
    let datoNacimiento = document.getElementById('input_nacimiento');
    let datoArchivo = document.getElementById('input_foto');
    
    if(datoNombre.value == ''){
        datoNombre.classList.add('is-invalid');
    }else{
        datoNombre.classList.remove('is-invalid');
        datoNombre.classList.add('is-valid');}

    if(datoCorreo.value == '' || !validarCorreo(datoCorreo.value)){
        datoCorreo.classList.add('is-invalid');
    }else{
        datoCorreo.classList.remove('is-invalid');
        datoCorreo.classList.add('is-valid');}

    if(datoContrasena.value == '' || !validarcontrasenaSegura(datoContrasena.value)){
        datoContrasena.classList.add('is-invalid');
    }else{
        datoContrasena.classList.remove('is-invalid');
        datoContrasena.classList.add('is-valid');}

    if(datoRepetirContrasena.value == ''){
        datoRepetirContrasena.classList.add('is-invalid');
    }else{
        datoRepetirContrasena.classList.remove('is-invalid');
        datoRepetirContrasena.classList.add('is-valid');}

    if(datoNacimiento.value == ''){
        datoNacimiento.classList.add('is-invalid');
    }else{
        datoNacimiento.classList.remove('is-invalid');
        datoNacimiento.classList.add('is-valid');}

    if(datoGenero.value == ''){
        datoGenero.classList.add('is-invalid');
    }else{
        datoGenero.classList.remove('is-invalid');
        datoGenero.classList.add('is-valid');}
}

function validarCorreo(email){
    const expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return expresion.test(email);
}

function validarcontrasenaSegura(password){
    const expresionregular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;
    return expresionregular.test(password);
}