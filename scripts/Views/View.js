class View {
    render(selector, newHTML){
        document.querySelector(selector).innerHTML = newHTML
    }

    renderErrorText(text) {
        let listaEsperaForm = document.querySelector("#form")
        let errorText = document.getElementById("error-text")
        
        if (errorText == null) { // serve para evitar criar varios elementos repitidos
            errorText = document.createElement("h3")
            errorText.id = "error-text"
            errorText.classList.add("login-invalido")
        }
        
        errorText.innerText = text
        
        listaEsperaForm.appendChild(errorText)
    }
}