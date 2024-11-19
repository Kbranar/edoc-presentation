class LoginPage {

  constructor() {
    this.customerEmail = '[x-ref="loginEmail"]'
    this.customerPassword = '#customer_password'
    this.loginButton = '(//div/button[@type="submit"])[1]'
    this.alert= '[x-ref="localizationApplyButton"]'
    this.cookies= '[aria-label="Ablehnen"]'
  }

  visit(){
    cy.visit('/account/login');
  }

  writeEmail(email){
    cy.wait(2000);
    cy.get(this.customerEmail).type(email)
  }

  writePassword(password){
    cy.wait(2000);
    cy.get(this.customerPassword).type(password)
  }

  clickLoginButton(){
    cy.wait(2000);
    cy.xpath(this.loginButton).click({ force: true});
  }

  clickAlertButton(){
    cy.get(this.alert).click();
  }

  cookiesDecline(){
    cy.get(this.cookies).click();
  }

  verifySuccessfullyLogin() {
    cy.url().should('eq', 'https://www.karaca.com.de/');
  }

}


export const login = new LoginPage();