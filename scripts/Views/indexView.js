//event listeners

const redirectToProdutos = document.querySelector("#home-produtos")
redirectToProdutos.addEventListener("click", () => {window.location.href="./nossos-produtos.html"})

const redirectToListaEsperaPt1 = document.querySelector("#home-cadastro")
redirectToListaEsperaPt1.addEventListener("click", function(){
    //aqui deveria acontecer uma verificacao se o usuario esta logado ou nao
    //mas isso só daria certo de tivesse como salvar os dados quando se muda de página

    window.location.href="./lista-espera-pt1.html"
})