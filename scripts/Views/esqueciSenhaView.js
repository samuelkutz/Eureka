//event listeners

const redefSenhaButton = document.querySelector("#redefinir-senha")

redefSenhaButton.addEventListener("click", function() {
    let email = document.querySelector("#email").value


    if (isValidEmail(email)){ //isValidEmail
        //finja que o email foi autenticado com 2 fatores e tal :P 
        renderSentEmail(email)
    }
    else{
        renderInvalidEmail()
    }
})

function renderSentEmail(email){
    //adiciona um textinho no final do formulario de login alertando q esta invalido
    let section = document.querySelector(".secao-login")
    section.innerHTML = `
    <p class="titulo" style="margin-top: 10%; font-size: larger">Um email com sua nova senha foi enviado para: </p> 
    <p class="titulo" style="margin-top: 10%; font-size: larger"><b style="padding-left: 10%;">${email}</b></p>
    `
}

function renderInvalidEmail(){
    //adiciona um textinho no final do formulario de login alertando q esta invalido
    let esqueciMain = document.querySelector("#esqueci-form")
    let invalidEmail = document.createElement("h3")
    invalidEmail.classList.add("login-invalido")
    invalidEmail.innerText = "Email Inválido" 

    esqueciMain.appendChild(invalidEmail)
}
