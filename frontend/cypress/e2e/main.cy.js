describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/')
        .get('.authentication-link').click();

    cy.get('.writer-link').click();
    cy.get('.download-link').click();
    cy.get('.home-link').click();
  });
});
