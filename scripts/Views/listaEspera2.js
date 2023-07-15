//segunda mente envent linstendersss
const controller = new Controller()
const view = new View()

document.querySelector("#CEP").addEventListener("blur", function () {
    let CEP = document.querySelector("#CEP").value

    let addressResponse = controller.getAddress(CEP)

    if (typeof addressResponse == "string"){
        document.querySelector("#CEP").value = ''
        return alert(addressResponse)
    }
})

document.querySelector("#botao-inscrever").addEventListener("click", function () {
    let campoNome = document.querySelector("#nome").value
    let campoEmail = document.querySelector("#email").value
    let campoRG = document.querySelector("#RG").value
    let campoCEP = document.querySelector("#CEP").value

    if (campoNome == '' || campoEmail == '' || campoRG == '' || campoCEP == '') {
        return alert("Preencha todos os campos!")
    }

    let validateEmailResponse = controller.validateEmail(campoEmail)

    if (validateEmailResponse == "Sucesso"){
        view.renderListaEspera()
        setTimeout(() => { window.location.href = "./index.html" }, 3000)
    }
    else{
        alert((validateEmailResponse))
    }
})
