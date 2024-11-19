import { login } from "../support/pages/loginPage";
import { faker } from "@faker-js/faker";

describe('Karaca Login Test', () => {

  let loginData;
  let randomEmail = faker.internet.email();
  let randomPassword = faker.internet.password();

  before(() => {
    cy.fixture('loginData').then((data) => {
      loginData = data;
      login.visit();
      login.clickAlertButton();
    })
  })

  /*beforeEach(() => {
    cy.clearAllCookies();
  })*/

  it('login with valid credentials', () => {
    cy.wait(2000)
    login.writeEmail(loginData.email);
    login.writePassword(loginData.password);
    login.clickLoginButton();
    login.cookiesDecline();
    login.verifySuccessfullyLogin();
  })

  
})

