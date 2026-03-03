class AddAnExpenseForm {
  get vehicleField() {
    return cy.get('#addExpenseCar');
  }

  get reportDateField() {
    return cy.get('#addExpenseDate');
  }

  get mileageField() {
    return cy.get('#addExpenseMileage');
  }

  get numberOfLitersField() {
    return cy.get('#addExpenseLiters');
  }

  get totalCostField() {
    return cy.get('#addExpenseTotalCost');
  }
    get addButton(){
        return cy.contains('.btn-primary', 'Add');
    }

  verifyIfAddAnExpenseFormOpened(){
    cy.get('app-add-expense-modal').should('exist');
  }

  selectVehicle(vehicle){
    this.vehicleField
    .find('option')
    .contains(vehicle)
    .first()
    .then(opt => {
        this.vehicleField.select(opt.val());
    });
  }
  selectReportDate(date){
    this.reportDateField.clear();
    this.reportDateField.type(date);
  }

  typeMileage(km){
    this.mileageField.clear();
    this.mileageField.type(km);
  }

  typeLiters(ltr){
    this.numberOfLitersField.clear();
    this.numberOfLitersField.type(ltr);
  }

  typeTotalCost(cost){
    this.totalCostField.clear();
    this.totalCostField.type(cost);
  }

  confirmAdding(){
    // this.addButton.click()
    cy.get('.modal-footer>.btn-primary')
    .should('be.visible')
    .and('not.be.disabled')
    .click();
  }

}

export default new AddAnExpenseForm;
