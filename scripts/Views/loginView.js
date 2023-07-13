//event listeners
const loginButton = document.querySelector("#botao-login")

loginButton.addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#senha").value
    let view = new View()
    let controller = new Controller()

    //aqui seria onde verificamos se as credenciais combinam com alguma na "database"

    if (!controller.isValidEmail(email)){
        return view.renderErrorText("Email Inválido")
    }

    if (!controller.isValidPassword(password)){
        return view.renderErrorText("Senha Inválida")
    }

    view.renderSuccessfulLogin()

    setTimeout(() => {window.location.href="./index.html"}, 3000)
})