class HomePage {
  visit() {
    cy.visit('/');
  }
  get signInButton() {
    return cy.get('button.header_signin');
  }
  openSignInFrom() {
    cy.get('button').contains('Login').click();
  }
}

export default new HomePage();
