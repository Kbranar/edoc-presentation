import { loginPage } from "../support/pages/loginPage";
import { faker } from "@faker-js/faker";

describe('Karaca Login Test - Positive Test Scenarios', () => {

  beforeEach(() => {
    loginPage.visit();
    loginPage.clickAlertButton();
  })

  it.only('login with valid credentials', () => {
    cy.wait(2000)
    loginPage.login();
    loginPage.cookiesDecline();
    loginPage.verifySuccessfullyLogin();
  })

  it('login with uppercase email', () => {
    const upperCaseEmail = Cypress.env('email').toUpperCase();

    loginPage.writeEmail(upperCaseEmail);
    loginPage.writePassword(Cypress.env('password'));
    loginPage.clickLoginButton();
    loginPage.cookiesDecline();
    loginPage.verifySuccessfullyLogin();
    loginPage.verifyLoginTextIsVisible();
  });

  describe('Karaca Login Test - Negative Test Scenarios', () => {
    let randomEmail = faker.internet.email();
    let randomPassword = faker.internet.password();

    it('Display an error message for invalid email and password', () => {
      loginPage.writeEmail(randomEmail);
      loginPage.writePassword(randomPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMessage('Die E-Mail-Adresse oder das Passwort ist falsch.');
      loginPage.verifyPageIsLoginPage();
    });

    it('Display an error message for invalid email', () => {
      loginPage.writeEmail(randomEmail);
      loginPage.writePassword(randomPassword);
      loginPage.clickLoginButton();
      loginPage.verifyErrorMessage('Die E-Mail-Adresse oder das Passwort ist falsch.');
      loginPage.verifyPageIsLoginPage();
    });

    it('Display an error message if email is empty', () => {
      loginPage.writeEmail(' ');
      loginPage.writePassword(Cypress.env('password'));
      loginPage.clickLoginButton();
      loginPage.verifyErrorMessage('Die E-Mail-Adresse oder das Passwort ist falsch.');
      loginPage.verifyPageIsLoginPage();
    });

    it('Display an error message if password is empty', () => {
      loginPage.writeEmail(' ');
      loginPage.writePassword(Cypress.env('password'));
      loginPage.clickLoginButton();
      loginPage.verifyErrorMessage('Die E-Mail-Adresse oder das Passwort ist falsch.');
      loginPage.verifyPageIsLoginPage();
    });

    describe('Karaca Logout Test', () => {
      it('Successfully logout', () => {
        cy.wait(2000);
        loginPage.clickMeinKontoButton();
        loginPage.clickLogoutButton();
        loginPage.verifyLogoutTextIsVisible();
      });
    });
    
  });
})

