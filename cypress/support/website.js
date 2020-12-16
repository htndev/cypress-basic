/// <reference types="cypress" />
import { BASE_URL, PATH } from './constants';

export class Website {
  buildSelector = (order) => `form .v-input:nth-of-type(${order}) input`;

  getAuthorizationButton() {
    return cy.get('a.v-btn[href="/auth"]');
  }

  getSignUpButton() {
    return cy.contains('Зарегистрироваться');
  }

  goToSignUpPage() {
    return cy.visit(PATH.REGISTER);
  }

  fillSignUpField(order, value) {
    cy.get(this.buildSelector(order)).type(value);
    return this;
  }

  triggerSignUp() {
    return this.goToSignUpPage().contains('Зарегистрироваться').click();
  }
}
