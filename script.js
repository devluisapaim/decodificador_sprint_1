function showMessage() {
    document.getElementById("nocode").style.display = "none";
    document.getElementById("withcode").style.display = "block";
}

function btnReset() {
    document.getElementById("nocode").style.display = "block";
    document.getElementById("withcode").style.display = "none";
    document.getElementById("output-message").value = "";
    document.getElementById("input-message").value = "";
}

function btnEncode() {
    if (document.getElementById("input-message").value != "") {
        encodeMessage();
        showMessage();
    }
}

function btnDecode() {
    if (document.getElementById("input-message").value != "") {
        decodeMessage();
        showMessage();
    }
}

function encodeMessage() {

    let mensagemInput = document.getElementById("input-message").value.toLowerCase();
    let mensagemDesmembrada = mensagemInput.split("");

    for (var x = 0; x < mensagemDesmembrada.length; x++) {
        if (mensagemDesmembrada[x] == "a" ) {
            mensagemDesmembrada[x] = "ai";
        } 
        if (mensagemDesmembrada[x] == "e" ) {
            mensagemDesmembrada[x] = "enter";
        } 
        if (mensagemDesmembrada[x] == "i" ) {
            mensagemDesmembrada[x] = "imes";
        } 
        if (mensagemDesmembrada[x] == "o" ) {
            mensagemDesmembrada[x] = "ober";
        } 
        if (mensagemDesmembrada[x] == "u" ) {
            mensagemDesmembrada[x] = "ufat";
        } 
    }

    let mensagemCodificada = mensagemDesmembrada.join("");

    document.getElementById("output-message").innerHTML = mensagemCodificada;
}

function decodeMessage() {
    
    let mensagemInput = document.getElementById("input-message").value;
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    var stringDecode = mensagemInput.toLowerCase();

    for(let i=0; i < matrizCodigo.length; i++) {
        if(stringDecode.includes(matrizCodigo[i][1])) {
            stringDecode = stringDecode.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }

    document.getElementById("output-message").innerHTML = stringDecode;
}

function btnCopy() {
    let copyText = document.querySelector("#output-message");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);    
    copyText.value = "";
}