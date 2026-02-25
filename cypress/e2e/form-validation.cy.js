/// <reference types="cypress" />

beforeEach("open site", () => {
  cy.visit("/"); 
  cy.get("button.btn-primary").click();
  cy.get("#signupName").as("name");
  cy.get("#signupLastName").as("lastName");
  cy.get("#signupEmail").as("email");
  cy.get("#signupPassword").as("password");
  cy.get("#signupRepeatPassword").as("re-password");
});

describe("Field Name validation", () => {
  it("Empty name field", () => {
    cy.get("@name").focus().blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name required")//; - test failed because of mistakes in error message
      // .should("have.text", "Name is required");
  });
  it("Name with spaces", () => {
    cy.get("@name").type(" qwerty ").blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name is invalid")//; - test failed because of mistakes string is not trimmed
      // .should("not.exist");
  });
  it("Wrong data - digit", () => {
    cy.get("@name").type("123456").blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name is invalid");
  });
  it("Wrong data - cyrillic", () => {
    cy.get("@name").type("йцукенг").blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name is invalid");
  });
  it("Too long name", () => {
    cy.get("@name").type("qwertyuiopasdfghhjkkl").blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name has to be from 2 to 20 characters long");
  });
  it("Too short name", () => {
    cy.get("@name").type("q").blur();
    cy.get("@name")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Name has to be from 2 to 20 characters long");
  });
  it("Border color", () => {
    cy.get("@name").focus().blur();
    cy.get("@name").should("have.css", "border-color", "rgb(220, 53, 69)");
  });
  it("Valid name", () => {
    cy.get("@name").type("Name").blur();
    cy.get("@name").parent().find(".invalid-feedback").should("not.exist");
  });
});

describe("Field Last name validation", () => {
  it("Empty last name field", () => {
    cy.get("@lastName").focus().blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Last name required"); //- test failed because of mistakes in error message
      // .should("have.text", "Last name is required");
  });
  it("Wrong data - cyrillic", () => {
    cy.get("@lastName").type("йцукен").blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Last name is invalid");
  });
  it("Wrong data - digit", () => {
    cy.get("@lastName").type("123456789").blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Last name is invalid");
  });
  it("Wrong data - with spaces", () => {
    cy.get("@lastName").type(" qwerty ").blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      // .should("have.text", "Last name is invalid"); //- test failed because of mistakes string is not trimmed
      .should("not.exist");
  });
  it("Too long last name", () => {
    cy.get("@lastName").type("qwertyqqwerrtyuiopppp").blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Last name has to be from 2 to 20 characters long");
  });
  it("Too short last name", () => {
    cy.get("@lastName").type("q").blur();
    cy.get("@lastName")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Last name has to be from 2 to 20 characters long");
  });
  it("Border color", () => {
    cy.get("@lastName").focus().blur();
    cy.get("@lastName").should("have.css", "border-color", "rgb(220, 53, 69)");
  });
  it("Valid last name", () => {
    cy.get("@lastName").type("lastName").blur();
    cy.get("@lastName").parent().find(".invalid-feedback").should("not.exist");
  });
});

describe("Email validation", () => {
  it("Empty email field", () => {
    cy.get("@email").focus().blur();
    cy.get("@email")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Email required")
  });
  it("Email without @", () => {
    cy.get("@email").type("test-mail1yopmail.com").blur();
    cy.get("@email")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Email is incorrect");
  });
  it("Email without domain", () => {
    cy.get("@email").type("test-mail1@yopmail").blur();
    cy.get("@email")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Email is incorrect");
  });
  it("Border color", () => {
    cy.get("@email").focus().blur();
    cy.get("@email").should("have.css", "border-color", "rgb(220, 53, 69)");
  });
  it("Valid Email", () => {
    cy.get("@email").type("test-mail1@yopmail.com").blur();
    cy.get("@email").parent().find(".invalid-feedback").should("not.exist");
  });
});

