class Client {
    constructor(user, email, password, RG, CEP) {
        this.user = user
        this.email = email
        this.password = password // encriptar??

        this.RG = RG
        this.CEP = CEP
    }

    //GETTERS
    getUser() {
        return this.user
    }

    getEmail() {
        return this.email
    }

    getPassword(password) {
        return this.password
    }

    getRG() {
        return this.RG
    }

    getCEP() {
        return this.CEP
    }

    //SETTERS
    setUser(user) {
        this.user = user
    }

    setEmail(email) {
        this.email = email
    }

    setPassword(password) {
        this.password = password
    }

    setRG(RG) {
        this.RG = RG
    }

    set(CEP) {
        this.CEP = CEP
    }
}