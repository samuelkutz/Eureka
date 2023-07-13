//segunda mente envent linstendersss
const controller = new Controller()
const view = new View()

var arrayCEP = ''
const validaCEP = document.querySelector("#CEP")
validaCEP.addEventListener("blur", function () {
    let cep = document.querySelector('#CEP').value
    let resposta = controller.pesquisaCEP(cep)
    if (resposta == 'CEP Inválido') {
        alert("Formato de CEP inválido.\nDigite apenas números")
        return
    }
    else if (resposta == 'CEP não encontrado') {
        alert("CEP não encontrado!\nTente Novamente.")
        return
    }
})

const botaoInscrever = document.querySelector("#botao-inscrever")
botaoInscrever.addEventListener("click", function () {
    let campoNome = document.querySelector("#nome").value
    let campoEmail = document.querySelector("#email").value
    let campoRG = document.querySelector("#RG").value
    let campoCEP = document.querySelector("#CEP").value

    if (campoNome == '' || campoEmail == '' || campoRG == '' || campoCEP == '') {
        alert("Preencha todos os campos!")
        return
    }

    view.renderListaEspera()
    setTimeout(() => { window.location.href = "./index.html" }, 3000)
})
