class MainPage {

orderButton = ".orders-list-button";
notification = ".v-snack__content";


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
}

export default MainPage 
