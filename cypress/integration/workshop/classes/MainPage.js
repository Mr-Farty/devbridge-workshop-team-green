class MainPage {

item = ":nth-child(4) > .layout > .dish-card > :nth-child(1)";
itemPrice = ":nth-child(2) > .layout > .dish-card > :nth-child(1) > .mx-1 > .grey--text"
duplicateIcon = ".v-avatar > .v-badge > .v-icon";
orderButton = ".orders-list-button";


    addToCart(){
        cy.get(this.item).click();
    }
    order(){
        cy.get(this.orderButton).click();
    }
    
    
}

export default MainPage 
