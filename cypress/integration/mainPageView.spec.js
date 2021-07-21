describe ('Main Page View', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
      });

      it('Should have a 201 status code', () => {
            cy.intercept(
              {
                  method: "GET",
                  url: "http://localhost:3001/api/v1/reservations"
              }, 
              {
                  status: 201,
                  body: [{
                      name: "Lourdes",
                      date: "07/22",
                      time: "6:00pm", 
                      number: 2,
                      id: 1
                  }]
              }
            
    ) });
    
    it('Should be able to visit the main page view', () => {
        cy.visit('http://localhost:3000')
            .contains('Turing Cafe Reservations')

    });

    it('Should have a form', () => {
        cy.get('input').should('be.visible')
        cy.get('#nameInput')
        cy.get('#dateInput')
        cy.get('#timeInput')
        cy.get('#numberInput')
        .get('#submitBtn')
    });

    it('Should have reservation cards', () => {
        cy.get('h2').should('have.class', 'client-name')
        cy.get('p').should('have.class', 'date')
        cy.get('p').should('have.class', 'time')
        cy.get('p').should('have.class', 'number')
        cy.get('#cancelBtn')
    });

    it('Should be able to fill out the form', () => {
        cy.get('#nameInput').type('Luly')
        cy.get('#dateInput').type('7/22/2021')
        cy.get('#timeInput').type('6pm')
        cy.get('#numberInput').type('2')
    });

    it('Should be able to add a new reservation card', () => {
        cy.get('#nameInput').type('Luly')
        cy.get('#dateInput').type('7/22/2021')
        cy.get('#timeInput').type('6pm')
        cy.get('#numberInput').type('2')
        cy.get('#submitBtn').click()
        cy.get('h2').should('have.class', 'client-name').contains('Luly')
    });











})