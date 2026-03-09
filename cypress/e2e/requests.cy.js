/// <reference types="cypress" />
import users from "../fixtures/users.json";

// beforeAll(() => {
//   HomePage.visit();
//   HomePage.signInButton.click();
//   SignInForm.loginWithCredentials(
//     Cypress.env('userEmail'),
//     Cypress.env('userPassword'),
//   );
//   cy.get('div.alert-success').should('be.visible');
// });

describe("Publick API requests", () => {
  let sid;
  before(() => {
    cy.request("POST", "api/auth/signin", {
      email: users.correctUser.email,
      password: users.correctUser.password,
    }).then((response) => {
      const headers = response.headers;
      sid = JSON.stringify(headers["set-cookie"][0].split(";")[0]);
      // cy.log(sid);
    });
  });
  // it("Get brands", () => {
  //   cy.log(sid);
  //   cy.request("GET", "api/cars/brands").then((response) => {
  //     const cars = response.body.data;
  //     cy.log(JSON.stringify(cars));
  //     expect(cars).to.have.length;
  //   });
  it("Add car", () => {
    cy.request({
      url: "api/cars",
      method: "POST", 
      body:{
        carBrandId: 1,
        carModelId: 1,
        mileage: 99999,
      },
      headers:{
        "Cookie": sid
      }

    }).then((response)=> {
      cy.log(JSON.stringify(response))
    });
  });
  });

  // it("Privat method + Auth", () => {
  //   cy.request("POST", "api/auth/signin", {
  //     email: users.correctUser.email ,
  //     password: users.correctUser.password,
  //   }).then((response) => {
  //     const headers = response.headers;
  //     const sid = JSON.stringify(headers['set-cookie'][0].split(";")[0])
  //     cy.log(sid)

  //   })
  // });

  // 

