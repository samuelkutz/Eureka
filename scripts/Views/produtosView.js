const redirectToListaEsperaProd1 = document.querySelector("#produto1")
redirectToListaEsperaProd1.addEventListener("click", function(){
    //aqui deveria acontecer uma verificacao se o usuario esta logado ou nao
    //mas isso só daria certo de tivesse como salvar os dados quando se muda de página

    window.location.href="./lista-espera-pt1.html"
})

const redirectToListaEsperaProd2 = document.querySelector("#produto2")
redirectToListaEsperaProd2.addEventListener("click", function(){
    //aqui deveria acontecer uma verificacao se o usuario esta logado ou nao
    //mas isso só daria certo de tivesse como salvar os dados quando se muda de página

    window.location.href="./lista-espera-pt1.html"
})

const redirectToListaEsperaProd3 = document.querySelector("#produto3")
redirectToListaEsperaProd3.addEventListener("click", function(){
    //aqui deveria acontecer uma verificacao se o usuario esta logado ou nao
    //mas isso só daria certo de tivesse como salvar os dados quando se muda de página

    window.location.href="./lista-espera-pt1.html"
})

function showImage(element) {
    element.style.backgroundImage = "url('./images/nossos-produtos/fundo.jpg')";
    element.style.backgroundSize = "contain";
    element.style.backgroundPosition = "center";
    element.style.backgroundRepeat = "no-repeat";
    element.querySelector('.produto-img').style.display = 'none';
    element.querySelector('p').style.display = 'none';
  }
  
  function hideImage(element) {
    element.style.backgroundImage = "none";
    element.querySelector('.produto-img').style.display = 'block';
    element.querySelector('p').style.display = 'block';
  }
