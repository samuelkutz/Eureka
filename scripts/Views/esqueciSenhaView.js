//event listeners

const redefSenhaButton = document.querySelector("#redefinir-senha")

redefSenhaButton.addEventListener("click", function () {
    let email = document.querySelector("#email").value
    let view = new View()
    let controller = new Controller()

    if (controller.isValidEmail(email)) { 
        //finja que o email foi autenticado com 2 fatores e tal :P 
        view.renderSentEmail(email)
        
        setTimeout(() => {window.location.href="./login.html"}, 3000) // redirect home
    }
    else {
        view.renderInvalidEmail()
    }
})