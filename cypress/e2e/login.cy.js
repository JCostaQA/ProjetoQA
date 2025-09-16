/// <reference  types="cypress" />

describe('Funcionalidade Login', () => {
    let nomeusuario = 'usuarioteste01'
    let senha = 'SenhaForte123@'

    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html') 

        cy.cadastro(nomeusuario,'1995-04-17',3500,senha)
        cy.get('#register-form > .toggle-link').click()

    });
    afterEach(() =>{
        cy.screenshot()
    })

    //Caso de Teste Positivo (Caminho Feliz)
    it('Fazer login com sucesso usando nome de usuário e senha válidos.', () => {
        cy.get('#loginUsername').type(nomeusuario)
        cy.get('#loginPassword').type(senha)
        cy.get('#loginForm > button').click()
        cy.get('#welcomeMessage').should('contain','Bem-vindo')
    });

    // Casos de Teste Negativos

    //Senha Incorreta
    it('Tentativa de login com senha incorreta para um nome de usuário válido.', () => {
        cy.get('#loginUsername').type(nomeusuario)
        cy.get('#loginPassword').type('senhaerrada123')
        cy.get('#loginForm > button').click()
        cy.get('#loginMessage').should('contain','Nome de usuário ou senha incorretos.')
    });
    //Nome de Usuário inexistente
    it('Tentativa de login com um nome de usuário que não existe no sistema.', () => {
        cy.get('#loginUsername').type('usuarioinexistente')
        cy.get('#loginPassword').type(senha)
        cy.get('#loginForm > button').click()
        cy.get('#loginMessage').should('contain','Nome de usuário ou senha incorretos.')
    });

    //Campos Vazios
    it('Tentativa de login com o campo de nome de usuário vazio', () => {
        cy.get('#loginPassword').type(senha)
        cy.get('#loginForm > button').click()
        
    });

    it('Tentativa de login com o campo de senha vazio.', () => {
        cy.get('#loginUsername').type(nomeusuario)
        cy.get('#loginForm > button').click()
       
    });
});