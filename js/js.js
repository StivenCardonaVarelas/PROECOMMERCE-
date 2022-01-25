
  function cerrarSesion() {
    alert("La seseion se ha cerrado de forma correcta!");
  }
 

function validarUsuario( correo, contrasena) {

    const validar = "incorrecto";
    if (correo.equals("usuariovip") && contrasena.equals("12345678")) {

        validar = "valido";

    } else if (!correo.equals("usuariovip") && contrasena.equals("12345678")) {
        validar = "Usuraio invalido";
    } else if (!contrasena.equals("12345678") && correo.equals("usuariovip")) {
        validar = "contraseña invalido";
    }
    return (validar);
}