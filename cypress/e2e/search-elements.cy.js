/// <reference types="cypress" />

beforeEach("open site", () => {
  cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
});

describe("find header elements", () => {
  it("find sign up button", () => {
    cy.get('div.hero-descriptor').find('button')
  });

  it("find About button", () => {
    // cy.get('nav.header_nav').find('button').first() OR
    cy.get('button[appscrollto="aboutSection"]')
  });

  it("find Contacts button", () => {
    // cy.get('nav.header_nav').find('button').last() OR
    cy.get('button[appscrollto="contactsSection"]')
  });

  it("find Guest log in button", () => {
    cy.get('button.-guest')
  });
  
  it("find Guest log in button", () => {
    cy.get('button.header_signin')
  });
});


describe('Footer links', ()=>{
    it('Socials icons', ()=>{
        cy.get('a[href*="facebook"]')
        cy.get('a[href*="t.me"]')
        cy.get('a[href*="youtube"]')
        cy.get('a[href*="instagram"]')
        cy.get('a[href*="linkedin"]')

        // OR
        // cy.get('a.socials_link').filter('[href*="facebook"]') 
    })
    it('contacts_link', ()=>{
        cy.get('a.display-4')
        cy.get('div.col-md-6>a.h4')
    })

}
)
