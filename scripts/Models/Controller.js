class Controller{
    isValidEmail(email){
        let hasArroba = false;
        
        if (email.length == 0){
            return false
        }
        
        //verifica se cada elemento da string digitada é um arroba ou nao
        for (let i = 0; i < email.length; i++){
            let char = email.charCodeAt(i);
            
            if (char == 64){ //se existir um @ na string (64 == @ em ASCII)
                hasArroba = true; 
                break;
            }
        }
        
        //se tem arroba, verifica se os dois lados do arroba estao preenchidos
        if (hasArroba){
            let splittedEmail = email.split("@"); //split retorna um array!
            
            if (splittedEmail[0].length == 0 || splittedEmail[1].length == 0){
                return false;
            }
            
            return true;
        }
    
        //se o codigo chegou até aqui, entao significa que a string não tem arroba
        return false;
    }
    
    passwordStrength(password){
        //a senha tem que ter 5 caracteres sendo cada um deles pelo menos [a-z], [A-Z] ou [0-9]
        if (password.length < 5){
            return "fraca"
        }
    
        let passwordStrength = {
            1 : "fraca",
            2 : "media",
            3 : "forte"
        }
    
        let score = 1
    
        let strongPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z]))')
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))')
        
        if (mediumPassword.test(password)){
            console.log()
            score += 1
        }
    
        if (strongPassword.test(password)){
            score += 1
        }
    
        return passwordStrength[score]
    }

    isValidPassword(password){
        if (password.length < 5){
            return false
        }
        
        return true
    }
}