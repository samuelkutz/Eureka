class Client{
    email;
    password; // encriptar??    
    user;
    RG;
    CEP;

    //GETTERS
    getUser(){
        return this.user
    }
    
    getEmail(){
        return this.email
    }
    
    getPassword(){
        return this.password
    }
    
    getRG(){
        return this.RG
    }
    
    getCEP(){
        return this.CEP
    }
    
    //SETTERS
    setUser(user){
        this.user = user
    }

    setEmail(email){
        this.checkEmail(email)
        this.email = email
    }

    setPassword(password){
        this.checkPassword(password)
        this.password = password
    }

    setRG(RG){
        this.RG = RG
    }
    
    set(CEP){
        this.checkCEP(CEP)
        this.CEP = CEP
    }

    //métodos de validação!!
    
    checkEmail(email){
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
    
    checkPassword(password){
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
    
    checkCEP(CEP){
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