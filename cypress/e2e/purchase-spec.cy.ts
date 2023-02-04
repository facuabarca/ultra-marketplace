describe('Purchase Success', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.get(
      ':nth-child(1) > app-product-card > .card > .card-body > .btn'
    ).click();
    cy.get('[data-test="go-basket"]').scrollIntoView();
    cy.wait(2000);
    cy.get('[data-test="go-basket"]').click();
    cy.wait(3000);
    cy.get('[data-test="go-checkout"]').click();
    cy.get('[data-test="personal_data_name"]').type('Facundo');
    cy.wait(500);
    cy.get('[data-test="personal_data_surname"]').type('Abarca');
    cy.wait(500);
    cy.get('[data-test="personal_data_email"]').type('facu@gmail.com');
    cy.wait(500);
    cy.get('[data-test="address_data_street"]').type('Cristobal de Moura 3434');
    cy.wait(500);
    cy.get('[data-test="address_data_city"]').type('Barcelona');
    cy.wait(500);
    cy.get('[data-test="address_data_state"]').type('Barcelona');
    cy.wait(500);
    cy.get('[data-test="checkout_payment"]').click();
    cy.wait(6000);
    cy.get('[data-test="checkout_success_buy_more"]').click();
  });
});
