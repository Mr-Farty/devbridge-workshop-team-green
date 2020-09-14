class HomePage {


    logInUsername = ":nth-child(1) > .v-input__control > .v-input__slot > .v-text-field__slot > input";
    logInPassword = ":nth-child(2) > .v-input__control > .v-input__slot > .v-text-field__slot > input";
    logInButton = ".v-btn__content";


    logInToWebsite(username, password){
        cy.get(this.logInUsername).type(username);
        cy.get(this.logInPassword).type(password);
        cy.get(this.logInButton).click();
    }
    
}

export default HomePage