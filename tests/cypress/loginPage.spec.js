describe('loginPage page test', function() {
    it('page contains key parts', function() {
        cy.visit('https://jpiovar-vue.herokuapp.com'); 
        cy.contains('Simple Quora Login');
    });
    it('page interacts correctly', function() {
        cy.get('input#userName').type('janko');
        cy.get('input#exampleInputPassword1').type('janko');
        cy.get('.login-form button[type="submit"]').click();
    });
});