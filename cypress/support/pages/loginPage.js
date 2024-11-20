class LoginPage {

  constructor() {
    this.customerEmail = '[x-ref="loginEmail"]'
    this.customerPassword = '#customer_password'
    this.loginButton = '//*[@id="customer_login"]/div/div[3]/div[4]/button'
    this.alert = '[x-ref="localizationApplyButton"]'
    this.cookies = '[aria-label="Ablehnen"]'
    this.meinKontoButton = '//*[@id="site-header"]/div[1]/div/div[2]/button/span[2]'
    this.logoutButton = 'span.group-hover\\:underline'
  }

  visit() {
    cy.visit('/account/login');
  }

  writeEmail(email) {
    cy.wait(2000);
    cy.get(this.customerEmail).type(email)
  }

  writePassword(password) {
    cy.wait(2000);
    cy.get(this.customerPassword).type(password)
  }

  clickLoginButton() {
    cy.wait(2000);
    cy.xpath(this.loginButton).click({ force: true });
  }

  clickAlertButton() {
    cy.get(this.alert).click();
  }

  cookiesDecline() {
    cy.get(this.cookies).click();
  }

  clickMeinKontoButton() {
    cy.get(this.meinKontoButton).click();
  }

  clickLogoutButton() {
    cy.get(this.logoutButton).click();

  }

  verifySuccessfullyLogin() {
    cy.url().should('eq', 'https://www.karaca.com.de/');
  }

  verifyLoginTextIsVisible() {
    cy.get('span.text-kblack.text-base.font-medium').should('contain', 'Mein Konto');
  }

  verifyErrorMessage(message) {
    cy.get('.message-error').should('be.visible').and('contain', message);
  }

  verifyPageIsLoginPage() {
    cy.url().should('include', '/login');
  }

  verifyLogoutTextIsVisible() {
    cy.contains('span', 'Login').should('be.visible');
  }


  login() {
    this.writeEmail(Cypress.env("email"));
    this.writePassword(Cypress.env("password"));
    this.clickLoginButton();
  }

  
}

export const loginPage = new LoginPage();