/// <reference types="cypress"/>

describe('Login', () => {

  beforeEach(() => {
    cy.visit('minha-conta')
  });

  afterEach(() => {
    cy.screenshot()
  })

  //CT-Login-001 Login com dados válidos
  it('Login com sucesso', () => {
    cy.get('input[name="username"]').type('testedybala@gmail.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('teste123')
    cy.get('[name="login"]').click()
    cy.url().should('include', 'minha-conta/');
  });

  //CT-Login-002 Tentativa com senah incorreta
  it('Erro com senha incorreta', () => {
    cy.get('input[name="username"]').type('testedybala@gmail.com')
    cy.get('.woocommerce-form > :nth-child(2) > [name="password"]').type('errada')
    cy.get('[name="login"]').click()
    cy.contains('A senha fornecida para o e-mail').should('be.visible')
  });

  //CT-Login-003 Campos vazios
  it('Campos obrigatórios', () => {
    cy.get('[name="login"]').click()
    cy.contains('obrigatório').should('be.visible')
  });

});
