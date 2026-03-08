/// <reference types="cypress" />
import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";
import Garage from "../pom/pages/GaragePage";
import AddCarForm from "../pom/forms/AddCarForm";


const car = {
  brand: "Fiat",
  model: "Panda",
  mileage: "55000"
}
describe("Garage", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.signInButton.click();
    SignInForm.loginWithCredentials(
      Cypress.env("userEmail"),
      Cypress.env("userPassword"),
    );
    cy.get("div.alert-success").should("be.visible");
  });

  it("it should add car to garage", () => {
    Garage.openAddCarForm();
    AddCarForm.selectBrand(car.brand);
    AddCarForm.selectModel(car.model);
    AddCarForm.typeMileage(car.mileage);
    AddCarForm.clickSubmitButton();
    Garage.verifyMessageIfCarAdded();
    Garage.verifyIfCarAdded(car.brand, car.model);
  });

  after(() => {
    Garage.deleteCar(car.brand, car.model)
  });
});
