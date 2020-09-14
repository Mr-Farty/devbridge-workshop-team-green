class MainPage {

orderButton = ".orders-list-button";
notification = ".v-snack__content";
logoutButton = ":nth-child(5) > :nth-child(2) > .v-list__tile";
cartObjects = "span.v-chip__content > i";


    addToCart(){
        cy.get(".dish-card").each(($el) => {
            cy.wrap($el).click();
        });
    }
    order(){
        cy.get(this.orderButton).click();
    }
    cleanCart(){
        cy.get(this.orderButton).click();
    }
    checkNotification(){
        cy.get(this.notification).should('exist');
    }
    logOut(){
        cy.get(this.logoutButton).click();
    }

}

export default MainPage 
