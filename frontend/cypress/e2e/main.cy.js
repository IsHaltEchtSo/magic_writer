context('App Navigation', () => {
  it('Clicking all Links', () => {
    cy.visit('http://localhost:5173/');

    cy.get('.writer-link').click();
    cy.get('.home-link').click();
  });
});
