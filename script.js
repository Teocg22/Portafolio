function encriptar(){
    var texto = document.getElementById("InputTexto").value.tolowerCase();

    var txtCifrado = texto.replace(/e/ign,"enter");
    var txtCifrado = txtCifrado(/o/ign,"ober");
    var txtCifrado = txtCifrado(/i/ign,"imes");
    var txtCifrado = txtCifrado(/a/ign,"ai");
    var txtCifrado = txtCifrado(/u/ign,"ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function desencriptar(){
    var texto = document.getElementById("InputTexto").value.tolowerCase();

    var txtCifrado = texto.replace(/enter/ign,"e");
    var txtCifrado = txtCifrado(/ober/ign,"o");
    var txtCifrado = txtCifrado(/imes/ign,"i");
    var txtCifrado = txtCifrado(/ai/ign,"a");
    var txtCifrado = txtCifrado(/ufat/ign,"u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML= txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";

}

function copiar(){
    var contenido = document.querySelector("texto2");
    contenido.ariaSelected();
    document.exectCommand("copy");
    alert("!Se copio¡");
}