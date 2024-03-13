const botonEncriptar = document.querySelector(".Encriptar");
const botonDesencriptar = document.querySelector(".Desencriptar");
const munieco = document.querySelector(".imagen-vacio");
const contenedor = document.querySelector(".mensaje-vacio");
const resultado = document.querySelector(".texto-resultado");
const btnCopiar = document.querySelector(".copiar");

botonEncriptar.addEventListener("click", encriptar);
botonDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);

function encriptar() {
        ocultar();
        const texto = document.getElementById("mensaje").value;
        resultado.textContent = encriptarTexto(texto);
    }

function desencriptar() {
        ocultar();
        const texto = document.getElementById("mensaje").value;
        resultado.textContent = desencriptarTexto(texto);
    }

function ocultar() {
        munieco.classList.add("ocultar");
        contenedor.classList.add("ocultar");
    }

function encriptarTexto(texto) {
        var textoFinal = "";
        for(var i = 0; i < texto.length; i++) {
            if(texto[i] == "a") {
                textoFinal = textoFinal + "ai";
            } else if(texto[i] == "e") {
                textoFinal = textoFinal + "enter";
            } else if(texto[i] == "i") {
                textoFinal = textoFinal + "imes";
            } else if(texto[i] == "o") {
                textoFinal = textoFinal + "ober";
            } else if(texto[i] == "u") {
                textoFinal = textoFinal + "ufat";
            } else {
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
    }

function desencriptarTexto(texto) {
        var textoFinal = "";
        for(var i = 0; i < texto.length; i++) {
            if(texto[i] == "a") {
                textoFinal = textoFinal + "a";
                i = i + 1;
            } else if(texto[i] == "e") {
                textoFinal = textoFinal + "e";
                i = i + 4;
            } else if(texto[i] == "i") {
                textoFinal = textoFinal + "i";
                i = i + 3;
            } else if(texto[i] == "o") {
                textoFinal = textoFinal + "o";
                i = i + 3;
            } else if(texto[i] == "u") {
                textoFinal = textoFinal + "u";
                i = i + 3;
            } else {
                textoFinal = textoFinal + texto[i];
            }
        }
        return textoFinal;
    }

function copiarTexto() {
        const textoResultado = resultado.textContent;
        navigator.clipboard.writeText(textoResultado)
            .then(() => console.log('Texto copiado correctamente'))
            .catch(err => console.error('Error al copiar el texto: ', err));
    };
