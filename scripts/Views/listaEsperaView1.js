//primeiramete, event listeners

const redirectToListaEsperaPt2 = document.querySelector("#botao-lista-espera-pt2")
redirectToListaEsperaPt2.addEventListener("click", function () {
    //vamos verificar se as senhas sao iguais
    let email = document.querySelector("#email").value
    let password = document.querySelector("#senha").value
    let confirmPassword = document.querySelector("#conf-senha").value
    let view = new View()
    let controller = new Controller()


    if (email == "" || password == "" || confirmPassword == "") {
        return view.renderErrorText("Por favor, preencha todos os campos")
    }

    if (!controller.isValidEmail(email)){
        return view.renderErrorText("Email Inválido!")
    }

    if (password != confirmPassword) {
        return view.renderErrorText("Senhas Diferentes!")
    }

    if (!controller.isValidPassword(password)) {
        return view.renderErrorText("A senha deve ter pelo menos 5 caracteres.")
    }

    if (controller.passwordStrength(password) == 'fraca') {
        return view.renderErrorText("Insira letras maiúsculas, números, ou símbolos")
    }

    //aqui seria onde nós inicializariamos o novo cliente com a senha e tal

    window.location.href = "./lista-espera-pt2.html" // redirect p/ preencher o endereço
})