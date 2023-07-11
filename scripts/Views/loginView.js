//event listeners
const loginButton = document.querySelector("#botao-login")

loginButton.addEventListener("click", function(){
    let user = document.querySelector("#user").value
    let password = document.querySelector("#senha").value

    //verifica se as credenciais combinam com alguma na "database"
    for (cliente of clientes){
        if(cliente.user == user && cliente.password == password){
            renderSuccessfulLogin(cliente)

            return
        }
    }

    renderFailedLogin()
})

function renderSuccessfulLogin(cliente){
    let loginMain = document.querySelector("main") // dom para modificar a main APENAS da página de login
    loginMain.innerHTML = `
    <h2 class="titulo" style="margin-top: 10%;">Login Sucedido!</h2>
    <h2 class="titulo" style="margin-top: 10%; font-weight: 300">Ficamos felizes em ver você, <b style="padding-left: 1%;">${cliente.user}</b></h2>
    `
}

function renderFailedLogin(){ 
    //adiciona um textinho no final do formulario de login alertando q esta invalido
    let loginMain = document.querySelector("#login-form")
    let loginFailed = document.createElement("h3")
    loginFailed.classList.add("login-invalido")
    loginFailed.innerText = "Login Inválido" 

    loginMain.appendChild(loginFailed)
}
