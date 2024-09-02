const btnAgregar = document.getElementById("btnAgregar");
const txtNombre = document.getElementById("Name");
const txtNumber = document.getElementById("Number");
const alertValidaciones = document.getElementById("alertValidaciones")
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto")

function validarCantidad(){
    if(txtNumber.value.lenght==0){
        return false;
    }//lenght==0

    if (isNaN(txtNumber.value)){
        return false;
    }//isNaN

    if (Number(txtNumber.value)){
        return false;

    return true;
}}//ValidarCantidad()

btnAgregar.addEventListener("click", function (event){
    event.preventDefault();
        txtNombre.style.border="";
        txtNumber.style.border="";
        alertValidacionesTexto.innerHTML=""
        alertValidaciones.style.display="none";
// Validar el nombre del producto
    if(txtNombre.value.lenght<3){
        txtNombre.style.border="solid red medium";
    alertValidacionesTexto.innerHTML="El <strong>Nombre</strong> no es correcto.<br/>";
        alertValidaciones.style.display="block";
        //return false
    } //if lenght<3

//Validar la cantidad 
    if(! validarCantidad()){
        txtNumber.style.border="solid red medium";
        alertValidacionesTexto.innerHTML+="La <strong>Cantidad</strong> no es correcta.<br/>"
        alertValidaciones.style.display="block";

    }
}); //btnAgregar.addEventListener
//
txtNombre.addEventListener("blur", function(event){
    txtNumber.value = txtNumber.value.trim();
}); //txtNombre.addEventListener