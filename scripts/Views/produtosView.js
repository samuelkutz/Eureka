const redirectToListaEsperaProd1 = document.querySelector("#produto1")
redirectToListaEsperaProd1.addEventListener("click", function () {
    //aqui deveria acontecer uma verificacao se o usuario esta logado ou nao
    //mas isso só daria certo de tivesse como salvar os dados quando se muda de página

    window.location.href = "./lista-espera-pt1.html"
})

const redirectToListaEsperaProd2 = document.querySelector("#produto2")
redirectToListaEsperaProd2.addEventListener("click", function () {

    window.location.href = "./lista-espera-pt1.html"
})

const redirectToListaEsperaProd3 = document.querySelector("#produto3")
redirectToListaEsperaProd3.addEventListener("click", function () {

    window.location.href = "./lista-espera-pt1.html"
})

const view = new View()

const descricaoProdutos = document.querySelector("#descricao-produtos")
redirectToListaEsperaProd2.addEventListener("mouseover", function (this) {
    view.showImage(this)
})
redirectToListaEsperaProd2.addEventListener("mouseout", function () {
    view.hideImagehideImage(descricaoProdutos)
})
