class Garage {
  get addCarButton() {
    return cy.contains('.btn-primary', 'Add car');
  }

  openAddCarForm() {
    this.addCarButton.click();
  }

  verifyMessageIfCarAdded() {
    cy.get('.alert-success').should('be.visible').contains('Car added');
  }

  verifyIfCarAdded(brand, model) {
    cy.get('div.car-body').should('exist');
    cy.contains('.car_name', `${brand} ${model}`).should('be.visible');
  }

  deleteCar(brand, model) {
    cy.contains('.car_name', `${brand} ${model}`)
      .closest('.car-item')
      .find('.icon-edit')
      .click();
    cy.get('.btn-outline-danger').click();
    cy.get('.btn-danger').click();
    cy.get('.alert-success').should('be.visible').contains('Car removed');
  }
}

export default new Garage();
