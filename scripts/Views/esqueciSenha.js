//event listeners

document.querySelector("#redefinir-senha").addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let view = new View()
    let controller = new Controller()

    let validateEmailResponse = controller.validateEmail(email)

    if (validateEmailResponse == "Sucesso") {
        //finja que o email foi autenticado com 2 fatores e tal :P 
        view.render(".secao-login",`
        <p class="titulo" style="margin-top: 10%; font-size: larger">Um email com sua nova senha foi enviado para: </p> 
        <p class="titulo" style="margin-top: 10%; font-size: larger"><b style="padding-left: 10%;">${email}</b></p>
        `)

        setTimeout(() => { window.location.href = "./login.html" }, 5000) // redirect login
    }
    else {
        view.renderErrorText("Email inválido")
    }
})