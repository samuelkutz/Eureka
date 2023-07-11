//primeiramete, event listeners

const redirectToListaEsperaPt2 = document.querySelector("#botao-lista-espera-pt2")
redirectToListaEsperaPt2.addEventListener("click", function(){
        //vamos verificar se as senhas sao iguais
        let user = document.querySelector("#user").value
        let password = document.querySelector("#senha").value
        let confirmPassword = document.querySelector("#conf-senha").value

        if (user == "" || password == "" || confirmPassword == ""){
            renderErrorText("Por favor, preencha todos os campos")
            return
        }

        if (password != confirmPassword){
            renderErrorText("Senhas Diferentes!")
            return
        }

        if (!isValidPassword(password)){
            return renderErrorText("Senha muito fraca!")
        }   

        //aqui seria onde nós inicializariamos o novo cliente com a senha e tal

        window.location.href = "./lista-espera-pt2.html"
})

function renderErrorText(text){

    //adiciona um textinho no final do formulario de login alertando q esta invalido
    let listaEsperaForm = document.querySelector("#form-lista-espera-pt1")
    let errorText = document.getElementById("error-text")

    if(errorText == null) { // serve para evitar criar varios elementos repitidos
        errorText = document.createElement("h3")
        errorText.id = "error-text"
        errorText.classList.add("login-invalido")
    } 

    errorText.innerText = text

    listaEsperaForm.appendChild(errorText)
}