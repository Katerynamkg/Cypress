/// <reference types="cypress" />
import users from '../fixtures/users.json';

describe('Public API requests', () => {
  let sid;
  let carID;
  const today = new Date().toISOString().split('T')[0];
  let expensesID;

  before(() => {
    cy.request('POST', '/api/auth/signin', {
      email: users.correctUser.email,
      password: users.correctUser.password,
    }).then((response) => {
      const headers = response.headers;
      sid = headers['set-cookie'][0].split(';')[0];
    });
  });

  it('Delete all cars', () => {
    cy.request({
      url: 'api/cars',
      method: 'GET',
      headers: { Cookie: sid },
    }).then((response) => {
      response.body.data.forEach((car) => {
        cy.request({
          method: 'DELETE',
          url: `api/cars/${car.id}`,
          headers: { Cookie: sid },
        });
      });
      expect(response.status).to.eq(200);
    });
  });

  it('Add car', () => {
    cy.request({
      url: 'api/cars',
      method: 'POST',
      body: {
        carBrandId: 1,
        carModelId: 1,
        mileage: 99999,
      },
      headers: {
        Cookie: sid,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body));
      carID = response.body.data.id;
      // cy.log(carID);
      expect(response.status).to.eq(201);
      expect(response.body).to.exist;
      expect(response.body.data).to.have.property('id');
      expect(response.body.data).to.have.property('carBrandId');
      expect(response.body.data).to.have.property('carModelId');
      expect(response.body.data).to.have.property('initialMileage');
    });
  });

  it('Add expenses', () => {
    cy.request({
      url: 'api/expenses',
      method: 'POST',
      body: {
        carId: carID,
        reportedAt: today,
        mileage: 100000,
        liters: 11,
        totalCost: 11,
        forceMileage: false,
      },
      headers: {
        Cookie: sid,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body.data));
      expensesID = response.body.data.id;
      cy.log(expensesID);
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id');
      expect(response.body.data).to.have.property('carId');
    });
  });

  it('Edit an expense', () => {
    cy.request({
      url: `api/expenses/${expensesID}`,
      method: 'PUT',
      body: {
        carId: carID,
        reportedAt: today,
        mileage: 100000,
        liters: 11,
        totalCost: 11,
        forceMileage: false,
      },
      headers: {
        Cookie: sid,
      },
    }).then((response) => {
      cy.log(JSON.stringify(response.body.data));
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property('id');
      expect(response.body.data).to.have.property('carId');
    });
  });

  it('Delete an expense', () => {
    cy.request({
      url: `api/expenses/${expensesID}`,
      method: 'DELETE',
      headers: {
        Cookie: sid,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
