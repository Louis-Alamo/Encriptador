const input = document.getElementById("input");
const output = document.getElementById("output");
const encriptar_boton = document.getElementById("encriptar");
const desencriptar_boton = document.getElementById("desencriptar");
const copiar = document.getElementById("copiar");

input.focus();


function obtener_mensaje(evento){
    mensaje = input.value;
    return mensaje;
}

function encriptar_mensaje(){

    mensaje = obtener_mensaje();
    if(validar_texto(mensaje)){
        mensaje = mensaje.replaceAll('e', 'enter');
        mensaje = mensaje.replaceAll('i', 'imes');
        mensaje = mensaje.replaceAll('a', 'ai');
        mensaje = mensaje.replaceAll('o', 'ober');
        mensaje = mensaje.replaceAll('u', 'ufat');
        mostrar_mensaje(mensaje);
    }else{
        alert("Oops el texto ingresado no es valido");
        mostrar_mensaje("");
    }

}

function desencriptar_mensaje(){

    mensaje = obtener_mensaje();
    bandera = validar_texto(mensaje);

    if (validar_texto(mensaje)){

        mensaje = mensaje.replaceAll('enter', 'e');
        mensaje = mensaje.replaceAll('imes', 'i');
        mensaje = mensaje.replaceAll('ai', 'a');
        mensaje = mensaje.replaceAll('ober', 'o');
        mensaje = mensaje.replaceAll('ufat', 'u');
        mostrar_mensaje(mensaje);
    }else{
        alert("oops el texto ingresado no es valido");
        mostrar_mensaje("");
    }

}

function mostrar_mensaje(mensaje){

    output.innerHTML=mensaje;
}

function validar_texto(mensaje){

    var patron = /^[a-z\s]+$/;
    if (patron.test(mensaje)){
        return true;

    }else{
        return false;
    }
}

function copiarTexto() {
    output.select();
    output.setSelectionRange(0, 99999); // Para dispositivos móviles
  
    navigator.clipboard.writeText(output.value);
  
    alert("Texto copiado al portapapeles");
  }




encriptar_boton.onclick = encriptar_mensaje;
desencriptar_boton.onclick = desencriptar_mensaje;
copiar.onclick = copiarTexto