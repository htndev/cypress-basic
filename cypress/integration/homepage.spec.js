/// <reference types="cypress"  />
import { Website } from '../support/website';

const page = new Website();

describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open home page', () => {
    cy.contains('Добро пожаловать в "Доктор Плюс"!').should('be.visible');
  });
});
