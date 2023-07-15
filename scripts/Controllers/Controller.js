class Controller {
    getAddress(CEP) {
        try {
            let address;
            let url = `https://viaCEP.com.br/ws/${CEP}/json/`
            this._checkCEP(CEP)

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
        } 
        catch ({ message }) {
            return message
        }
    }
    
    login(email, password){
        try {
            this._checkEmail(email)
            this._checkPassword(password)

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

            this._checkEmail(email)
            this._checkPassword(password)

            //const newClient = new Client(email, password) como nao temos base de dados, apenas paramos por aq né fazer oq
            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }
    }

    validateEmail(email){
        try {
            console.log(email)
            this._checkEmail(email)
            return "Sucesso"
        } 
        catch ({ message }) {
            return message
        }
    }

    _checkEmail(email){
        if (typeof email != "string" || email.length == 0) {
            throw new Error("Informe o seu email");
        }

        if (email.indexOf("@") == -1){
            throw new Error("Email Inválido\nInclua um @")
        }

        let splittedEmail = email.split("@"); //split retorna um array!
            
        if (splittedEmail[0].length == 0 || splittedEmail[1].length == 0) {
            throw new Error("Email Inválido\nInclua um @")
        }
    }

    _checkPassword(password){
        //VALIDACAO DE SENHA
        //a senha tem que ter 5 caracteres sendo cada um deles pelo menos [a-z], [A-Z] ou [0-9]
        if (password.length < 5) {
            throw new Error("A senha deve conter 5 dígitos")
        }
        
        let validatePassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))') 
        
        if (!(validatePassword.test(password))) {
            throw new Error("A senha deve incluir letras maiúsculas e números")
        }
    }

    _checkCEP(CEP){
        if (CEP == "") {
            throw new Error("Insira o CEP")
        }

        // Expressão regular para validar o CEP.
        let validateCEP = /^[0-9]{8}$/

        // Valida o formato do CEP.
        if (!(validateCEP.test(CEP))) {
            throw new Error("CEP inválido")
        }
    }
}
