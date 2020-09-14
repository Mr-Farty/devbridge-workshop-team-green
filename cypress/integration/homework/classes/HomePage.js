class HomePage {


    clearButton = "#clearButton";
    actionDropDown = "#selectOperationDropdown";
    calculateButton = "#calculateButton";
    numberField1 = "#number1Field";
    numberField2 = "#number2Field";
    integersOnlyCheckbox = "#integerSelect";

    enterFieldsWith(number1, number2, action) {
        cy.get(this.numberField1).clear()
        cy.get(this.numberField1).type(number1)
        cy.get(this.numberField2).clear()
        cy.get(this.numberField2).type(number2)
        cy.get(this.actionDropDown).select(action)
        cy.get(this.calculateButton).click()
    }
    
}

export default HomePage