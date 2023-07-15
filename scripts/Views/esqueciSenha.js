//event listeners

document.querySelector("#redefinir-senha").addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let view = new View()
    let controller = new Controller()

    let validateEmailResponse = controller.validateEmail(email)

    if (validateEmailResponse == "Sucesso") {
        //finja que o email foi autenticado com 2 fatores e tal :P 
        view.renderSentEmail(email)

        setTimeout(() => { window.location.href = "./login.html" }, 5000) // redirect login
    }
    else {
        view.renderErrorText("Email inválido")
    }
})