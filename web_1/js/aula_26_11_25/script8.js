let caixa = document.getElementById("caixa");

function mudar(e) {
    if (caixa.style.backgroundColor == "blue") {
        caixa.style.backgroundColor = "red";
    } else {
        caixa.style.backgroundColor = "blue";
    }
}