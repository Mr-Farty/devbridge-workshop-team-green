// <reference types="Cypress" />

import LoginPage from './classes/LoginPage.js'
import MainPage from './classes/MainPage.js'
import SettingsPage from './classes/SettingsPage.js'

var loginPage = new LoginPage
var mainPage = new MainPage
var settingsPage = new SettingsPage

var website = "https://lunch.devbstaging.com/";
var username = "audrius@green.kns";
var password = "Grass101";

describe('Lunch Page', () => {
    context('Log in', () => {
        it.only("Go to the log-in site and log-in", () => {
            cy.visit(website+"login-password");
            loginPage.logInToWebsite(username, password);
        })
    })
    context('Test cart', () => {
        it.only("Check if there is anything on the menu", () => {
            mainPage.addToCart();
            
        })
    })
})
