/// <reference types="cypress" />
import HomePage from '../pom/pages/HomePage';
import SignInForm from '../pom/forms/SignInForm';
import Garage from '../pom/pages/GaragePage';
import AddCarForm from '../pom/forms/AddCarForm';
import FuelExpensesPage from '../pom/pages/FuelExpensesPage';
import AddAnExpenseForm from '../pom/forms/AddAnExpenseForm';

const car = {
  brand: 'Fiat',
  model: 'Panda',
  mileage: '70000',
  vehicle: 'Fiat Panda',
  date: '03.03.2026',
  liters:'45',
  cost: '4000'
};
describe('Garage', () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.signInButton.click();
    SignInForm.loginWithCredentials(
      Cypress.env('userEmail'),
      Cypress.env('userPassword'),
    );
    Garage.openAddCarForm();
    AddCarForm.selectBrand(car.brand);
    AddCarForm.selectModel(car.model);
    AddCarForm.typeMileage(car.mileage);
    AddCarForm.clickSubmitButton();
    Garage.verifyMessageIfCarAdded();
    Garage.verifyIfCarAdded(car.brand, car.model);
    FuelExpensesPage.clickExpensesSideBarButton();
  });

  it('it should add an expense', () => {
    let uniqMilage = car.mileage + Date.now() % 10;

    FuelExpensesPage.openAddAnExpenseForm();
    AddAnExpenseForm.verifyIfAddAnExpenseFormOpened();
    AddAnExpenseForm.selectVehicle(car.vehicle);
    AddAnExpenseForm.selectReportDate(car.date);
    AddAnExpenseForm.typeMileage(uniqMilage);
    AddAnExpenseForm.typeLiters(car.liters);
    AddAnExpenseForm.typeTotalCost(car.cost);
    AddAnExpenseForm.confirmAdding();
    FuelExpensesPage.verifyIfExpenseAdded();

  });
  
  after(() => {
    FuelExpensesPage.clickGarageSideBarButton();
    Garage.deleteCar(car.brand, car.model);
  });
});