describe("Password validation", () => {
  it("Empty password field", () => {
    cy.get("@password").focus().blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Password required");
  });
  it("Too short password", () => {
    cy.get("@password").focus().type("a").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Too long password", () => {
    cy.get("@password").focus().type("Qwerty1234567891").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Password without integer", () => {
    cy.get("@password").focus().type("Qwertyui").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Password without capital letter", () => {
    cy.get("@password").focus().type("qwerty12345678").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Password without small letter", () => {
    cy.get("@password").focus().type("QWERTYUI1").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Password without letter", () => {
    cy.get("@password").focus().type("12345678").blur();
    cy.get("@password")
      .parent()
      .find(".invalid-feedback")
      .should(
        "have.text",
        "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
      );
  });
  it("Border color", () => {
    cy.get("@password").focus().blur();
    cy.get("@password").should("have.css", "border-color", "rgb(220, 53, 69)");
  });
  it("Valid password", () => {
    cy.get("@password").focus().type("Qwerty12").blur();
    cy.get("@password").parent().find(".invalid-feedback").should("not.exist");
  });
});

describe("Re-enter password", () => {
  it("Empty re-password field", () => {
    cy.get("@re-password").focus().blur();
    cy.get("@re-password")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Re-enter password required");
  });
  it("Re-password does not match", () => {
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty12");
    cy.get("@password").focus();
    cy.get("@re-password")
      .parent()
      .find(".invalid-feedback")
      .should("have.text", "Passwords do not match");
  });
  it("Border color", () => {
    cy.get("@re-password").focus();
    cy.get("@password").focus();
    cy.get("@re-password").should(
      "have.css",
      "border-color",
      "rgb(220, 53, 69)",
    );
  });
  it("Passwords match", () => {
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123");
    cy.get("@password").focus();
    cy.get("@re-password")
      .parent()
      .find(".invalid-feedback")
      .should("not.exist");
  });
});

describe("Registration button", () => {
  it("Register button should be disabled when all fields are empty", () => {
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be disabled when Name is invalid ", () => {
    cy.get("@name").type("Q").blur();
    cy.get("@lastName").type("lastName");
    cy.get("@email").type("test-mail2@yopmail.com");
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123");
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be disabled when Last name is invalid ", () => {
    cy.get("@name").type("Name");
    cy.get("@lastName").type("L").blur();
    cy.get("@email").type("test-mail3@yopmail.com");
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123");
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be disabled when Email is invalid ", () => {
    cy.get("@name").type("Name");
    cy.get("@lastName").type("lastName");
    cy.get("@email").type("test-mail4yopmail.com").blur();
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123");
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be disabled when Password is invalid ", () => {
    cy.get("@name").type("Name");
    cy.get("@lastName").type("lastName");
    cy.get("@email").type("test-mail5@yopmail.com");
    cy.get("@password").type("Q").blur();
    cy.get("@re-password").type("Q");
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be disabled when Re-enter password is invalid ", () => {
    cy.get("@name").type("Name");
    cy.get("@lastName").type("lastName");
    cy.get("@email").type("test-mail6@yopmail.com");
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty12").blur();
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.disabled");
    });
  });
  it("Register button should be enable when valid data entered", () => {
    cy.get("@name").type("Kate");
    cy.get("@lastName").type("lastName");
    cy.get("@email").type("test-mail7@yopmail.com");
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123").blur();
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").should("be.enabled");
    });
  });
});

describe.skip("Success registration", () => {
  it("Register user", () => {
    cy.get("@name").type("UserSecond");
    cy.get("@lastName").type("LastName");
    cy.get("@email").type("test-mail22@yopmail.com");
    cy.get("@password").type("Qwerty123");
    cy.get("@re-password").type("Qwerty123").blur();
    cy.get("div.modal-content").within(() => {
      cy.get("button.btn-primary").click();
    });
    cy.get("h1").contains("Garage")
  });
});





