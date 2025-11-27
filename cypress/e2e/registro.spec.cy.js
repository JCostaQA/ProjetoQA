/// <reference types="cypress"/>

describe('Registro', () => {

    beforeEach(() => {
        cy.visit('minha-conta');
    });

    afterEach(() => {
        cy.screenshot()
    })

    //CT-REG-001 Registro com dados válidos
    it('Registro com dados válidos', () => {
        cy.get('input[name="email"]').type(`usuario${Math.floor(Math.random() * 100000000)}@teste.com`);
        cy.get('#reg_password').type('Senha123');
        cy.get('[name="register"]').click();
        cy.url().should('include', 'http://lojaebac.ebaconline.art.br/minha-conta/');
    });

    //CT-REG-002 Email já cadastrado
    it('Email já cadastrado', () => {
        cy.get('input[name="email"]').type('testedybala@gmail.com');
        cy.get('#reg_password').type('Senha123');
        cy.get('[name="register"]').click();
        cy.contains('Uma conta já está registrada com seu endereço de e-mail').should('be.visible');
    });

    //CT-REG-003 Email inválido
    it('Email inválido', () => {
        cy.get('input[name="email"]').type('teste@gmail');
        cy.get('#reg_password').type('Senha123');
        cy.get('[name="register"]').click();
        cy.contains('Informe um endereço de e-mail válido.').should('be.visible');
    });

    //CT-REG-004 Campos vazios
    it('Campos vazios', () => {
        cy.get('[name="register"]').click();
        cy.contains('Informe um endereço de e-mail válido.').should('be.visible');
    });


});
