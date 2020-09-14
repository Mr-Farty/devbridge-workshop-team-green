// <reference types="Cypress" />

import LoginPage from './classes/LoginPage.js'
import MainPage from './classes/MainPage.js'

var loginPage = new LoginPage
var mainPage = new MainPage

var website = "https://lunch.devbstaging.com/";
var username = ""; //USERNAME HERE
var password = ""; //PASSWORD HERE


describe('Lunch Page', () => {
    context('Log in', () => {
        it.only("Go to the log-in site and log-in", () => {
            cy.visit(website+"login-password");
            loginPage.logInToWebsite(username, password);
        })
    })
        context('Test cart', () => {
        it.only("Order item from the menu", () => {
            mainPage.addToCart();
            mainPage.order();
            
        })
    })
    context('Order Notification', () => {
        it.only("Check if the notification pops-up when ordering", () => {
            mainPage.checkNotification();
        })
    })
    context('Logout', () => {
        it.only("User logs out", () => {
            mainPage.logOut();
        })
    })
})
