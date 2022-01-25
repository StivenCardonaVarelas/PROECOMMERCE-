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
    var nombreAsesor = document.querySelector('[name=nombreAsesor]').value;
    if (esVacio(nombreAsesor) || stringVacio(nombreAsesor)) {
        e3 = document.getElementById('nombreAsesor');
        e3.style.visibility = 'visible';
        e3.innerHTML = "Ingrese nombre del asesor!";
        setTimeout(function () {
            e3.style.visibility = 'hidden';
        }, tiempo);

        estado = false;
    }
    //validar contrseña 
    var descripcion = document.querySelector('[name=descripcion]').value;
    if (esVacio(descripcion) || stringVacio(descripcion)) {
        e4 = document.getElementById('descripcion');
        e4.style.visibility = 'visible';
        e4.innerHTML = "Ingrese descripcion";
        setTimeout(function () {
            e4.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }
}

function validarPublicarAsesoria() {
    var estado = true;
    var tiempo = 4000;
    //validar correo usuario
    var nombreAsesor = document.querySelector('[name=nombreAsesor]').value;
    //validacion nombre de usuario
    if (esVacio(nombreAsesor) || stringVacio(nombreAsesor)) {
        e2 = document.getElementById('nombreAsesor');
        e2.style.visibility = 'visible';
        e2.innerHTML = "Ingrese nombre del asesor";
        setTimeout(function () {
            e2.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }

     //validar contraseña
    var descripcion = document.querySelector('[name=descripcion]').value;
    if (esVacio(descripcion) || stringVacio(descripcion)) {
        e4 = document.getElementById('descripcion');
        e4.style.visibility = 'visible';
        e4.innerHTML = "Ingrese descripcion";
        setTimeout(function () {
            e4.style.visibility = 'hidden';
        }, tiempo);
        estado = false;
    }
    

       
          
    
    
    







    return estado;
}


  