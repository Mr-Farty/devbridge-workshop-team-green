// <reference types="Cypress" />

import LoginPage from './classes/LoginPage.js'
import MainPage from './classes/MainPage.js'
import SettingsPage from './classes/SettingsPage.js'

var loginPage = new LoginPage
var mainPage = new MainPage
var settingsPage = new SettingsPage

var website = "https://lunch.devbstaging.com/";
var username = "audrius@green.kns"; //USERNAME HERE
var password = "Grass101"; //PASSWORD HERE


describe('Lunch Page', () => {
    context('Log in', () => {
        it.only("Go to the log-in site and log-in", () => {
            //cy.clearCookies()
            cy.visit(website+"login-password");
            loginPage.logInToWebsite(username, password);
            //Cypress.Cookies.preserveOnce('session_id', 'remember_token');
        })
    })
        context('Test cart', () => {
        it.only("Order item from the menu", () => {
            cy.wait(4000);
            //if(cy.contains('4166dd78'))
            //cy.get('.gray--text > .v-btn__content > span').click();
            //cy.get('.v-chip__content > .v-icon').click();
            mainPage.addToCart();
            mainPage.order();
        })
    })
    context('Order Notification', () => {
        it.only("Check if the notification pops-up when ordering", () => {
            cy.get('.v-snack__content').should('exist')
        })
    })
})
