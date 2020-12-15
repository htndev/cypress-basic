/// <reference types="cypress"  />

import { PATH, SEARCH } from '../support/constants';

describe('Services', () => {
  before(() => {
    cy.insertAdminData();
  });

  beforeEach(() => {
    cy.visit(PATH.SERVICES);
  });

  it('should make an appointment with a doctor', () => {
    cy.get('main .col.col-4 .v-card__actions button')
      .first()
      .click()
      .get('.v-input__append-inner > .v-input__icon > .v-icon')
      .click()
      .get('.v-list-item__content')
      .first()
      .click()
      .get('.v-card .v-card__actions button')
      .last()
      .click()
      .get('div.success[role="alert"]')
      .should('be.visible');
  });

  it('should filter', () => {
    cy.get('main div .col-5 input').type(SEARCH.DOCTOR).get('.row').children().should('have.length.at.least', 1);
  });
});
