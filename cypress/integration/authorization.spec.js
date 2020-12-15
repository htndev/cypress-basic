/// <reference types="cypress"  />
import { Chance } from 'chance';

import { BASE_URL, PATH } from '../support/constants';
import { Website } from '../support/website';

const page = new Website();
const chance = new Chance();

describe('Authorization', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should contain authorization button', () => {
    page.getAuthorizationButton().should('be.visible');
  });

  it('should redirect to auth page authorization button', () => {
    page.getAuthorizationButton().click().url().should('include', PATH.LOGIN);
  });

  it('should authorize', () => {
    cy.visit(PATH.LOGIN).login().url().should('eq', BASE_URL);
  });

  it('should trigger sign up error', () => {
    page.goToSignUpPage().contains('Зарегистрироваться').click().get('.v-alert.error').should('be.visible');
  });

  it('should trigger validation error', () => {
    const [name, patronymics, surname] = chance.name({ middle: true }).split(' ');
    const userData = {
      name,
      surname,
      patronymics,
      phone: `38${chance.phone({ formatted: false, mobile: true, country: 'us' })}`,
      password: chance.word({ length: 8 })
    };

    page.goToSignUpPage();
    cy.clearLocalStorage();
    page
      .fillSignUpField(1, userData.name)
      .fillSignUpField(2, userData.surname)
      .fillSignUpField(3, userData.patronymics)
      .fillSignUpField(4, userData.phone)
      .fillSignUpField(5, userData.password)
      .fillSignUpField(6, userData.password)
      .getSignUpButton()
      .click()
      .should(() => {
        const value = localStorage.getItem('USER_INFO');

        expect(value).to.be.not.null;
      });
  });
});
