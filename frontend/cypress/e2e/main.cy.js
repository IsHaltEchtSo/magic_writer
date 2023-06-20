context('App Navigation', () => {
  it('Clicking all Links', () => {
    cy.visit('http://localhost:5173/');

    cy.get('.navigation-bar_links-container')
        .invoke('show')
        .get('.writer-link')
        .click();
    cy.get('.navigation-bar_links-container')
        .invoke('show')
        .get('.home-link')
        .click();
  });
});
