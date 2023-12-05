import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
// carousel.js


// Importing Cypress for IntelliSense (optional but helpful)
/// <reference types="cypress" />

// Step definition for "Given I am on the DemoBlaze homepage"
Given('I am on the DemoBlaze homepage', () => {
    cy.visit('https://www.demoblaze.com/');
});


// Step definition for "Then I should see a featured items carousel"
Then('I should see a featured items carousel', () => {
    cy.get('.carousel').should('exist');
});

// Step definition for "When I click on the {string} button in the carousel"
When('I click on the {string} button in the carousel', (button) => {
    cy.get(`.carousel-control-${button}`).click();
});


// Step definition for "Then the carousel should move to the next item"
Then('the carousel should move to the next item', () => {
    // Implement logic to verify carousel has moved to next item
    // This can be tricky and might depend on how the carousel is implemented
});

// Step definition for "Then the carousel should move to the previous item"
Then('the carousel should move to the previous item', () => {
    // Implement logic to verify carousel has moved to previous item
    // This can be tricky and might depend on how the carousel is implemented
});

// Step definition for "When I click on an item in the carousel"
When('I click on an item in the carousel', () => {
    cy.get('.carousel-inner .item').first().click();
});

// Step definition for "Then I should be redirected to the product detail page for that item"
Then('I should be redirected to the product detail page for that item', () => {
    cy.url().should('include', '/prod.html?idp_');
});
