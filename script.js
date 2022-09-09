const inputTexto = document.querySelector("#input-message");
const outputTexto = document.querySelector("#output-message");


// Criptografar

function btnEncode() {
    const textoCriptografado = encodeMessage(inputTexto.value);
    outputTexto.value = textoCriptografado;
    showMessage();
}

function encodeMessage(mensagemCriptografar) {
    mensagemCriptografar = mensagemCriptografar.toLowerCase()
    let mensagem = mensagemCriptografar.split("");

    for (var x = 0; x < mensagem.length; x++) {
        if (mensagem[x] == "a" ) {
            mensagem[x] = "ai";
        } 
        if (mensagem[x] == "e" ) {
            mensagem[x] = "enter";
        } 
        if (mensagem[x] == "i" ) {
            mensagem[x] = "imes";
        } 
        if (mensagem[x] == "o" ) {
            mensagem[x] = "ober";
        } 
        if (mensagem[x] == "u" ) {
            mensagem[x] = "ufat";
        } 
    }

    mensagemCriptografar = mensagem.join("");
    return mensagemCriptografar;

    // document.getElementById("output-message").innerHTML = mensagemCodificada;
}

// Descriptografar :: baseado no modelo do Live Coding

function btnDecode() {
    const textoDescriptografado = decodeMessage(inputTexto.value);
    outputTexto.value = textoDescriptografado;
    showMessage();
    
}

function decodeMessage(mensagemDescriptografar) {
        
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    mensagemDescriptografar = mensagemDescriptografar.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(mensagemDescriptografar.includes(matrizCodigo[i][1])) {
            mensagemDescriptografar = mensagemDescriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    return mensagemDescriptografar;
}


// Mostrar mensagem traduzida
function showMessage() {
    document.getElementById("nocode").style.display = "none";
    document.getElementById("withcode").style.display = "block";
}

// Botão copiar
function btnCopy() {
    let copyText = document.querySelector("#output-message");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);    
    copyText.value = "";
}

// Botão resetar ao clicar na logo
function btnReset() {
    document.getElementById("nocode").style.display = "block";
    document.getElementById("withcode").style.display = "none";
    document.getElementById("output-message").value = "";
    document.getElementById("input-message").value = "";
}