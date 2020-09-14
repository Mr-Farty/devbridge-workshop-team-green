// <reference types="Cypress" />

import LoginPage from './classes/LoginPage.js'

var loginPag = new LoginPage

var loginSite = "https://lunch.devbstaging.com/login-password";
var username = "audrius@green.kns";
var password = "Grass101";

describe('Lunch Page', () => {
    describe('Log in', () => {
        it.only("Go to the log-in site and log-in", () => {
        cy.visit(loginSite);
        loginPage.logInToWebsite(username, password);
        })
    })
})
