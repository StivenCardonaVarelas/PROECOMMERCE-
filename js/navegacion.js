function esVacio(str) {
    return(!str || str.length === 0);
}
function stringVacio(str) {

    return(!str || /^\s*$/.test(str));

}
function validar() {
    var estado = true;
    var tiempo = 4000;
    //validar email
    var email = document.querySelector('[name=correo]').value;
    if (esVacio(email) || stringVacio(email)) {
        e3 = document.getElementById('email');
        e3.style.visibility = 'visible';
        e3.innerHTML = "Ingrese email!";
        setTimeout(function () {
            e3.style.visibility = 'hidden';
        }, tiempo);

        estado = false;
    }
    //validar contrseña 
    var contrasena = document.querySelector('[name=contrasena]').value;
    if (esVacio(contrasena) || stringVacio(contrasena)) {
        e4 = document.getElementById('contrasena');
        e4.style.visibility = 'visible';
        e4.innerHTML = "Ingrese contraseña";
        setTimeout(function () {
            e4.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }
}


function validarIniciosesion() {
    var estado = true;
    var tiempo = 4000;
    //validar correo usuario
    var email = document.querySelector('[name=correo]').value;
    //validacion nombre de usuario
    if (esVacio(email) || stringVacio(email)) {
        e2 = document.getElementById('email');
        e2.style.visibility = 'visible';
        e2.innerHTML = "Ingrese email!";
        setTimeout(function () {
            e2.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }

     //validar contraseña
    var contrasena = document.querySelector('[name=contrasena]').value;
    if (esVacio(contrasena) || stringVacio(contrasena)) {
        e4 = document.getElementById('contrasena');
        e4.style.visibility = 'visible';
        e4.innerHTML = "Ingrese contraseña";
        setTimeout(function () {
            e4.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }

    if (!esVacio(contrasena) && contrasena.length < 8) {
        e5 = document.getElementById('contrasena');
        e5.style.visibility = 'visible';
        e5.innerHTML = "contraseña de 8 carateres";
        setTimeout(function () {
            e5.style.visibility = 'hidden';
        }, tiempo);
        estado = false;

    }







    return estado;
}

function validarRegistro(respuesta) {
    var tiempo = 4000;
    e = document.getElementById('validar');
    e.style.visibility = 'visible';
   

    if (respuesta === 'incorrecto') {
        setTimeout(function () {
            e.style.visibility = 'hidden';
            e.style.height= 50+'px';
        }, tiempo);

        e.innerHTML = "contraseña Invalida <br/>Usuario Invalido";

    }else if (respuesta === 'Usuraio invalido') {
        e.innerHTML = "Usuario Invalido";
        setTimeout(function () {
            e.style.visibility = 'hidden';
        }, tiempo);


    }else if (respuesta === 'contraseña invalido') {
         e.innerHTML = 'contraseña Invalido';
        setTimeout(function () {
            e.style.visibility = 'hidden';
        }, tiempo);

       
    } 


}

