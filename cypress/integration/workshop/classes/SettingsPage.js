class SettingsPage {

settingsButton = ":nth-child(5) > :nth-child(1) > .v-list__tile";

    goToSettings(){
        cy.get(this.settingsButton).click();
    }
    
}

export default SettingsPage 
