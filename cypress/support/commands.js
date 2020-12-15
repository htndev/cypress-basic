/// <reference types="cypress" />

import { BASE_URL } from './constants';
import { Website } from './website';

const page = new Website();

Cypress.Commands.add('login', () => {
  return cy.fixture('user').then((user) => {
    cy.get('input[type="tel"]')
      .type(user.phone)
      .get('input[type="password"]')
      .type(user.password)
      .get('button[type="submit"]')
      .click();
  });
});

Cypress.Commands.add('checkItemsExistsInLocalStorage', (key) => {
  return cy.should(() => {
    const value = localStorage.getItem(key);

    expect(value).not.null;
  });
});

Cypress.Commands.add('insertAdminData', () => {
  return cy.fixture('admin').then((user) => {
    localStorage.setItem('USER_INFO', JSON.stringify(user));
    return cy;
  });
});

Cypress.Commands.add('authorize', () => {
  return page.getAuthorizationButton().click().login();
});
