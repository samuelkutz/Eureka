//event listeners

document.querySelector("#produto1").addEventListener("click", () => {window.location.href = "./lista-espera-pt1.html"})

document.querySelector("#produto2").addEventListener("click", () => {window.location.href = "./lista-espera-pt1.html"})

document.querySelector("#produto3").addEventListener("click", () => {window.location.href = "./lista-espera-pt1.html"})


//OBS: não conseguimos colocar essas funções no View.js (quebrava o css)
function showImage(element) {
    element.style.backgroundImage = "url('./images/nossos-produtos/fundo.jpg')";
    element.style.backgroundSize = "cover";
    element.style.backgroundPosition = "center";
    element.style.opacity = "0.9"
    element.style.opacity.hover = "0.9;"
    element.style.transition = "opacity 1s ease-in-out;"

    element.querySelector('.produto-img').style = "display: 'none'";
    element.querySelector('p').style.display = 'none';
}

function hideImage(element) {
    element.style.opacity = "1"
    element.style.backgroundImage = "none";
    element.querySelector('.produto-img').style.display = 'block';
    element.querySelector('p').style.display = 'block';
}