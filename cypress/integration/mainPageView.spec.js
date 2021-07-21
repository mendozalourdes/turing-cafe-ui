describe ('Main Page View', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });
    
    it('Should be able to visit the main page view', () => {
        cy.visit('http://localhost:3000')
            .contains('Turing Cafe Reservations')

    });

    it('Should have a visible form', () => {
        cy.get('input').should('be.visible')
        .get('button').should('have.length', 10)
    });

    it('Should have reservation cards', () => {
        cy.get('h2').should('have.class', 'client-name')
        cy.get('p').should('have.class', 'date')
        cy.get('p').should('have.class', 'time')
        cy.get('p').should('have.class', 'number')
    });

    it('Should be able to fill out the form', () => {
        cy.get('#nameInput').type('Luly')
        cy.get('#dateInput').type('7/22/2021')
        cy.get('#timeInput').type('6pm')
        cy.get('#numberInput').type('2')
    });











})