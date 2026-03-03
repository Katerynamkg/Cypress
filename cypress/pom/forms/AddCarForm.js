class AddCarForm {
  get carBrandField() {
    return cy.get("#addCarBrand");
  }

  get carModelField() {
    return cy.get("#addCarModel");
  }

  get mileageField() {
    return cy.get("#addCarMileage");
  }

  get submitAddButton() {
    return cy.get(".modal-footer>.btn-primary");
  }

  // select brand
  selectBrand(brand) {
    this.carBrandField.select(brand);
  }
  // select model
  selectModel(model) {
    this.carModelField.select(model);
  }
  // enter mileage
  typeMileage(km) {
    this.mileageField.type(km);
  }
  // save car
  clickSubmitButton() {
    this.submitAddButton.click();
  }
}

export default new AddCarForm();
