let titulo = document.getElementById("titulo");

function mudar_titulo(e){
    if (titulo.textContent == "Exemplo") {
        titulo.textContent = "BMW M4";
    } else {
        titulo.textContent = "Exemplo";
    }
}