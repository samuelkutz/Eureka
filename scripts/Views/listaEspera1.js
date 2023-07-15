//primeiramete, event listeners

document.querySelector("#botao-redirect").addEventListener("click", function () {
    //vamos verificar se as senhas sao iguais
    let email = document.querySelector("#email").value
    let password = document.querySelector("#senha").value
    let confirmPassword = document.querySelector("#conf-senha").value
    let view = new View()
    let controller = new Controller()

    let registerResponse = controller.register(email, password, confirmPassword)

    if (registerResponse == "Sucesso"){
        window.location.href = "./lista-espera-pt2.html" // redirect p/ preencher o endereço
    }
    else{
        view.renderErrorText(registerResponse)
    }
})