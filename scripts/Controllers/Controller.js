class Controller {
    getAddress(CEP) {
        try {
            let url = `https://viaCEP.com.br/ws/${CEP}/json/`

            const client  = new Client()
            client.checkCEP(CEP)

            $.ajax({
                url: url,
                success: function(dados){
                    $("#CEP").val(dados.cep);
                    $("#Rua").val(dados.logradouro);
                    $("#Bairro").val(dados.bairro);
                    $("#Cidade").val(dados.localidade);
                    $("#Estado").val(dados.uf);
                }
            });

            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }
    }
    
    login(email, password){
        try {
            const client = new Client()

            client.checkEmail(email)
            client.checkPassword(password)

            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }   
    }

    register(email, password, confirmPassword){
        try {
            if (password != confirmPassword){
                throw new Error("Senhas diferentes")
            }

            const client = new Client()
            client.checkEmail(email)
            client.checkPassword(password)

            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }
    }

    validateEmail(email){
        try {
            const client = new Client()
            client.checkEmail(email)

            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }
    }
}
