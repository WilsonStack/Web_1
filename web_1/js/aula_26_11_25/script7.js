let imagem = document.querySelector("#imagem");

function aumentar(e) {
    let largura = parseInt(imagem.getAttribute("width"));
    largura = largura + 70;
    imagem.setAttribute("width", largura);
}

function mudar_imagem(e) {
    let path = imagem.getAttribute("src");

    if (path == "img/mercedes.jpg") {
        imagem.setAttribute("src", "img/bmw-m4.jpg");
    } else {
        imagem.setAttribute("src", "img/mercedes.jpg");
    }
}