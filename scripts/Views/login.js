//event listeners

document.querySelector("#botao-login").addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let password = document.querySelector("#senha").value
    let view = new View()
    let controller = new Controller()

    let loginResponse = controller.login(email, password)

    //aqui seria onde verificamos se as credenciais combinam com alguma na "database"

    if (loginResponse == "Sucesso"){
        view.render("main", `
        <h2 class="titulo" style="margin-top: 10%;">Login sucedido</h2>
        <h2 class="titulo" style="margin-top: 10%; font-weight: 300">Bem vindo novamente!</h2>
        `)
        setTimeout(() => { window.location.href = "./index.html" }, 5000)
    }
    else{
         view.renderErrorText(loginResponse)
    }
})