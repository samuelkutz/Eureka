function isValidEmail(email){
    let hasArroba = false;

    if (email.length == 0){
        return false
    }

    //verifica se cada elemento da string digitada é um arroba ou nao
    for (i = 0; i < email.length; i++){
        char = email.charCodeAt(i);

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

function isValidPassword(password){
    const regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$") //
    if (password.match(regex)){
        return true
    }

    return false
}