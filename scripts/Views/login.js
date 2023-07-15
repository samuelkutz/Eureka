//event listeners

document.querySelector("#botao-login").addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#senha").value
    let view = new View()
    let controller = new Controller()

    let loginResponse = controller.login(email, password)

    //aqui seria onde verificamos se as credenciais combinam com alguma na "database"

    if (loginResponse == "Sucesso"){
        view.renderSuccessfulLogin()
        setTimeout(() => { window.location.href = "./index.html" }, 5000)
    }
    else{
         view.renderErrorText(loginResponse)
    }
})