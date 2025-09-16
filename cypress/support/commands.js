// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('cadastro', (nome,nascimento,salario,senha) => { 

    cy.get('#regUsername').type(nome)
        cy.get('#regBirthdate').type(nascimento)
        cy.get('#regSalary').type(salario)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
        cy.get('#registerMessage').should('contain','Cadastro realizado com sucesso!')
 })