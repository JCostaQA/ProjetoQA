/// <reference  types="cypress" />

describe('Cadastro usuário', () => {

    let nomeusuario = 'usuarioteste01'
    let senha = 'SenhaForte123@'


    beforeEach(() => {
        cy.visit('http://127.0.0.1:5500/index.html')

    });

    //afterEach(() =>{
       // cy.screenshot()
    //})
    it('Cenário Feliz fazendo cadastro', () => {
        cy.get('#regUsername').type(nomeusuario)
        cy.get('#regBirthdate').type('1995-04-17')
        cy.get('#regSalary').type(3500)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
        cy.get('#registerMessage').should('contain','Cadastro realizado com sucesso!')

    });
    // Testes negativos

    //Caso de Teste para Regra RN03 (Nome de Usuário)
    it('Tentativa de cadastro sem preencher o nome de usuário', () => {
        cy.get('#regUsername').clear()
        cy.get('#regBirthdate').type('1995-04-17')
        cy.get('#regSalary').type(3500)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
    });
    //Caso de Teste para Regra RN04 (Senha)
    it('Tentativa de cadastro sem preencher a senha.', () => {
        cy.get('#regUsername').type(nomeusuario)
        cy.get('#regBirthdate').type('1995-04-17')
        cy.get('#regSalary').type(3500)
        cy.get('#regPassword').clear()
        cy.get('#registerForm > button').click()
    });
    //Casos de Teste para a Regra RN01 (Idade)

    //Idade Abaixo do Mínimo
    it('Tentativa de cadastro de um usuário com idade inferior ao mínimo permitido (18 anos).', () => {
        cy.get('#regUsername').type(nomeusuario)
        cy.get('#regBirthdate').type('2008-04-17')
        cy.get('#regSalary').type(3500)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
        cy.get('#registerMessage').should('contain', 'Idade deve ser entre 18 e 45 anos.')
    });
    //Idade Acima do Maximo
    it('Tentativa de cadastro de um usuário com idade superior ao máximo permitido (45 anos)..', () => {
        cy.get('#regUsername').type(nomeusuario)
        cy.get('#regBirthdate').type('1979-04-17')
        cy.get('#regSalary').type(3500)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
        cy.get('#registerMessage').should('contain', 'Idade deve ser entre 18 e 45 anos.')
    });

    //Caso de Teste para a Regra RN02 (Salário)

    //Salário Abaixo do Mínimo
    it('Tentativa de cadastro de um usuário com salário inferior ao mínimo exigido (R$ 3.000,00).', () => {
        cy.get('#regUsername').type(nomeusuario)
        cy.get('#regBirthdate').type('1995-04-17')
        cy.get('#regSalary').type(2500)
        cy.get('#regPassword').type(senha)
        cy.get('#registerForm > button').click()
        cy.get('#registerMessage').should('contain','Salário deve ser R$ 3.000 ou superior.')

    });
})