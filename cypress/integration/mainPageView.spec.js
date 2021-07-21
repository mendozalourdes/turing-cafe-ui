describe ('Main Page View', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
    
    it('Should be able to visit the main page view', () => {
        cy.visit('http://localhost:3000')
            .contains('Turing Cafe Reservations')

    });

    








})