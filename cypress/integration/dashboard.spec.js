/// <reference types="cypress" />
import Chance from 'chance';
import { PATH, SEARCH } from '../support/constants';

const chance = new Chance();

describe('Dashboard', () => {
  beforeEach(() => {
    cy.insertAdminData().visit(PATH.DASHBOARD);
  });

  it('should filter specialties', () => {
    cy.get('.specialists-data-table .v-input input')
      .type(SEARCH.DOCTOR)
      .get('table tbody tr td.text-start')
      .first()
      .should('have.text', SEARCH.DOCTOR);
  });

  it('should add specialty', () => {
    const fakedWord = chance.word({ length: 10 });
    cy.get('main .v-btn')
      .click()
      .get('.v-dialog input')
      .type(fakedWord)
      .get('.v-dialog .v-card__actions button[type="submit"]')
      .click()
      .get('table tbody tr td.text-start:first-child', { timeout: 500 })
      .last()
      .should('have.text', fakedWord);
  });
});
