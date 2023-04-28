
function nombreApellido (){
     nombreUsuario = prompt("Como te llamas");
     apellidoUsuario = prompt("Ingresa tu apellido");
}
function validarUsuario(){
    while (nombreUsuario == "" && apellidoUsuario == "" || nombreUsuario != "" && apellidoUsuario == "" || nombreUsuario == "" && apellidoUsuario != ""  ){
    alert ("No ingresaste ningun usuario");
    nombreApellido ();
}
}
function mayorEdad (){
    edadUsuario = parseInt(prompt("Solo ingresaras si eres mayor de edad! ¿Cuantos años tienes?"));

}
function comfirmacionUsuario (){

    let confirmaUsuario = prompt(`El nombre ingresado es ${nombreUsuario} ${apellidoUsuario} responde Y/N`);

    if (confirmaUsuario == "Y") {
    alert (`Bienvenido ${nombreUsuario} ${apellidoUsuario}`);
    }else{
    alert ("Usuario incorrecto");
}
}
nombreApellido();
validarUsuario();


mayorEdad ();
/*

 */

if (edadUsuario>=18 && edadUsuario<90) {
    alert ("Felicitaciones Puedes ingresar");
}  
else{
    alert ("Necesitas supervisacion de un Mayor");
 
}