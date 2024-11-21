import { loginPage } from "../support/pages/loginPage";
import { faker } from "@faker-js/faker";

describe('Karaca Login Test', () => {

  let randomEmail = faker.internet.email();
  let randomPassword = faker.internet.password();

  beforeEach(() => {
    loginPage.visit();
    loginPage.clickAlertButton();
  })

  it('login with valid credentials', () => {
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

  it("Successfully logout", () => {
    loginPage.login();
    loginPage.cookiesDecline();
    loginPage.clickMeinKontoButton();
    loginPage.clickLogoutButton();
    loginPage.verifyLogoutTextIsVisible();
  });

});

