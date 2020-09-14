class MainPage {

item = ":nth-child(2) > .layout > .dish-card > :nth-child(1)";

    addToCart(){
        cy.get(item).click()
    }
    
}

export default MainPage 
